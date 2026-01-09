import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            min: 1,
        },
        image: {
            type: [
                {
                    url: { type: String, required: true },
                    public_id: { type: String, required: true },
                },
            ],
            required: true,
        },
        storeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Store',
            required: true,
        },
        inStock: {
            type: Boolean,
            required: true,
            default: true,
        },
        sold: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
