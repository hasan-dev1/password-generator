import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Student from '../Pages/Home/Student';

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/student',
                element:<Student></Student>
            },
        ]
    }
])

export default router;