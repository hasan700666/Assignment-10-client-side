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
        path: "/AllReview",
        Component: AllReview,
        loader: () => fetch("http://localhost:3000/foodCollection"),
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
        loader: ({ params }) =>
          fetch(`http://localhost:3000/foodCollection?email=${params.email}`),
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
      {
        path: "/Update/:id",
        element: (
          <ProtectedRoute>
            <Update></Update>
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/foodCollection/${params.id}`),
      },
      {
        path: "/MyFavorites/:email",
        element: (
          <ProtectedRoute>
            <MyFavorites></MyFavorites>
          </ProtectedRoute>
        ),
        loader: ({params})=>fetch(`http://localhost:3000/favoriteCollection?email=${params.email}`)
      },
    ],
  },
]);
