import express from 'express';
import { allowedRoles, auth } from '../middlewares/auth.middlewares.js';
import { getStores, updateStoreStatus } from '../controllers/admin.controllers.js';

const router = express.Router();

router.put('/store/:storeId/status', auth, allowedRoles('ADMIN'), updateStoreStatus);
router.get('/stores', auth, allowedRoles('ADMIN'), getStores);

export default router;
