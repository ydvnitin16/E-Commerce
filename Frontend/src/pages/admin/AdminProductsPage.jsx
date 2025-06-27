import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';

const AdminProductsPage = () => {
    const queryClient = useQueryClient();

    const {
        data: products,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['admin-products'],
        queryFn: async () => {
            const res = await fetch(
                `${import.meta.env.VITE_SERVER_URL}/products`
            );
            const data = await res.json();
            return data.products;
        },
    });

    const mutation = useMutation({
        mutationFn: async (item) => {
            await fetch(
                `${import.meta.env.VITE_SERVER_URL}/admin/product/${item.productId}`,
                {
                    method: 'PUT',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ inStock: !item.currentStock }),
                }
            );
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-products'] });
        },
        onError: (error) => console.log('error: ', error),
    });

    function updateStock(productId, currentStock) {
        mutation.mutate({ productId, currentStock });
    }

    return (
        <div className="p-6 space-y-8">
            <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">All Products</h1>

            {/* Product Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full border bg-white dark:bg-gray-800 rounded shadow dark:border-gray-700">
                    <thead className="bg-blue-50 dark:bg-gray-700 text-sm text-blue-700 dark:text-blue-300 uppercase">
                        <tr>
                            <th className="p-3 text-left">Image</th>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Price</th>
                            <th className="p-3 text-left">Category</th>
                            <th className="p-3 text-left">In Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products &&
                            products.map((product) => (
                                <tr
                                    key={product._id}
                                    className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                                >
                                    <td className="p-3">
                                        <img
                                            src={product.image}
                                            alt="Product"
                                            className="w-12 h-12 object-cover rounded border dark:border-gray-600"
                                        />
                                    </td>
                                    <td className="p-3 font-medium text-gray-800 dark:text-gray-100">
                                        {product.name}
                                    </td>
                                    <td className="p-3 text-gray-700 dark:text-gray-300">
                                        ₹{product.price}
                                    </td>
                                    <td className="p-3 text-gray-700 dark:text-gray-300">
                                        {product.category}
                                    </td>
                                    <td className="p-3">
                                        <button
                                            onClick={() =>
                                                updateStock(
                                                    product._id,
                                                    product.inStock
                                                )
                                            }
                                            className={`px-3 py-1 rounded font-medium transition ${
                                                product.inStock
                                                    ? 'bg-green-500 hover:bg-green-600'
                                                    : 'bg-red-500 hover:bg-red-600'
                                            } text-white cursor-pointer`}
                                        >
                                            {product.inStock
                                                ? 'In Stock'
                                                : 'Out of Stock'}
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
