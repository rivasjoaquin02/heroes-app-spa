import { useNavigate } from "react-router-dom";
import { AuthConsumer as useAuth } from "../../../hooks/useAuth";

const Login = () => {
    const { login } = useAuth();

    const navigate = useNavigate();
    const handleLogin = () => {
        login({
            username: "johndoe",
            password: "secret",
        }).then(() => navigate("/"));
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <hr />

            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
