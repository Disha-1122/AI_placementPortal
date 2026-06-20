import { useState } from "react";
import axios from "axios";

function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const sendOTP = async () => {
    const res = await axios.post(
      "http://127.0.0.1:8000/send-otp",
      { email }
    );

    alert(res.data.message);
  };

  const verifyOTP = async () => {
    const res = await axios.post(
      "http://127.0.0.1:8000/verify-otp",
      { email, otp }
    );

    alert(res.data.message);
  };

  const resetPassword = async () => {
    const res = await axios.post(
      "http://127.0.0.1:8000/reset-password",
      {
        email,
        new_password: newPassword
      }
    );

    alert(res.data.message);
  };

  return (
    <div className="auth-container">

      <div className="register-card">

        <h1>
          Reset <span>Password</span>
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <button
          className="register-btn"
          onClick={sendOTP}
        >
          Send OTP
        </button>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) =>
            setOtp(e.target.value)
          }
        />

        <button
          className="register-btn"
          onClick={verifyOTP}
        >
          Verify OTP
        </button>

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) =>
            setNewPassword(e.target.value)
          }
        />

        <button
          className="register-btn"
          onClick={resetPassword}
        >
          Reset Password
        </button>

      </div>

    </div>
  );
}

export default ForgotPassword;