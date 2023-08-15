import { Navigate } from "react-router-dom";
import { AuthConsumer as useAuth } from "../hooks/useAuth";
import { ReactNode } from "react";

const RequireAuth = ({ children }: { children: ReactNode }) => {
    const { authed } = useAuth();
    return authed ? children : <Navigate to="/login" />;
};

export default RequireAuth;
