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

const allowedRoles = ['CUSTOMER', 'VENDOR', 'ADMIN'];

export const updateUserRole = async ({ userId, role }) => {
    const user = await User.findById(userId);
    if (!user) throw new ApiError(404, 'User not found');

    if (!role || !allowedRoles.includes(role))
        throw new ApiError(400, 'Invalid user role');

    if (user.role === role)
        throw new ApiError(400, `Store already ${role.toLowerCase()} `);

    user.role = role;
    const updatedUser = await user.save();

    return updatedUser;
};
