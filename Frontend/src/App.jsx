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
import Signup from './features/auth/Signup.jsx';
import ProductList from './features/products/ProductList.jsx';
import Logout from './features/auth/Logout.jsx';
import CartPage from './features/cart/CartPage.jsx';
import CheckoutPage from './features/cart/CheckoutPage.jsx';
import MyOrdersPage from './features/orders/MyOrdersPage.jsx';

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="product/:id" element={<ProductDetails />} />
                    <Route path="products" element={<ProductList />} />
                </Route>
                <Route path="/user" element={<MainLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="logout" element={<Logout />} />
                </Route>
                <Route path="/cart" element={<MainLayout />}>
                    <Route index element={<CartPage />} />
                    <Route path="checkout" element={<CheckoutPage />} />
                </Route>
                <Route path="/order" element={<MainLayout />}>
                    <Route index element={<MyOrdersPage />} />
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
