import express from 'express';
import multer from 'multer';
import { auth, isAdmin } from '../middlewares/auth.js';
import {
    addProduct,
    deleteProduct,
    updateProduct,
} from '../controllers/productController.js';
import { validateProduct } from '../middlewares/product.js';

const router = express.Router();

// Image uploads using multer
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + Date.now() + file.originalname);
    },
});

const uploads = multer({
    storage,
});

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

export default router;
