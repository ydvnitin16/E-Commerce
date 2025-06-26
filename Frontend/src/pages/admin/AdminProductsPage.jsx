import React, { useState } from 'react';

const mockProducts = [
  {
    id: 1,
    name: 'Smart Watch',
    image: 'https://via.placeholder.com/50',
    price: 1999,
    category: 'Wearables',
    inStock: true,
  },
  {
    id: 2,
    name: 'Bluetooth Earbuds',
    image: 'https://via.placeholder.com/50',
    price: 999,
    category: 'Audio',
    inStock: false,
  },
  {
    id: 3,
    name: 'Wireless Mouse',
    image: 'https://via.placeholder.com/50',
    price: 599,
    category: 'Accessories',
    inStock: true,
  },
];

const AdminProductsPage = () => {
  const [products, setProducts] = useState(mockProducts);

  const toggleStock = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, inStock: !product.inStock }
          : product
      )
    );
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-blue-600">All Products</h1>

      {/* Product Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border bg-white rounded shadow">
          <thead className="bg-blue-50 text-sm text-blue-700 uppercase">
            <tr>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">In Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t hover:bg-gray-50">
                <td className="p-3">
                  <img
                    src={product.image}
                    alt="Product"
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="p-3 font-medium">{product.name}</td>
                <td className="p-3">₹{product.price}</td>
                <td className="p-3">{product.category}</td>
                <td className="p-3">
                  <button
                    onClick={() => toggleStock(product.id)}
                    className={`px-3 py-1 rounded font-medium ${
                      product.inStock
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                    }`}
                  >
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProductsPage;
