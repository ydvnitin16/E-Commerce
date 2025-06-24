import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router';

import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import ProductDetails from '../src/features/products/ProductDetails.jsx';
import Login from './features/auth/Login.jsx';
import ProductList from './features/products/ProductList.jsx';
import Signup from './features/auth/Signup.jsx';

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="product/:id" element={<ProductDetails />} />
                    <Route path='products' element={<ProductList />} />
                </Route>
                <Route path="/user" element={<MainLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
            </>
        )
    );

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
