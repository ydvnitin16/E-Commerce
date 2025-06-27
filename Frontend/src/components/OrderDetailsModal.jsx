import React from 'react';

const OrderDetailsModal = ({ isOpen, onClose, order }) => {
    if (!isOpen || !order) return null;

    function getAddress(addressObj) {
        const addKeys = Object.keys(addressObj);
        let address = ' ';
        addKeys.forEach((el) => {
            address += addressObj[el] + ', ';
        });
        return address;
    }

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
            <div className="bg-white dark:bg-gray-800 w-full max-w-lg rounded-xl shadow-lg p-6 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500 text-lg"
                >
                    &times;
                </button>

                <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    Order Details
                </h2>

                <div className="space-y-2 text-gray-700 dark:text-gray-200">
                    <p>
                        <span className="font-semibold">Order ID:</span> #
                        {order._id}
                    </p>
                    <p>
                        <span className="font-semibold">User:</span>{' '}
                        {order.userId?.email}
                    </p>
                    <p>
                        <span className="font-semibold">Total:</span> ₹
                        {order.totalPrice}
                    </p>
                    <p>
                        <span className="font-semibold">Status:</span>{' '}
                        {order.status}
                    </p>

                    <div>
                        <h3 className="font-semibold mt-4">Products:</h3>
                        <ul className="list-disc ml-6">
                            {order.items?.map((item, idx) => (
                                <li key={item.product._id}>
                                    {item.product.name} × {item.quantity} — ₹
                                    {item.product.price * item.quantity}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mt-4">
                            Shipping Address:
                        </h3>
                        <p>{getAddress(order.address)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetailsModal;
