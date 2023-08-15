import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

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
