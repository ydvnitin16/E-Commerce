import express from 'express';
import { auth } from '../middlewares/auth.middlewares.js';
import { validateCreateStoreForm } from '../middlewares/validate/store.validate.js';
import { createStoreRequest } from '../controllers/store.controller.js';

const router = express.Router();

router.post(
    '/create-request',
    auth,
    validateCreateStoreForm,
    createStoreRequest
);

export default router;
