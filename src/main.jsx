import './index.css';
import React from 'react';
import { App } from './App';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Contact, Home, NotFound, Services } from './components';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/services',
                element: <Services />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ],
    },
]);

// Rendering the App
const synthCoreElement = document.getElementById('synthcore');
const synthCore = createRoot(synthCoreElement);

synthCore.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
