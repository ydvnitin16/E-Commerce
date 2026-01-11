import Store from '../models/store.js';
import ApiError from '../utils/apiError.js';
export const createStore = async ({
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
        description,
        slug,
        userId,
        image,
        address,
        email,
        contact,
    });

    return store;
};
