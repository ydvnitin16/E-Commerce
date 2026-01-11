import ApiError from '../../utils/apiError.js';

export const validateUserForm = (type = 'register') => {
    return (req, res, next) => {
        const { name, email, password } = req.body;

        if (!email || !password)
            throw new ApiError(400, 'Email and password required');

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(email))
            throw new ApiError(400, 'Invalid email format');

        if (type === 'register' && password.length < 6)
            throw new ApiError(400, 'Password must be atleast 6 characters');

        if (type === 'register' && (!name || name.trim().length < 2))
            throw new ApiError(400, 'Name must be atleast 2 characters');

        next();
    };
};
