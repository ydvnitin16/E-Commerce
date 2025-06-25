import express from 'express';
import Product from '../models/Products.js';

const router = express.Router();

// User -> Shop -> Show products
router.get('/products', async (req, res) => {
    const { category, page, limit, bestSeller } = req.query;
    try {
        let query = {};

        if (category && category !== 'All') query.category = category;
        let productQuery = Product.find(query); // returns object

        if (bestSeller) productQuery = productQuery.sort({ itemSold: -1 });

        const skip = (Number(page) - 1) * Number(limit);
        productQuery = productQuery.skip(skip).limit(Number(limit));

        const products = await productQuery; // actual call happens here.

        if (!products || products.length === 0)
            return res.status(404).json({ message: 'No Products' });

        res.status(200).json({ message: 'All Products', products });
    } catch (error) {
        res.status(500).json({
            message: 'Server error. please try again later.',
        });
    }
});

// Product Route -> Show details about product
router.get('/product/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product)
            return res.status(404).json({ message: 'Product Not Found' });

        res.status(200).json({ message: 'All Products', product });
    } catch (error) {
        res.status(500).json({
            message: 'Server error. please try again later.',
        });
    }
});

// Get products by array of IDs (cart)
router.post('/products/cart', async (req, res) => {
    const { ids } = req.body;

    if (!ids || !Array.isArray(ids)) {
        return res
            .status(400)
            .json({ message: 'Invalid or missing IDs array' });
    }

    try {
        const products = await Product.find({ _id: { $in: ids } });

        if (!products || products.length === 0) {
            return res
                .status(404)
                .json({ message: 'No products found for given IDs' });
        }

        res.status(200).json({ message: 'Cart Products', products });
    } catch (error) {
        res.status(500).json({
            message: 'Server error. please try again later.',
        });
    }
});

export default router;
