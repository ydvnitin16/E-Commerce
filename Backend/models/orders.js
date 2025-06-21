import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    items: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: Number,
        },
    ],
    totalPrice: Number,
    address: String,
    status: {
        type: String,
        enum: ['pending', 'out for delivery', 'delivered'],
    },
});

const Order = mongoose.model('Product', orderSchema);

export { Order };
