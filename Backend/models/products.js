import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    price: Number,
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
    },
    inStock: Boolean,
});

const Product = mongoose.model('Product', productSchema);

export { Product };
