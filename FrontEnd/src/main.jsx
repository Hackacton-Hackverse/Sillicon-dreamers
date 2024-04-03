import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import TaskPage from "./pages/TaskPage.jsx";
import ContextProvider from "./Contexts/ context.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement:<ErrorPage />,
    children :[
      {
        path: ":taskFolder/:taskName/",
        element : <TaskPage />,
      },
    ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <ContextProvider>
        <RouterProvider router={router} />
    </ContextProvider>
);
