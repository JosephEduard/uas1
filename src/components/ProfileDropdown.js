import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, ChevronDown } from "lucide-react";
import "../style/menu.css";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  if (!userData) {
    return null;
  }

  return (
    <div className="x-nav-icon" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="x-nav-tool"
        style={{
          cursor: "pointer",
          border: "none",
          background: "none",
          padding: 0,
        }}
      >
        <User size={20} className="x-icon" />
        <span style={{ marginLeft: "5px" }}>{userData.name}</span>
        <ChevronDown
          size={16}
          className="x-icon"
          style={{
            marginLeft: "5px",
            transform: isOpen ? "rotate(180deg)" : "rotate(0)",
            transition: "transform 0.2s ease-in-out",
          }}
        />
      </button>

      {isOpen && (
        <div
          className="x-popup-overlay"
          style={{
            backgroundColor: "transparent",
            height: "auto",
            position: "absolute",
            top: "100%",
            right: 0,
            width: "auto",
            minWidth: "200px",
          }}
        >
          <div className="x-popup" style={{ maxWidth: "100%", width: "auto" }}>
            <div
              style={{
                borderBottom: "1px solid var(--primary-color)",
                paddingBottom: "10px",
                marginBottom: "10px",
              }}
            >
              <p style={{ color: "var(--primary-text-color)", margin: 0 }}>
                {userData.name}
              </p>
              <p
                style={{
                  color: "var(--primary-color)",
                  fontSize: "0.875rem",
                  margin: 0,
                }}
              >
                {userData.email}
              </p>
            </div>
            <button
              onClick={handleSignOut}
              className="x-cta-tool-list"
              style={{
                width: "100%",
                textAlign: "left",
                border: "none",
                background: "none",
                padding: "8px",
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
