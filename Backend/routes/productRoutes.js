import express from 'express';
import Product from '../models/Products.js';

const router = express.Router();

router.get('/products', async (req, res) => {
    const { category } = req.query;
    try {
        let query = {};

        if (category) query.category = category;

        const products = await Product.find(query); // if category given then find by category otherwise all
        if (!products) return res.status(404).json({ message: 'No Products' });

        res.status(200).json({ message: 'All Products', data: products });
    } catch (error) {
        res.status(500).json({
            message: 'Server error. please try again later.',
        });
    }
});

router.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product)
            return res.status(404).json({ message: 'Product Not Found' });

        res.status(200).json({ message: 'All Products', data: product });
    } catch (error) {
        res.status(500).json({
            message: 'Server error. please try again later.',
        });
    }
});

export default router;
