/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import {createBrowserRouter} from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Blogs from './../pages/Blogs/Blogs';
import Chefs from "../pages/Chefs/Chefs";
import ChefsDetails from './../pages/ChefsDetails/ChefsDetails';
import ErrorPage from './../pages/ErrorPage/ErrorPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
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
      },
      {
        path: "chefs",
        element: <Chefs></Chefs>,
      },
      {
        path: "chefdetails:id",
        element: <ChefsDetails></ChefsDetails>,
      }
    ],
  },

  
]);

export default router;