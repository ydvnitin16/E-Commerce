import Sidebar from '@/components/layout/Sidebar';
import { Handshake, LayoutDashboard, Store } from 'lucide-react';
import React from 'react';
import { Outlet } from 'react-router-dom';

const NAV_LINKS = [
    { label: 'Dashboard', slug: '/admin/dashboard', icon: <LayoutDashboard /> },
    { label: 'Stores', slug: '/admin/stores', icon: <Store /> },
    {
        label: 'Store requests',
        slug: '/admin/store-requests',
        icon: <Handshake />,
    },
];

const USER_INFO = {
    name: 'Nitin Yadav',
    role: 'ADMIN',
};

const AdminLayout = () => {
    return (
        <>
            <div className="flex min-h-screen">
                <Sidebar
                    heading={'Admin Panel'}
                    data={NAV_LINKS}
                    name={USER_INFO.name}
                    role={USER_INFO.role}
                />
                <Outlet />
            </div>
        </>
    );
};

export default AdminLayout;
