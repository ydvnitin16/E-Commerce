import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    quantity: { type: Number, required: true, default: 1 },
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true,
    },
    price: { type: Float16Array, required: true },
});

const OrderItem = mongoose.model('Order', orderItemSchema);

export default OrderItem;
