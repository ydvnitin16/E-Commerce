import Button from '@/components/ui/Button';
import { Plus } from 'lucide-react';
import React from 'react';

export const storesDummyData = [
    {
        name: 'TechHub Electronics',
        description: 'Electronics and gadgets store',
        slug: 'techhub-electronics',
        userId: '65f1a1a1a1a1a1a1a1a1a1a1',
        status: 'APPROVED',
        address: '123 Tech Street, Bangalore',
        isActive: true,
        image: {
            url: 'https://dummyimage.com/600x400/000/fff',
            public_id: 'techhub_img',
        },
        email: 'john@techhub.com',
        contact: '+91 9876543210',
    },
    {
        name: 'Fashion Forward',
        description: 'Trendy fashion apparel',
        slug: 'fashion-forward',
        userId: '65f2b2b2b2b2b2b2b2b2b2b2',
        status: 'APPROVED',
        address: '22 Style Avenue, Mumbai',
        isActive: true,
        image: {
            url: 'https://dummyimage.com/600x400/111/fff',
            public_id: 'fashion_img',
        },
        email: 'sarah@fashionfw.com',
        contact: '+91 9123456780',
    },
    {
        name: 'Gourmet Foods',
        description: 'Premium food and grocery store',
        slug: 'gourmet-foods',
        userId: '65f3c3c3c3c3c3c3c3c3c3c3',
        status: 'APPROVED',
        address: '88 Market Road, Delhi',
        isActive: true,
        image: {
            url: 'https://dummyimage.com/600x400/222/fff',
            public_id: 'food_img',
        },
        email: 'mike@gourmetfoods.com',
        contact: '+91 9988776655',
    },
    {
        name: 'Home Services Pro',
        description: 'Home repair and services',
        slug: 'home-services-pro',
        userId: '65f4d4d4d4d4d4d4d4d4d4d4',
        status: 'REJECTED',
        address: '15 Service Lane, Pune',
        isActive: false,
        image: {
            url: 'https://dummyimage.com/600x400/333/fff',
            public_id: 'home_img',
        },
        email: 'emily@homeservices.com',
        contact: '+91 9012345678',
    },
];

const Stores = () => {
    return (
        <>
            {/* Main Content */}
            <main className="flex-1 p-10">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-3xl font-bold">
                            Stores Management
                        </h1>
                        <p className="text-zinc-500 mt-1">
                            Manage and monitor all registered stores on the
                            platform.
                        </p>
                    </div>
                </div>

                {/* Card */}
                <div className="bg-white rounded-xl shadow-sm border border-zinc-200">
                    {/* Search */}
                    <div className="p-5 flex items-center justify-between border-b border-zinc-100">
                        <input
                            className="w-full max-w-md px-4 py-2 border border-zinc-200 rounded-lg text-sm"
                            placeholder="Search stores, owners, or emails..."
                        />
                        <span className="text-sm text-zinc-500 ml-4">
                            5 stores
                        </span>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-zinc-50 text-zinc-600">
                                <tr>
                                    <th className="text-left px-6 py-4">
                                        Store Name
                                    </th>
                                    <th className="text-left px-6 py-4">
                                        Owner
                                    </th>
                                    <th className="text-left px-6 py-4">
                                        Category
                                    </th>
                                    <th className="text-left px-6 py-4">
                                        Status
                                    </th>
                                    <th className="text-left px-6 py-4">
                                        Revenue
                                    </th>
                                    <th className="text-left px-6 py-4">
                                        Created
                                    </th>
                                    <th className="text-left px-6 py-4">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-100">
                                <tr>
                                    <td className="px-6 py-4">
                                        <p className="font-medium">
                                            TechHub Electronics
                                        </p>
                                        <p className="text-xs text-zinc-500">
                                            john@techhub.com
                                        </p>
                                    </td>
                                    <td className="px-6 py-4">John Smith</td>
                                    <td className="px-6 py-4">Electronics</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                                            Active
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-semibold">
                                        $12,400
                                    </td>
                                    <td className="px-6 py-4 text-zinc-500">
                                        2024-01-15
                                    </td>
                                    <td className="px-6 py-4 flex gap-4 text-zinc-500">
                                        <span>👁</span>
                                        <span>✏️</span>
                                        <span className="text-red-500">🗑</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="px-6 py-4">
                                        <p className="font-medium">
                                            Fashion Forward
                                        </p>
                                        <p className="text-xs text-zinc-500">
                                            sarah@fashionfw.com
                                        </p>
                                    </td>
                                    <td className="px-6 py-4">Sarah Johnson</td>
                                    <td className="px-6 py-4">Fashion</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                                            Active
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-semibold">
                                        $8,300
                                    </td>
                                    <td className="px-6 py-4 text-zinc-500">
                                        2024-02-20
                                    </td>
                                    <td className="px-6 py-4 flex gap-4 text-zinc-500">
                                        <span>👁</span>
                                        <span>✏️</span>
                                        <span className="text-red-500">🗑</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Stores;
