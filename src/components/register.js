import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/menu.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (error) setError("");
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      setSuccess(true);
      // langsung login setelah register
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Registration failed. Please try again later."
      );
    } finally {
      setIsLoading(false);
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
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              disabled={isLoading}
            />
          </div>
          <div className="login-form-group">
            <label className="login-label">Email</label>
            <input
              className="login-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              disabled={isLoading}
            />
          </div>
          <div className="login-form-group">
            <label className="login-label">Password</label>
            <input
              className="login-input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              disabled={isLoading}
            />
          </div>
          <div className="login-form-group">
            <label className="login-label">Confirm Password</label>
            <input
              className="login-input"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
              disabled={isLoading}
            />
          </div>
          {error && <p className="login-error">{error}</p>}
          {success && (
            <p className="login-success">
              Registration successful! Redirecting to login...
            </p>
          )}
          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="login-register-text">
          Already have an account?{" "}
          <span
            className="App-link"
            onClick={() => !isLoading && navigate("/login")}
            style={{ cursor: isLoading ? "default" : "pointer" }}
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
