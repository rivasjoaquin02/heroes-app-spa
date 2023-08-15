import { ReactNode, createContext, useContext, useState } from "react";

const AuthContext = createContext<ReturnType<typeof useAuth>>(
    {} as unknown as ReturnType<typeof useAuth>
);

const useAuth = () => {
    const [authed, setAuthed] = useState(false);

    const login = (credentials: Record<"username" | "password", string>) =>
        new Promise((res) => {
            setAuthed(true);
            res(credentials);
        });

    const logout = () =>
        new Promise((res) => {
            setAuthed(false);
            res("");
        });

    return { authed, login, logout };
};

export const AuthProvider = ({ children }: { children: ReactNode }) => (
    <AuthContext.Provider value={useAuth()}>{children}</AuthContext.Provider>
);

export const AuthConsumer = () => {
    const auth = useContext(AuthContext);
    if (!auth)
        throw new Error(
            "Auth Context can only be used inside the AuthProvider"
        );
    return auth;
};
