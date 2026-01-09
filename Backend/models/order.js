import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        totalAmount: {
            type: Number,
            required: true,
            min: 0,
        },
        storeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Store',
            required: true,
        },
        addressId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        paymentMethod: {
            type: String,
            enum: ['COD', 'STRIPE'],
            required: true,
        },
        isPaid: {
            type: Boolean,
            required: true,
            default: false,
        },
        status: {
            type: String,
            enum: ['ORDER_PLACED', 'PROCESSING', 'SHIPPED', 'DELIVERED'],
            default: 'ORDER_PLACED',
        },
    },
    { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
