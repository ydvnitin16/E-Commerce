import User from '../models/user.js';
import ApiError from '../utils/apiError.js';

export const createUserService = async ({ name, email, password, image }) => {
    const isUserAlreadyExists = await User.findOne({ email });
    if (isUserAlreadyExists) {
        throw new ApiError(409, 'Email already exists.');
    }

    const user = await User.create({
        name,
        email,
        password,
        role: 'CUSTOMER',
        image: image || null,
    });
    return user;
};

export const getUserService = async (query) => {
    const user = await User.findOne(query);
    return user;
};
