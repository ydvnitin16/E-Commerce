import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    password: String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
});

const User = mongoose.model('User', userSchema);

export default User;
