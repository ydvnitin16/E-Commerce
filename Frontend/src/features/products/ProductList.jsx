import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import ProductCard from '../../components/ProductCard';
import Loading from '../../components/Loading';
import ErrorModal from '../../components/ErrorModal';

const ProductList = () => {
    const [searchParams] = useSearchParams(); // used to get query from the url
    const selectedCategory = searchParams.get('category');

    const [page, setpage] = useState(1);
    const [limit, setlimit] = useState(10);

    const {
        data: products,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['products', selectedCategory, page, limit],
        queryFn: async () => {
            const params = new URLSearchParams(); // used to create new query to send req
            if (selectedCategory) params.append('category', selectedCategory);
            if (page) params.append('page', page);
            if (limit) params.append('limit', limit);

            const URL = `${
                import.meta.env.VITE_SERVER_URL
            }/products?${params.toString()}`;

            const res = await fetch(URL);
            const data = await res.json();
            return data.products;
        },
        staleTime: 3 * 60 * 1000
    });

    // Categories to sort list
    const categories = [
        'All',
        'Smartphones',
        'Laptops',
        'Earbuds & Headphones',
        'Smartwatches',
        'Televisions',
        'Cameras',
        'Gaming Devices',
        'Home Appliances',
        'Computer Accessories',
    ];

    return (
        <>
            <div className="p-4 pt-35">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map((category) => (
                        <NavLink
                            key={category}
                            to={`/products?${new URLSearchParams({
                                category,
                            }).toString()}`}
                            className={({ isActive }) =>
                                ` px-4 py-1 rounded text-sm transition ${
                                    category === selectedCategory
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                                }`
                            }
                        >
                            {category}
                        </NavLink>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
                    { isLoading && <Loading /> || products && products.length > 0 && (
                        <ProductCard products={products} />
                    ) || <ErrorModal msg='No Products Found' />}
                </div>
                {/* Pagination */}
                <div className="flex justify-center mt-6 gap-4 items-center">
                    <button
                        onClick={() => setpage((prev) => prev - 1)}
                        disabled={page === 1}
                        className="px-4 py-2 bg-gray-300 rounded cursor-pointer disabled:opacity-50 disabled:cursor-no-drop"
                    >
                        Prev
                    </button>

                    <span className="text-lg font-semibold">Page {page}</span>

                    <button
                        onClick={() => setpage((prev) => prev + 1)}
                        disabled={!products}
                        className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer disabled:opacity-50 disabled:cursor-no-drop"
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductList;
