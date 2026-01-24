import React from 'react';

const ProductListItem = ({ product }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-4 py-3 hover:bg-zinc-50 cursor-pointer">
            <div className="flex items-center gap-3 md:col-span-5">
                <div className="h-12 w-12 rounded-md bg-zinc-100 overflow-hidden flex-shrink-0">
                    <img
                        src={product.images[0]?.url}
                        alt={`${product.name} image`}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="min-w-0">
                    <p className="text-sm font-medium truncate">
                        {product.name}
                    </p>
                </div>
            </div>

            <div className="md:col-span-2 text-sm text-zinc-600">
                Electronics
            </div>

            <div className="flex flex-col md:col-span-2 md:text-right text-sm font-medium">
                <span className="line-through text-zinc-500 font-normal">
                    ₹{product.mrp}
                </span>
                <span>₹{product.price}</span>
            </div>

            <div className="md:col-span-3 md:flex md:justify-end">
                <span
                    className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                        product.inStock
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                    }`}
                >
                    {product.inStock ? 'Available' : 'Out of stock'}
                </span>
            </div>
        </div>
    );
};

export default ProductListItem;
