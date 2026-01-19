import Product from '../models/product.js';
import { storeProduct } from '../services/product.service.js';
import ApiSuccess from '../utils/apiSuccess.js';

// Admin -> Add product
export const createProduct = async (req, res) => {
    const storeId = req.store._id;
    const files = req.files;

    // attach images to the product
    const productImages = files.map((file) => {
        const image = {
            url: file.path,
            public_id: file.filename,
        };
        console.log(image);
        return image;
    });
    req.body.images = productImages;
    console.log(req.body);

    const product = await storeProduct({ ...req.body, storeId });

    ApiSuccess(res, 200, 'Product created successfully', { product });
};

// Admin -> Delete product
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        console.log(`Entered`);

        const product = await Product.findByIdAndDelete(id);
        console.log(product);
        if (!product)
            return res.status(404).json({ message: 'Product Not Exist' });

        return res
            .status(200)
            .json({ message: 'Product Deleted Successfully' });
    } catch (error) {
        res.status(500).json({
            message: 'Server error. please try again later.',
        });
    }
};

// Admin -> Update product
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product)
            return res.status(404).json({ message: 'Product Not Exist' });

        product.inStock = req.body.inStock;
        await product.save();
        res.status(200).json({ message: 'Product Updated Successfully.' });
    } catch (error) {
        res.status(500).json({
            message: 'Server error. please try again later.',
        });
    }
};
