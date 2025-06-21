import express from "express";
import { auth, isAdmin } from "../middlewares/auth.js"
import { addProduct } from "../controllers/productController.js";
import { validateProduct } from "../middlewares/product.js";

const router = express.Router();

router.post('/product', auth, isAdmin, validateProduct, addProduct)


export default router;