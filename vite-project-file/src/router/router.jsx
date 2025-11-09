import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../layout/MainLayout";
import AddReview from "../Pages/AddReview";
import MyReviews from "../Pages/MyReviews";

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
        Component: AddReview
      },
      {
        path: "/MyReviews",
        Component: MyReviews
      },
    ],
  },
]);
