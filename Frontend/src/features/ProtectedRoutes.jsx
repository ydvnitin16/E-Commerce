import React from 'react';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast'

import { useAuthStore } from '../stores/UseAuthStore.jsx';

const ProtectedAuthRoutes = ({ children }) => {
    const user = useAuthStore((state) => state.user);
    if (!user) {
        toast.error('Please Login')
        return <Navigate to="/user/login" replace />;
        
    }
    return children;
};

const ProtectedAdminRoutes = ({children}) => {
    const user = useAuthStore((state => state.user))
    if(!user || user?.role !== 'admin'){
        toast.error('Access Denied')
        return <Navigate to='/' replace/>
    }
    return children
}

export { ProtectedAuthRoutes, ProtectedAdminRoutes };
