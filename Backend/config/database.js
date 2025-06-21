import dotenv from 'dotenv';
import mongoose, { connect } from 'mongoose';
dotenv.config();

async function connectDB() {
    await mongoose
        .connect(process.env.MONGO_URI)
        .then(() => console.log(`Databse Connected.`));
}

export { connectDB };
