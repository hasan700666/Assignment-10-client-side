import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../layout/MainLayout";
import AddReview from "../Pages/AddReview";
import MyReviews from "../Pages/MyReviews";
import FoodDetails from "../Pages/FoodDetails";
import MyProfile from "../Pages/MyProfile";
import AllFoods from "../Pages/AllFoods";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/AddReview",
        Component: AddReview,
      },
      {
        path: "/AllFoods",
        Component: AllFoods,
      },
      {
        path: "/MyProfile",
        Component: MyProfile,
      },
      {
        path: "/MyReviews",
        Component: MyReviews,
      },
      {
        path: "/foodDetails",
        Component: FoodDetails,
      },
      {
        path: "/SingUp",
        Component: Register,
      },
      {
        path: "/LogIn",
        Component: Login,
      },
    ],
  },
]);
