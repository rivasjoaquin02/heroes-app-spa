import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const WEB_TITLE = "Asociaciones";
const ROUTES = [
    {
        path: "/marvel",
        label: "Marvel",
    },
    {
        path: "/dc",
        label: "DC",
    },
];

const NavBar = () => {
    return (
        <div className="navbar-outer">
            <nav className="navbar">
                <div className="navbar__left">
                    <div className="navbar__logo">{WEB_TITLE}</div>
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
                    <Link to="/login">Login</Link>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
