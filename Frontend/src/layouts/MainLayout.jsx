import { Outlet } from 'react-router';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import { useEffect } from 'react';
import { useAuthStore } from '../stores/UseAuthStore.jsx';

const MainLayout = () => {
    const isExpired = useAuthStore((state) => state.isExpired);
    const logout = useAuthStore((state) => state.logout);
    
    useEffect(() => {
        if (isExpired()) {
            logout();
        }
    }, []);

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;
