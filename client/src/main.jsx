import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import AddTransaction from "./views/AddTransaction/AddTransaction";
import ShowTransaction from "./views/ShowTransaction/ShowTransaction";
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/add_translations",
    element: <AddTransaction />,
  },
  {
    path: "/show_translations",
    element: <ShowTransaction />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
