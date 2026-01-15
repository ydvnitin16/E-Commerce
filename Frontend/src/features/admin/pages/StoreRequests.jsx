import React from 'react';
import StoreRequestCard from '../components/StoreRequestCard';

export const storesDummyData = [
    {
        name: 'TechHub Electronics',
        description: 'Electronics and gadgets store',
        slug: 'techhub-electronics',
        userId: '65f1a1a1a1a1a1a1a1a1a1a1',
        status: 'PENDING',
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

const StoreRequests = () => {
    return (
        <main className="w-full flex-1 px-5 md:px-8 py-3 md:py-6">
            <div className="flex items-center justify-between mb-6">
                <div className="w-full flex flex-col sm:flex-row justify-between text-3xl font-bold">
                    <h1>Stores Requests</h1>
                    <div className="text-xl text-zinc-700">
                        Pending Request: (10)
                    </div>
                </div>
            </div>
            <div className="grid  gap-2 bg-white rounded-2xl overflow-hidden">
                {storesDummyData.map((store) => (
                    <StoreRequestCard store={store} />
                ))}
            </div>
        </main>
    );
};

export default StoreRequests;
