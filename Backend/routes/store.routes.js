import express from 'express';
import { allowedRoles, auth } from '../middlewares/auth.middlewares.js';
import { validateCreateStoreForm } from '../middlewares/validate/store.validate.js';
import { createStoreRequest, updateStoreStatus } from '../controllers/store.controllers.js';

const router = express.Router();

router.post(
    '/create-request',
    auth,
    validateCreateStoreForm,
    createStoreRequest
);

router.put('/:storeId/status', auth, allowedRoles('ADMIN'), updateStoreStatus);

export default router;
