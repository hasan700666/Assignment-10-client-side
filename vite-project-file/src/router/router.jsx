import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../layout/MainLayout";
import AddReview from "../Pages/AddReview";
import MyReviews from "../Pages/MyReviews";
import FoodDetails from "../Pages/FoodDetails";
import MyProfile from "../Pages/MyProfile";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ProtectedRoute from "../Components/ProtectedRoute";
import AllReview from "../Pages/AllReview";
import Update from "../Pages/Update";
import MyFavorites from "../Pages/MyFavorites";
import Error from "../Pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("https://foodloverserver.vercel.app/publicFoodCollectionHome"),  //-->id = 1
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
        path: "/AllReview",
        Component: AllReview,
        loader: () => fetch("https://foodloverserver.vercel.app/publicFoodCollection"),    //--> id = 2
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
        path: "/MyReviews/:email",
        element: (
          <ProtectedRoute>
            <MyReviews></MyReviews>
          </ProtectedRoute>
        ),
      },
      {
        path: "/foodDetails/:id",
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
      {
        path: "/Update/:id",
        element: (
          <ProtectedRoute>
            <Update></Update>
          </ProtectedRoute>
        ),
          
      },
      {
        path: "/MyFavorites/:email",
        element: (
          <ProtectedRoute>
            <MyFavorites></MyFavorites>
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);
