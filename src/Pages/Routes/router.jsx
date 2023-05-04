import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import LoginLayout from '../../Layout/LoginLayout';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Home from '../Home/Home/Home';
import Blog from '../Blog/Blog';
import RecipiesLayout from '../../Layout/RecipiesLayout';
import Recipies from '../Recipies/Recipies';
import RecipiesDetails from '../RecipiesDetails/RecipiesDetails';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      }
    ]
  },
  {
    path:"recipies",
    element:<RecipiesLayout></RecipiesLayout>,
    children:[
      {
        path:"/recipies",
        element:<Home></Home>
      },
      {
        path:':Id',
        element:
          <PrivateRoute>
            <RecipiesDetails></RecipiesDetails>,   
          </PrivateRoute>,
          loader: async({params})=> {
            const res =await fetch(`https://the-recipies-master-server.vercel.app/allData`)
            const data =await res.json()
            const recipisss =data.find(recipi=>recipi.id==params.Id)
            return recipisss
    }
        
      }
    ]
  }
 
]);




export default router;