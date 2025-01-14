import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/menu.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "https://web-alpha-sage-55.vercel.app/register",
        {
          name,
          email,
          password,
        }
      );
      setSuccess(true);
      setError("");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
      setSuccess(false);
    }
  };

  return (
    <div className="App-header">
      <div className="App">
        <h2 style={{ marginBottom: "2rem" }}>Create Account</h2>
        <form onSubmit={handleRegister}>
          <div className="login-form-group">
            <label className="login-label">Name</label>
            <input
              className="login-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
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
          <div className="login-form-group">
            <label className="login-label">Confirm Password</label>
            <input
              className="login-input"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
          {error && <p className="login-error">{error}</p>}
          {success && <p className="login-success">Registration successful!</p>}
          <button type="submit" className="login-button">
            Register
          </button>
        </form>
        <p className="login-register-text">
          Already have an account?{" "}
          <span className="App-link" onClick={() => navigate("/login")}>
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
