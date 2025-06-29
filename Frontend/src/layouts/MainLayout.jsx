import { Outlet } from 'react-router';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import { useEffect } from 'react';
import { useAuthStore } from '../stores/UseAuthStore.jsx';
import { UseHomeProducts } from '../stores/UseHomeProduct.jsx';
import toast from 'react-hot-toast'

const MainLayout = () => {
    const isExpired = useAuthStore((state) => state.isExpired);
    const logout = useAuthStore((state) => state.logout);
    const isLoaded = UseHomeProducts((state) => state.loaded);

    useEffect(() => {
        !isLoaded && toast('Please refresh Backend Loading...') || toast.success("Backend Is Started")
    }, [isLoaded]);

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
