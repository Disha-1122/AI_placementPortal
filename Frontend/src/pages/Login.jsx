import { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/login",
        {
          email,
          password,
        }
      );

      if (response.data.message === "Login Successful") {
        alert("Login Successful");

        navigate("/dashboard");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="register-card">

        <h1>
          Welcome <span>Back</span>
        </h1>

        <p className="subtitle">
          Login to continue your placement journey
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            onClick={() =>
              setShowPassword(!showPassword)
            }
          >
            {showPassword ? (
              <FaEyeSlash />
            ) : (
              <FaEye />
            )}
          </span>
        </div>

        <div className="forgot-password">
         <Link to="/forgot-password">
             Forgot Password?
         </Link>
        </div>

        <button
          className="register-btn"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="login-link">
          Don't have an account?
          <a href="/register"> Register</a>
        </p>

      </div>
    </div>
  );
}

export default Login;