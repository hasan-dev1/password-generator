import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Student from '../Pages/Home/Student';
import Catinitialitem from '../Pages/Initialpage/Catinitialitem';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/category/:id",
        loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`),
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <Catinitialitem></Catinitialitem>
      },
    ],
  },
]);

export default router;