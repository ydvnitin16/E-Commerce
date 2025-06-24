// Admin Add product -> Validate fields before adding product
const validateProduct = (req, res, next) => {
    const { name, description, price, category } = req.body;
    const image = req.file;

    const allowedCategories = [
        'Smartphones',
        'Laptops',
        'Earbuds & Headphones',
        'Smartwatches',
        'Televisions',
        'Cameras',
        'Gaming Devices',
        'Home Appliances',
        'Computer Accessories',
    ];

    if (!name || !description || !price || !category)
        return res.status(400).json({ message: 'Please fill all the fields' });

    if (description.length < 10)
        return res.status(400).json({
            message: 'Description Must contain alteast 10 characters.',
        });

    if (isNaN(price) || Number(price) <= 0)
        return res.status(400).json({ message: 'Price must be more than 1' });

    if (!allowedCategories.includes(category))
        return res.status(400).json({
            message: 'Invalid Category is passed',
        });

    if (!image) return res.status(400).json({ message: 'Please add a image.' });

    next();
};

export { validateProduct };
