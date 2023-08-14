import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        console.log("Login");

        navigate(-1);
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
