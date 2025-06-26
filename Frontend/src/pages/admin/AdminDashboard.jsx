import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-sm text-gray-500">Total Products</p>
          <h2 className="text-xl font-bold">123</h2>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-sm text-gray-500">Total Orders</p>
          <h2 className="text-xl font-bold">42</h2>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-sm text-gray-500">Users</p>
          <h2 className="text-xl font-bold">10</h2>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
