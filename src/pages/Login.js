import { useNavigate } from "react-router-dom";
import '../App.css'

function Login() {
    const navigate = useNavigate();
    const checkPassword = () => {
        const input = document.getElementById("password").value;
        if (input === "200523") {
            navigate("/home");
        } else {
            alert("Incorrect password");
        }
    };

    return (
        <div>
            <form onSubmit={checkPassword}>
                <input id="password" name="password"/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;