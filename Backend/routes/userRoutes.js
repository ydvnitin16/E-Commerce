import express from 'express';
import { validateUser } from '../middlewares/userValidate.js';
import { logoutUser, registerUser, loginUser } from '../controllers/userController.js';

const router = express.Router();

// User Routes to Register/Login and Logout
router.post('/register', validateUser('register'), registerUser);
router.post('/login', validateUser('login'), loginUser);
router.delete('/logout', logoutUser);

export default router;
