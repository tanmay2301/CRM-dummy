import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Analytics from './Analytics.jsx'
import Contacts from './Contacts.jsx'
import Calendar from './Calendar.jsx'
import Settings from './Settings.jsx'

import { StrictMode } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    
    {
        path: '/Dashboard',
        element: <App />
    },

    {
        path: '/Contacts',
        element: <Contacts />
    },

    {
        path: '/Calendar',
        element: <Calendar />
    },

    {
        path: '/Settings',
        element: <Settings />
    },

    {
        path: '/Analytics',
        element: <Analytics />
    },


]);

createRoot(document.getElementById('root')).render(
<StrictMode>
    <RouterProvider router = {router} />
</StrictMode>
);