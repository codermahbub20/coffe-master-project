import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './MainLayOut/MainLayOut';
import Home from './MainLayOut/Components/Home/Home';
import AddCoffee from './MainLayOut/Components/AddCoffee/AddCoffee';
import UpdatedCoffee from './UpdatedCoffe/UpdatedCoffee';
import ViewDetails from './MainLayOut/Components/ViewDetails/ViewDetails';




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "updatedcoffee/:id",
        element: <UpdatedCoffee></UpdatedCoffee>,
        loader : ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: "/details/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
