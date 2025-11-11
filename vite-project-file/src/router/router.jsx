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
import ProtectedRoute from "../Components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/foodCollection"),
      },
      {
        path: "/AddReview",
        element: (
          <ProtectedRoute>
            <AddReview></AddReview>
          </ProtectedRoute>
        ),
      },
      {
        path: "/AllFoods",
        Component: AllFoods,
      },
      {
        path: "/MyProfile",
        element: (
          <ProtectedRoute>
            <MyProfile></MyProfile>
          </ProtectedRoute>
        ),
      },
      {
        path: "/MyReviews",
        element: (
          <ProtectedRoute>
            <MyReviews></MyReviews>
          </ProtectedRoute>
        ),
      },
      {
        path: "/foodDetails",
        element: (
          <ProtectedRoute>
            <FoodDetails></FoodDetails>
          </ProtectedRoute>
        ),
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
