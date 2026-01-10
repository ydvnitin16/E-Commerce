import express from 'express';
import { validateUserForm } from '../middlewares/validate/auth.validate.js';
import { logoutUser, registerUser, loginUser } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', validateUserForm('register'), registerUser);
router.post('/login', validateUserForm('login'), loginUser);
router.delete('/logout', logoutUser);

export default router;
