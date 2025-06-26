import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyOrdersPage = () => {
    const {
        data: orders,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(
                `${import.meta.env.VITE_SERVER_URL}/orders/user`,
                {
                    credentials: 'include',
                }
            );
            const data = await res.json();
            return data.orders;
        },
        staleTime: 5 * 60 * 1000
    });

    function getAddress(addressObj){
        const addKeys = Object.keys(addressObj);
        let address = ' '
        console.log(addKeys)
        addKeys.forEach(el => {
            address += addressObj[el] + ', '
        })
        return address;
    }

    orders && console.log(orders);

    return (
        <div className="min-h-screen bg-white py-10 px-4 md:px-10 pt-30">
            <h1 className="text-3xl font-bold text-center mb-10">My Orders</h1>

            <div className="space-y-8 max-w-5xl mx-auto">
                {orders?.map((order, idx) => (
                    <div
                        key={idx}
                        className="border rounded-lg shadow-sm p-6 bg-gray-50"
                    >
                        {/* Order Header */}
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                            <div>
                                <p className="text-sm text-gray-600">
                                    <span className="font-semibold">
                                        Order ID:
                                    </span>{' '}
                                    {order._id}
                                </p>
                                <p className="text-sm text-gray-600">
                                    <span className="font-semibold">Date:</span>{' '}
                                    {order.createdAt.split('T')[0]}
                                </p>
                            </div>
                            <div className="mt-2 md:mt-0">
                                <span className="inline-block px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-700 font-medium">
                                    {order.status}
                                </span>
                            </div>
                        </div>

                        {/* Order Items */}
                        <div className="space-y-4 border-t pt-4">
                            {order.items.map((item) => (
                                <div
                                    key={item}
                                    className="flex justify-between items-center"
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.product.image}
                                            alt="Product"
                                            className="w-14 h-14 object-cover rounded"
                                        />
                                        <div>
                                            <h4 className="font-medium text-gray-800">
                                                {item.product.name}
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                {item.quantity}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="font-semibold text-gray-800">
                                        ₹ {item.product.price}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Price + Address */}
                        <div className="mt-6 border-t pt-4 flex flex-col gap-2 text-sm text-gray-600">
                            <p>
                                <span className="font-semibold">Total:</span> ₹{' '}
                                {order.totalPrice}
                            </p>
                            <p>
                                <span className="font-semibold">Payment:</span>{' '}
                                {order.paymentMethod}
                            </p>
                            <p>
                                <span className="font-semibold">
                                    Delivery Address:
                                </span>
                                {getAddress(order.address)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrdersPage;
