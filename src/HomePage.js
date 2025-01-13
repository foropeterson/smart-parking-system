import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Ensure the CSS file is imported

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to the Smart Parking Booking System</h1>
          <p>
            Book parking spots with ease and manage your parking efficiently.
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
      </header>
    </div>
  );
};

export default HomePage;
