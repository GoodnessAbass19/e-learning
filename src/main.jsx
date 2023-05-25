import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Faq from "./pages/Faq";
import CyberSecurity from "./pages/CyberSecurity";
import Security from "./pages/Security";
import Mentorship from "./pages/Mentorship";
import About from "./pages/About";


// import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cybersecurity",
        element: <CyberSecurity />
      },
      {
        path: "faq",
        element: <Faq />
      },
      {
        path: "security-training",
        element: <Security />,
      },
      {
        path: "mentorship",
        element: <Mentorship />
      },
      {
        path: 'about',
        element: <About />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
