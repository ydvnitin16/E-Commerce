import React from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import ProductDetailsCard from '../components/ProductDetailsCard';
import useStoreProducts from '../hooks/useStoreProducts';
import { useParams } from 'react-router-dom';
import Loader from '@/components/ui/Loader';
import ProductListItem from '../components/ProductListItem';

const ManageProducts = () => {
    const { storeSlug } = useParams();
    const { loading, error, products } = useStoreProducts({ storeSlug });

    if (loading) return <Loader />;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold tracking-tight">
                        Products
                    </h1>
                    <p className="text-sm text-zinc-500">
                        Manage pricing, stock, and visibility of your products
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div className="w-80">
                    <Input placeholder="Search by name or category..." />
                </div>
            </div>

            {/* Listing all the products of the particular store */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 rounded-xl border border-zinc-200 bg-white">
                    <div className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-zinc-200 text-xs text-zinc-500">
                        <div className="col-span-5">Name</div>
                        <div className="col-span-2">Category</div>
                        <div className="col-span-2 text-right">Price</div>
                        <div className="col-span-3 text-right">Status</div>
                    </div>

                    <div className="divide-y divide-zinc-200">
                        {products?.map((product, index) => (
                            <ProductListItem key={index} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;
