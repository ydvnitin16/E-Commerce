import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import AuthLayouts from './layouts/authLayouts';
import Login from '../features/authentication/pages/Login';
import Signup from '../features/authentication/pages/Signup';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/user" element={<AuthLayouts />}>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
            </Route>
        </>
    )
);

export default router;
