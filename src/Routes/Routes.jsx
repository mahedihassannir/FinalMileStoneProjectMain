import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import Sicretman from "../pages/Menu/MenuCategory/Sicretman";
import PrivateRoute from "../components/Private/PrivateRoute";
import SingleCheckour from "../components/FoodCard/SingleCheckour";
import DashBoard from "../components/DashBoard";
import Admin from "../components/Sicretman/Admin";
import Dola from "../components/Sicretman/dola";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },

      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'Register',
        element: <Register></Register>
      },
      {
        path: 'Secreat',
        element: <PrivateRoute>
          <Sicretman></Sicretman>
        </PrivateRoute>

      },

    ]
  },
  {
    path: "dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "",
        element: <SingleCheckour></SingleCheckour>
      },
      {
        path: "admin",
        element: <Admin></Admin>
      },

      {
        path: "route",
        element: <Dola></Dola>
      },

    ]
  }
]);