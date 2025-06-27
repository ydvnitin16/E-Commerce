import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
    FaBox,
    FaClipboardList,
    FaPlus,
    FaTachometerAlt,
} from 'react-icons/fa';

const AdminLayout = () => {
    return (
        <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 p-6 hidden md:block shadow-sm">
                <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">
                    Admin Panel
                </h2>
                <nav className="space-y-4">
                    <NavLink
                        to="/admin"
                        className={({ isActive }) =>
                            `block px-3 py-2 rounded font-medium ${
                                isActive
                                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                                    : 'hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                            }`
                        }
                    >
                        <FaTachometerAlt className="inline-block mr-2" />
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="/admin/products"
                        className={({ isActive }) =>
                            `block px-3 py-2 rounded font-medium ${
                                isActive
                                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                                    : 'hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                            }`
                        }
                    >
                        <FaBox className="inline-block mr-2" />
                        All Products
                    </NavLink>
                    <NavLink
                        to="/admin/products/add"
                        className={({ isActive }) =>
                            `block px-3 py-2 rounded font-medium ${
                                isActive
                                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                                    : 'hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                            }`
                        }
                    >
                        <FaPlus className="inline-block mr-2" />
                        Add Product
                    </NavLink>
                    <NavLink
                        to="/admin/orders"
                        className={({ isActive }) =>
                            `block px-3 py-2 rounded font-medium ${
                                isActive
                                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                                    : 'hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                            }`
                        }
                    >
                        <FaClipboardList className="inline-block mr-2" />
                        Orders
                    </NavLink>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-white dark:bg-gray-950 p-6 overflow-y-auto shadow-inner text-gray-800 dark:text-gray-100">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
