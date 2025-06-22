import Product from '../models/Products.js';

// Admin -> Add product
const addProduct = async (req, res) => {
    const { name, description, price, category, inStock } = req.body;
    const imagePath = req.file.path;
    try {
        const product = await Product({
            name,
            description,
            price: Number(price),
            category,
            image: imagePath,
            inStock: inStock,
        });

        await product.save();
        res.status(200).json({ message: 'Product Added Successfully.' });
    } catch (error) {
        res.status(500).json({
            message: 'Server error. please try again later.',
        });
    }
};

// Admin -> Delete product
const deleteProduct = async (req, res) => {
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
const updateProduct = async (req, res) => {
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

export { addProduct, deleteProduct, updateProduct };
