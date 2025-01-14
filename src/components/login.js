import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/menu.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://web-alpha-sage-55.vercel.app/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
    }
  };

  return (
    <div className="App-header">
      <div className="App">
        <h2 style={{ marginBottom: "2rem" }}>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <div className="login-form-group">
            <label className="login-label">Email</label>
            <input
              className="login-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="login-form-group">
            <label className="login-label">Password</label>
            <input
              className="login-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="login-register-text">
          Don't have an account?{" "}
          <span className="App-link" onClick={() => navigate("/register")}>
            Register here
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
