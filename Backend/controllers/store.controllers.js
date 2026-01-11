import {
    createStoreService,
} from '../services/store.service.js';
import ApiSuccess from '../utils/apiSuccess.js';

export const createStoreRequest = async (req, res) => {
    const userId = req.user.id;
    const store = await createStoreService({ ...req.body, userId });

    ApiSuccess(res, 201, 'Store Request created', { store });
};
