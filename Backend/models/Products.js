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
        image: {
            url: { type: String, required: true },
            public_id: { type: String, required: true },
        },
        price: {
            type: Number,
            required: true,
            min: 1,
        },
        category: {
            type: String,
            enum: [
                'Smartphones',
                'Laptops',
                'Earbuds & Headphones',
                'Smartwatches',
                'Televisions',
                'Cameras',
                'Gaming Devices',
                'Home Appliances',
                'Computer Accessories',
            ],
            required: true,
        },
        inStock: {
            type: Boolean,
            default: true,
        },
        itemSold: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
