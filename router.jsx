// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Login from "./src/Pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",        // root route
    element: <App />, // shows App (which includes your TopHeader)
  },
  {
    path: "/login",   // login page
    element: <Login />,
  },
]);

export default router;
