import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBox, FaClipboardList, FaPlus, FaTachometerAlt } from 'react-icons/fa';

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 text-gray-800 p-6 hidden md:block shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Admin Panel</h2>
        <nav className="space-y-4">
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `block px-3 py-2 rounded font-medium ${
                isActive
                  ? 'bg-blue-100 text-blue-600'
                  : 'hover:bg-blue-50 text-gray-700'
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
                  ? 'bg-blue-100 text-blue-600'
                  : 'hover:bg-blue-50 text-gray-700'
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
                  ? 'bg-blue-100 text-blue-600'
                  : 'hover:bg-blue-50 text-gray-700'
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
                  ? 'bg-blue-100 text-blue-600'
                  : 'hover:bg-blue-50 text-gray-700'
              }`
            }
          >
            <FaClipboardList className="inline-block mr-2" />
            Orders
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white p-6 overflow-y-auto shadow-inner">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
