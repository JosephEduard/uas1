import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/menu.css";

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="App-header">
      <h1>Welcome to Retro Hub</h1>
      <p>Your one-stop shop for all your favorite games!</p>
      <div>
        <button
          className="App-link"
          onClick={() => navigate("/login")}
          style={{ marginRight: "10px" }}
        >
          Login
        </button>
        <button className="App-link" onClick={() => navigate("/register")}>
          Register
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
