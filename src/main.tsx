import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { AuthProvider } from "./hooks/useAuth";
import AppRouter from "./AppRouter";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={AppRouter} />
        </AuthProvider>
    </React.StrictMode>
);
