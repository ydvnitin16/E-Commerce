import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthStore } from '../stores/UseAuthStore.jsx';

const ProtectedAuthRoutes = ({ children }) => {
    const user = useAuthStore((state) => state.user);
    if (!user) {
        return <Navigate to="/user/login" replace />;
    }
    return children;
};

const ProtectedAdminRoutes = ({children}) => {
    const user = useAuthStore((state => state.user))
    if(!user || user?.role !== 'admin'){
        return <Navigate to='/' replace/>
    }
    return children
}

export { ProtectedAuthRoutes, ProtectedAdminRoutes };
