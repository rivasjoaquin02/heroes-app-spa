import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/root";
import Marvel from "./routes/marvel/Marvel";
import Dc from "./routes/dc/Dc";
import AuthLayout from "./layouts/auth";
import Login from "./routes/auth/login/Login";
import Register from "./routes/auth/register/Register";
import HeroInfo, { loader as heroLoader } from "./components/HeroInfo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <div>Index</div>,
            },
            {
                path: "marvel",
                element: <Marvel />,
            },
            {
                path: "dc",
                element: <Dc />,
            },
            {
                path: "/hero/:heroId",
                element: <HeroInfo />,
                loader: heroLoader,
            },
        ],
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
