import { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/register",
        {
          name,
          email,
          password,
        }
      );

      alert(response.data.message);

      setName("");
      setEmail("");
      setPassword("");

    } catch (error) {
      console.error(error);
      alert("Registration Failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="register-card">

        <h1>
          Create <span>Account</span>
        </h1>

        <p className="subtitle">
          Join us and start your journey to success
        </p>

        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <button
          className="register-btn"
          onClick={handleRegister}
        >
          Create Account
        </button>

        <p className="login-link">
          Already have an account?
          <a href="/login"> Login</a>
        </p>

      </div>
    </div>
  );
}

export default Register;