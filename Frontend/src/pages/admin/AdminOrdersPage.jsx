import React from 'react';

const AdminOrdersPage = () => {
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
                    {[1, 2].map((item, idx) => (
                        <tr
                            key={idx}
                            className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                            <td className="p-3 text-gray-800 dark:text-gray-100">
                                #123456
                            </td>
                            <td className="p-3 text-gray-700 dark:text-gray-200">
                                nitin@example.com
                            </td>
                            <td className="p-3 text-gray-700 dark:text-gray-200">
                                ₹1345
                            </td>
                            <td className="p-3">
                                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-700 text-yellow-700 dark:text-yellow-100 rounded">
                                    Pending
                                </span>
                            </td>
                            <td className="p-3 space-x-2">
                                <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded transition">
                                    Update
                                </button>
                                <button className="px-3 py-1 bg-gray-700 hover:bg-gray-800 text-white rounded transition">
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
