import React from 'react';

const AdminOrdersPage = () => {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Customer Orders</h1>

      <table className="min-w-full border bg-white rounded shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Order ID</th>
            <th className="p-3 text-left">User</th>
            <th className="p-3 text-left">Total</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2].map((item, idx) => (
            <tr key={idx} className="border-t">
              <td className="p-3">#123456</td>
              <td className="p-3">nitin@example.com</td>
              <td className="p-3">₹1345</td>
              <td className="p-3">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded">Pending</span>
              </td>
              <td className="p-3 space-x-2">
                <button className="px-3 py-1 bg-blue-500 text-white rounded">Update</button>
                <button className="px-3 py-1 bg-gray-700 text-white rounded">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrdersPage;
