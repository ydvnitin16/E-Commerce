import React from 'react';
import router from './routes';
import { RouterProvider } from 'react-router';
import { Toaster } from 'react-hot-toast';

const App = () => {
    return (
        <>
            <Toaster position="top-right" />
            <RouterProvider router={router} />
        </>
    );
};

export default App;
