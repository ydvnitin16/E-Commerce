import jwt from 'jsonwebtoken';

// Auth middleware to auth user with jWT
const auth = async (req, res, next) => {
    // Check is authHeader exits
    const authHeader = req.cookies.authHeader;
    if (!authHeader || !authHeader.startsWith('Bearer '))
        return res.status(401).json({ message: 'Unauthorized User' });

    try {
        const token = authHeader.split(' ')[1];
        const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        return res
            .status(500)
            .json({ message: 'Server error. Please try again later.' });
    }
};

// Security -> Admin middleware to check role
const isAdmin = (req, res, next) => {
    const { role } = req.user;

    if (role !== 'admin')
        return res
            .status(403)
            .json({ message: 'You have no permission to access this page' });

    next();
};

export { auth, isAdmin };
