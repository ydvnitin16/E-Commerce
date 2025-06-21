import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    Password: String,
    role: {
        type: String,
        enum: ['user', 'admin']
    }
});

const User = mongoose.model('User', userSchema);

export { User };
