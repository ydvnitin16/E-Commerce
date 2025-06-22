// User Sign-up/in -> Validate fields
const validateUser = (type = 'register') => {
    return (req, res, next) => {
        const { name, email, password } = req.body;

        if (!email || !password)
            return res
                .status(400)
                .json({ message: 'Email and password are required.' });

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(email))
            return res.status(400).json({ message: 'Invalid email format.' });

        if (type === 'register' && password.length < 6)
            return res
                .status(400)
                .json({ msg: 'Password must be at least 6 characters.' });

        if (type === 'register' && (!name || name.trim().length < 2))
            return res.status(400).json({
                msg: 'Name is required and must be at least 2 characters.',
            });

        next();
    };
};

export { validateUser };
