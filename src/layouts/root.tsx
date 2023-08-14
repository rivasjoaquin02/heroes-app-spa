import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="root">
            <NavBar />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;
