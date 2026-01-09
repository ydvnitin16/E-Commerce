import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            url: { type: String, required: true },
            public_id: { type: String, required: true },
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ['CUSTOMER', 'VENDOR', 'ADMIN'],
            default: 'USER',
        },
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
