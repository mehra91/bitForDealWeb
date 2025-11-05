// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Login from "./src/Pages/LoginPage";
import Signup from "./src/Pages/Signup";
import Dashboard from "./src/components/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",        // root route
    element: <App />, // shows App (which includes your TopHeader)
  },
  {
    path: "/login",   // login page
    element: <Login />,
  },
  {
    path: "/signUp",   // sign page
    element: <Signup />,
  },
  {
    path: "/dashboard",   // dashboard page
    element: <Dashboard />,
  }
]);

export default router;
