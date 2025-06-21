import User from '../models/Users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Register user_Store on Database
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check is User already exists
        const existingUser = await User.findOne({ email });

        if (existingUser)
            return res.status(409).json({ message: 'Email already exists!' });

        // hash password using bcrypt
        const hashPwd = await bcrypt.hash(password, 10);
        console.log(hashPwd);
        const user = await User({
            name,
            email,
            password: hashPwd,
        });
        await user.save();

        res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
        console.error('Error in Register User:', error);
        res.status(500).json({
            message: 'Server error. Please try again later.',
        });
    }
};

// Handle Login
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Get user
        const userInfo = await User.findOne({ email });

        // If Email not found
        if (!userInfo)
            return res.status(404).json({ message: 'Invalid Credentials' });

        const isPasswordCorrect = await bcrypt.compare(
            password,
            userInfo.password
        );

        if (!isPasswordCorrect)
            return res.status(404).json({ message: 'Invalid Credentials' });

        // If correct credentials_ auth user

        const token = jwt.sign(
            {
                userId: userInfo._id,
                userName: userInfo.name,
                userRole: userInfo.role,
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '3d' }
        );

        res.cookie('authHeader', `Bearer ${token}`, {
            httpOnly: true, // sent only to http
            secure: process.env.NODE_ENV === 'production', // cookie only set to the https
            sameSite: 'lax', // accessed by same domain
            maxAge: 3 * 24 * 60 * 60 * 1000, // Expires in 3 Days
        });

        res.status(200).json({ message: 'Logged In Successfully.' });
    } catch (error) {
        res.status(500).json({
            message: 'Server error. Please try again later.',
        });
    }
};

const logoutUser = (req, res) => {
    res.clearCookie('authHeader');
    res.status(200).json({ message: 'Logout Successfully.' });
};

export { registerUser, loginUser, logoutUser };
