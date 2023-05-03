/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import {createBrowserRouter} from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Blogs from './../pages/Blogs/Blogs';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      }
    ],
  },

  
]);

export default router;