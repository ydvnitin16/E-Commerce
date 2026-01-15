import { Outlet } from 'react-router-dom';
import AppShell from '@/components/layout/AppShell';
import { Handshake, LayoutDashboard, Store, User } from 'lucide-react';

const AdminLayout = () => {
    const NAV_LINKS = [
        {
            label: 'Dashboard',
            slug: '/admin/dashboard',
            icon: <LayoutDashboard size={18} />,
        },
        { label: 'Stores', slug: '/admin/stores', icon: <Store size={18} /> },
        {
            label: 'Store Requests',
            slug: '/admin/store-requests',
            icon: <Handshake size={18} />,
        },
    ];

    const PANEL_DETAILS = {
        label: 'ADMIN PANEL',
        icon: <User size={18} />,
    };

    return (
        <AppShell navLinks={NAV_LINKS} panelDetails={PANEL_DETAILS}>
            <Outlet />
        </AppShell>
    );
};

export default AdminLayout;
