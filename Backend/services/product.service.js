import Product from '../models/product.js';

export const storeProduct = async ({
    name,
    description,
    mrp,
    price,
    images,
    storeId,
}) => {
    const product = await Product.create({
        name,
        description,
        mrp: Number(mrp),
        price: Number(price),
        images: images,
        storeId: storeId,
        inStock: true,
    });
    return product;
};
