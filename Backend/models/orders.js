import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                min: 1,
            },
        },
    ],
    totalPrice: {
        type: Number,
        required: true,
        min: 0,
    },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true },
        zipCode: { type: String, required: true },
    },
    paymentMethod: {
        type: String,
        enum: ['cash on delivery', 'credit/debit cards', 'digital wallets'],
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'shipped', 'out for delivery', 'delivered'],
        default: 'pending',
    },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
