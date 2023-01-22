import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Catinitialitem from "../Pages/Initialpage/Catinitialitem";
import Login from "../SharedPages/Authentication/Login";
import SignUp from "../SharedPages/Authentication/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`https://password-server.vercel.app/category/${params.id}`),
        element: (
          <PrivateRoute>
            <Home></Home>
          </PrivateRoute>
        ),
      },
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Catinitialitem></Catinitialitem>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
]);

export default router;
