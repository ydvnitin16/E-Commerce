import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import OrderDetailsModal from '../../components/OrderDetailsModal';

const AdminOrdersPage = () => {
    const queryClient = useQueryClient()
    const [orderModal, setOrderModal] = useState(false);
    const [selectedOrder, setSelectedOder] = useState(null);
    const [status, setStatus] = useState(null);
    const [updateModal, setUpdateModal] = useState(false);

    const {
        data: orders,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['admin-orders'],
        queryFn: async () => {
            const res = await fetch(
                `${import.meta.env.VITE_SERVER_URL}/admin/orders`,
                {
                    method: 'GET',
                    credentials: 'include',
                }
            );
            const data = await res.json();
            console.log(data);
            return data.orders;
        },
    });

    const mutation = useMutation({
        mutationFn: async (order) => {
            console.log(order);
            const res = await fetch(
                `${import.meta.env.VITE_SERVER_URL}/admin/order/${
                    order.orderId
                }/status`,
                {
                    method: 'PUT',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        status: order.status,
                    }),
                }
            );
            const data = await res.json();
            console.log(data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-orders'] });
        },
        onError: (error) => console.log('error: ', error),
    });

    function updateStatus(orderId, status) {
        mutation.mutate({ orderId, status });
    }

    orders && console.log(orders);

    return (
        <div className="p-6 space-y-8">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                Customer Orders
            </h1>

            <table className="min-w-full border bg-white dark:bg-gray-800 rounded shadow dark:border-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr className="text-left text-gray-700 dark:text-gray-200 text-sm">
                        <th className="p-3">Order ID</th>
                        <th className="p-3">User</th>
                        <th className="p-3">Total</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders &&
                        orders.map((order, idx) => (
                            <tr
                                key={order._id}
                                className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                            >
                                <td className="p-3 text-gray-800 dark:text-gray-100">
                                    {order._id}
                                </td>
                                <td className="p-3 text-gray-700 dark:text-gray-200">
                                    {order.userId.email}
                                </td>
                                <td className="p-3 text-gray-700 dark:text-gray-200">
                                    ₹{order.totalPrice}
                                </td>
                                <td className="p-3">
                                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-700 text-yellow-700 dark:text-yellow-100 rounded">
                                        {order.status}
                                    </span>
                                </td>
                                <td className="p-3 space-x-2">
                                    {updateModal && (
                                        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
                                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md p-6 relative">
                                                <button
                                                    onClick={() =>
                                                        setUpdateModal(false)
                                                    }
                                                    className="absolute top-3 right-4 text-xl text-gray-600 dark:text-gray-300"
                                                >
                                                    &times;
                                                </button>

                                                <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                                                    Update Order Status
                                                </h2>

                                                <p className="text-gray-700 dark:text-gray-200 mb-2">
                                                    <strong>Order ID:</strong>{' '}
                                                    {selectedOrder._id}
                                                </p>

                                                <select
                                                    value={selectedOrder.status}
                                                    onChange={(e) =>
                                                        setStatus(
                                                            e.target.value
                                                        )
                                                    }
                                                    className="w-full border px-4 py-2 rounded dark:bg-gray-700 dark:text-white"
                                                >
                                                    <option value="">
                                                        Select Status
                                                    </option>
                                                    <option value="pending">
                                                        Pending
                                                    </option>
                                                    <option value="out for delivery">
                                                        Out for Delivery
                                                    </option>
                                                    <option value="shipped">
                                                        Shipped
                                                    </option>
                                                    <option value="delivered">
                                                        Delivered
                                                    </option>
                                                </select>

                                                <button
                                                    onClick={() =>
                                                        updateStatus(
                                                            selectedOrder._id,
                                                            status
                                                        )
                                                    }
                                                    className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition"
                                                >
                                                    {true
                                                        ? 'Updating...'
                                                        : 'Update Status'}
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                    <button
                                        onClick={() => {
                                            setUpdateModal(true);
                                            setSelectedOder(order);
                                        }}
                                        className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded transition"
                                    >
                                        Update
                                    </button>
                                    <OrderDetailsModal
                                        order={selectedOrder}
                                        isOpen={orderModal}
                                        onClose={() => setOrderModal(false)}
                                    />
                                    <button
                                        onClick={() => {
                                            setOrderModal(true);
                                            setSelectedOder(order);
                                        }}
                                        className="px-3 py-1 bg-gray-700 hover:bg-gray-800 text-white rounded transition"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminOrdersPage;
