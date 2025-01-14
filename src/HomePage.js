import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Ensure the CSS file is properly linked

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to the Smart Parking System</h1>
            <p className="hero-description">
              Easily book parking spots and manage your parking needs with ease.
            </p>
            <div className="hero-buttons">
              <Link to="/parking" className="btn primary-btn">
                Find Parking
              </Link>
              <Link to="/register" className="btn secondary-btn">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
