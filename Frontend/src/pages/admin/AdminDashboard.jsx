import React from 'react';

const AdminDashboard = () => {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                Admin Dashboard
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded shadow dark:shadow-md text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Total Products
                    </p>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        123
                    </h2>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded shadow dark:shadow-md text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Total Orders
                    </p>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        42
                    </h2>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded shadow dark:shadow-md text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Users
                    </p>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        10
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
