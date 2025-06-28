import express from 'express';
import multer from 'multer';
import { auth, isAdmin } from '../middlewares/auth.js';
import {
    addProduct,
    deleteProduct,
    updateProduct,
} from '../controllers/productController.js';
import { validateProduct } from '../middlewares/product.js';
import { allOrders, updateStatus } from '../controllers/orderController.js';
import { storage } from '../config/cloudinary.js';

const router = express.Router();

const uploads = multer({
    storage,
});

// Admin Routes -> CRUD Products
router.post(
    '/product',
    auth,
    isAdmin,
    uploads.single('image'),
    validateProduct,
    addProduct
);
router.delete('/product/:id', auth, isAdmin, deleteProduct);
router.put('/product/:id', auth, isAdmin, updateProduct);

// Admin Routes -> Manage orders
router.get('/orders', auth, isAdmin, allOrders);
router.put('/order/:id/status', auth, isAdmin, updateStatus);

export default router;
