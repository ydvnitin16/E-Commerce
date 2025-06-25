import React from 'react';
import useCartStore from '../../stores/UseCartStore.jsx';
import { useQuery } from '@tanstack/react-query';
import { useHandleRemoveFromCart } from '../../utils/handlerFunctions.js';

const CartPage = () => {
    const cartIds = useCartStore((state) => state.cartIds);

    const handleRemoveFromCart = useHandleRemoveFromCart();

    const {
        data: products,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['cart-products'],
        queryFn: async () => {
            const URL = `${import.meta.env.VITE_SERVER_URL}/products/cart`;
            const res = await fetch(URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ids: cartIds }),
            });
            const data = await res.json();
            return data.products;
        },
        staleTime: 1000 * 60 * 5,
    });

    return (
        <div className="min-h-screen bg-white flex flex-col items-center pt-30">
            {/* Title & Steps */}
            <section className="text-center my-10">
                <h1 className="text-3xl font-semibold">Cart</h1>
                <div className="mt-6 flex justify-center space-x-4 text-sm">
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                            1
                        </div>
                        <span className="mt-1">Shopping cart</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full border">2</div>
                        <span className="mt-1">Checkout details</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full border">3</div>
                        <span className="mt-1">Order complete</span>
                    </div>
                </div>
            </section>

            {/* Main Section */}
            <main className="flex flex-col justify-center px-4 md:px-10 gap-10 sm:w-xl md:w-2xl lg:w-4xl">
                {/* Product List */}
                <div className="flex-1">
                    <div className="space-y-6">
                        {products &&
                            products.map((product, index) => (
                                <div
                                    key={product._id}
                                    className="flex gap-4 items-start border-b pb-4"
                                >
                                    <img
                                        src={product.image}
                                        alt="Product"
                                        className="w-16 h-16 object-cover"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-semibold">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm text-gray-500"></p>
                                        <button
                                            onClick={() =>
                                                handleRemoveFromCart(
                                                    product._id
                                                )
                                            }
                                            className="text-sm text-gray-500 mt-1  cursor-pointer"
                                        >
                                            ✖ Remove
                                        </button>
                                    </div>
                                    <input
                                        className="border p-1 font-medium w-15"
                                        type="number"
                                        defaultValue={1}
                                    />
                                    <div className="text-right min-w-[60px]">
                                        <p className="font-semibold">
                                            ₹ {product.price}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            ₹ Total Price
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* Coupon */}
                    <div className="mt-6">
                        <h4 className="font-semibold">Have a coupon?</h4>
                        <p className="text-sm text-gray-500">
                            Add your code for an instant cart discount
                        </p>
                        <div className="flex mt-2 max-w-md">
                            <input
                                className="border px-4 py-2 flex-1"
                                placeholder="Coupon Code"
                            />
                            <button className="bg-black text-white px-4 py-2  cursor-pointer">
                                Apply
                            </button>
                        </div>
                    </div>
                </div>

                {/* Cart Summary */}
                <div className="border p-6 rounded-md w-full max-w-md mx-auto bg-gray-50 shadow-sm">
    <h4 className="font-semibold text-lg mb-4 text-center">Cart Summary</h4>

    <div className="flex justify-between mb-2 text-sm text-gray-700">
        <span>Subtotal</span>
        <span>₹ {}</span>
    </div>

    <div className="flex justify-between font-semibold text-base mb-4">
        <span>Total</span>
        <span>₹ {}</span>
    </div>

    <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition cursor-pointer">
        Proceed to Checkout
    </button>
</div>

            </main>
        </div>
    );
};

export default CartPage;
