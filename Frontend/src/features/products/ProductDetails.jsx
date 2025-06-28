import { useLoaderData, useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { useHandleAddToCart } from '../../utils/handlerFunctions.js';
import useCartStore from '../../stores/UseCartStore.jsx';
import { useState } from 'react';

const ProductDetails = () => {
    const { id } = useParams();
    const handleAddToCart = useHandleAddToCart();
    const cartIds = useCartStore(state => state.cartIds)
    const [qty, setQty] = useState(1)

    const {
        data: product,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['product', id],
        queryFn: async () => {
            const URL = `${import.meta.env.VITE_SERVER_URL}/product/${id}`;

            const res = await fetch(URL);
            const data = await res.json();
            console.log(data);
            return data.product;
        },
        staleTime: 3 * 60 * 1000,
    });

    if (isLoading) return <div className="p-8 text-center">Loading...</div>;
    if (error)
        return (
            <div className="p-8 text-center text-red-600">
                Error loading product
            </div>
        );
    if (!product) return null;

    return (
        <>
            <section className="pt-35 grid md:grid-cols-2 gap-8 px-6 py-12 max-w-7xl mx-auto">
                <div className="rounded-2xl overflow-hidden bg-gray-200">
                    <img
                        src={product.image.url}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-col justify-center gap-4">
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="text-xl font-semibold text-green-600">
                        ₹{product.price}
                    </p>
                    <p className="text-sm text-gray-600">
                        Rating ★ Total Item Sold: {product.itemSold}
                    </p>

                    <div className="flex items-center gap-4">
                        {cartIds.some(item => item.productId === product._id) ? '' : <input
                            type="number"
                            defaultValue={1}
                            min={1}
                            onChange={(e) => setQty(Number(e.target.value))}
                            className="w-16 border rounded px-2 py-1"
                        />  }
                        {product.inStock ? (
                            cartIds.some(item => item.productId === product._id) ? (
                                <button
                                    className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition cursor-pointer"
                                >
                                    Added
                                </button>
                            ) : (
                                <button
                                    onClick={() => handleAddToCart(product._id, qty)}
                                    className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition cursor-pointer"
                                >
                                    Add to Cart
                                </button>
                            )
                        ) : (
                            <button
                                disabled={true}
                                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition cursor-pointer"
                            >
                                Out of Stock
                            </button>
                        )}
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-8 max-w-7xl mx-auto">
                <div className="p-4 text-center bg-white/20 backdrop-blur-md border rounded-xl">
                    <h4 className="font-semibold">Free Shipping</h4>
                    <p className="text-xs text-gray-600">
                        On orders above ₹2000
                    </p>
                </div>
            </section>

            <div className="px-6 max-w-4xl mx-auto py-6">
                <h3 className="text-xl font-semibold mb-2">Description</h3>
                <p className="text-gray-700">{product.description}</p>
            </div>
        </>
    );
};

export default ProductDetails;
