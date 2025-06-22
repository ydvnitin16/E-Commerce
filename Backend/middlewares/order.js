// User Order -> Validate each field before order placed
const validateOrder = (req, res, next) => {
    const { items, address, paymentMethod } = req.body;
    const allowedPayMode = [
        'cash on delivery',
        'credit/debit cards',
        'digital wallets',
    ];

    if (!Array.isArray(items) || items.length === 0)
        return res
            .status(400)
            .json({ message: "Order can't placed without items" });

    if (
        !address ||
        typeof address !== 'object' ||
        Object.values(address).some((field) => !field || field.trim() === '')
    )
        return res
            .status(400)
            .json({ message: 'Address fields are required.' });

    if (!allowedPayMode.includes(paymentMethod))
        return res
            .status(400)
            .json({ message: 'Please select valid payment mode.' });

    next();
};
export { validateOrder };
