import Store from '../models/store.js';
import ApiError from '../utils/apiError.js';

export const createStoreService = async ({
    name,
    description,
    slug,
    userId,
    image,
    address,
    email,
    contact,
}) => {
    const isAlreadyExists = await Store.findOne({ slug });
    if (isAlreadyExists)
        throw new ApiError(409, 'Please use different slug name');

    const store = await Store.create({
        name,
        description: description || '',
        slug,
        userId,
        status: 'PENDING',
        image: image || null,
        isActive: true,
        address,
        email,
        contact,
    });

    return store;
};

const allowedStatuses = ['PENDING', 'APPROVED', 'REJECTED'];

export const updateStoreStatusService = async ({ storeId, status }) => {
    let store = await Store.findById(storeId);
    if (!store) throw new ApiError(404, 'Store not exist');

    if (!status || !allowedStatuses.includes(status))
        throw new ApiError(400, 'Invalid store status');

    if (store.status === status)
        throw new ApiError(400, `Store already ${status.toLowerCase()} `);

    store.status = status;
    if (status === 'APPROVED') {
        store.isActive = true;
    }

    const updatedStore = await store.save();

    return updatedStore;
};

export const getStoresService = async () => {
    const stores = await Store.find();
    return stores || [];
};
