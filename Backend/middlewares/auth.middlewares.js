import jwt from 'jsonwebtoken';
import ApiError from '../utils/apiError.js';

export const auth = async (req, res, next) => {
    const authHeader = req?.cookies?.authHeader;
    if (!authHeader || !authHeader.startsWith('Bearer '))
        throw new ApiError(401, 'Unauthorized user');

    try {
        const token = authHeader.split(' ')[1];
        const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        throw new ApiError(401, 'Invalid or expired token');
    }
};

export const isAdmin = (req, res, next) => {
    const { role } = req.user;

    if (role !== 'admin')
        throw new ApiError(403, 'You have no permission to access this page');

    next();
};
