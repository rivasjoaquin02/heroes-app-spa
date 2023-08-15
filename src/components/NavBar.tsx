import { AuthConsumer as useAuth } from "../hooks/useAuth";
import "./NavBar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

const WEB_TITLE = "Hero";
const ROUTES = [
    {
        path: "/marvel",
        label: "Marvel",
    },
    {
        path: "/dc",
        label: "DC",
    },
    {
        path: "/search",
        label: "Search",
    },
];

const NavBar = () => {
    const { authed, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {
        logout().then(() => navigate("/"));
    };

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="navbar__left">
                    <div className="navbar__logo">
                        <Link to="/">{WEB_TITLE}</Link>
                    </div>
                    <ul className="navbar__links">
                        {ROUTES.map((route) => (
                            <li key={route.label}>
                                <NavLink
                                    to={route.path}
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    {route.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar_login">
                    {authed ? (
                        <button onClick={handleLogout}>Logout</button>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
