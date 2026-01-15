import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import Login from '../features/authentication/pages/Login';
import Signup from '../features/authentication/pages/Signup';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from '@/features/admin/pages/Dashboard';
import Stores from '@/features/admin/pages/Stores';
import StoreRequests from '@/features/admin/pages/StoreRequests';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/user" element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="stores" element={<Stores />} />
                <Route path="store-requests" element={<StoreRequests />} />
            </Route>
        </>
    )
);

export default router;
