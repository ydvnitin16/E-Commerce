import mongoose from 'mongoose';

const ratingSchema = new mongoose.Schema({
    rating: { type: Number, min: 0, max: 5, required: true },
    comment: { type: String },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true,
    },
});

const Rating = mongoose.model('Rating', ratingSchema);

export default Rating;
