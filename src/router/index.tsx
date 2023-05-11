import ErrorPage from "pages/ErrorPage";
import Home from "pages/Home";
import Login from "pages/Login";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

export default createBrowserRouter([
  {
    element: <Outlet />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <Home />,
            path: "/",
          },
        ],
      },
    ],
  },
]);
