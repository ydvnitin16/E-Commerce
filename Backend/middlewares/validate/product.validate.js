import ApiError from '../../utils/apiError.js';

const validateProduct = (req, res, next) => {
    const { name, description, price, mrp } = req.body;
    const images = req.files;

    if (!name || !description || !mrp || !price)
        throw new ApiError(400, 'Please fill all required fields');

    if (name.length < 5)
        throw new ApiError(400, 'Name must contain at least 5 characters');

    if (description.length < 10)
        throw new ApiError(
            400,
            'Description must contain at least 10 characters',
        );

    if (isNaN(mrp) || Number(mrp) < 1)
        throw new ApiError(
            400,
            'MRP must be a number greater than or equal to 1',
        );

    if (isNaN(price) || Number(price) < 1)
        throw new ApiError(
            400,
            'Price must be a number greater than or equal to 1',
        );

    if (!images || images.length === 0)
        throw new ApiError(400, 'Please upload at least one product image');

    next();
};

export { validateProduct };
