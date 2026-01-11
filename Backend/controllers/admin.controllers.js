import {
    getStoresService,
    updateStoreStatusService,
} from '../services/store.service.js';
import ApiSuccess from '../utils/apiSuccess.js';

export const updateStoreStatus = async (req, res) => {
    const { storeId } = req.params;
    const { status } = req.body;
    const store = await updateStoreStatusService({ storeId, status });
    ApiSuccess(res, 200, `Store ${status}`, store);
};

export const getStores = async (req, res) => {
    const stores = await getStoresService();
    ApiSuccess(res, 200, 'Stores retrieved successfully', { stores });
};
