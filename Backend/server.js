import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import connectDB from './config/database.js';
import adminRoutes from './routes/adminRoutes.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

const app = express();
dotenv.config();
connectDB();

// Middlewares
app.use(
        cors({
            origin: 'http://192.168.31.148:5173',
            credentials: true, // 👈 Tell server i accept your cookies
        })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/', productRoutes);
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
app.use('/orders', orderRoutes);

// Run Server On Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:3000`);
});
