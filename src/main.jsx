// Bulma CSS
import 'bulma/css/bulma.min.css';
// Important Imports
import React from 'react';
import { App } from './App';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Contact, Home, NotFound, Services } from './components';

// Navbar Hamburger Menu JavaScript
$(document).ready(function () {
    $('.navbar-burger').click(function () {
        $('.navbar-burger').toggleClass('is-active');
        $('.navbar-menu').toggleClass('is-active');
    });
});

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
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
            {
                path: '*',
                element: <NotFound />,
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
