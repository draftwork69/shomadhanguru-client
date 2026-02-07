import { createBrowserRouter } from "react-router-dom";

import MainLayout from '../Layout/MainLayout'
import Home from '../pages/Home'
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    }
])