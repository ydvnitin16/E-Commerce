const auth = async (req, res, next) => {
    // Check is authHeader exits
    const authHeader = req.cookies.authHeader;
    if (!authHeader || !authHeader.startsWith('Bearer '))
        return res.status(401).json({ message: 'Unauthorized User' });

    try {
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        return res
            .status(500)
            .json({ message: 'Server error. Please try again later.' });
    }
};
