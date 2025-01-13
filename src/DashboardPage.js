import React from "react";
import { Link } from "react-router-dom";
import "./DashboardPage.css"; // Ensure you import the CSS for styling

// You can import icons if you're using a library like Font Awesome
import { FaCar, FaCalendarCheck, FaCog } from "react-icons/fa";

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-content">
        <h2>Welcome to Your Dashboard</h2>
        <p>
          Here you can manage your parking bookings and make new reservations.
          Let's get started!
        </p>

        {/* Feature Cards */}
        <div className="card">
          <div className="card-icon">
            <FaCar />
          </div>
          <h3>Book Parking</h3>
          <p>
            Reserve your parking spot in just a few clicks. Choose from
            available parking spaces.
          </p>
        </div>

        <div className="card">
          <div className="card-icon">
            <FaCalendarCheck />
          </div>
          <h3>Your Bookings</h3>
          <p>View and manage all your current and past parking bookings.</p>
        </div>

        <div className="card">
          <div className="card-icon">
            <FaCog />
          </div>
          <h3>Account Settings</h3>
          <p>Update your account details and preferences anytime.</p>
        </div>

        {/* Button to book parking */}
        <Link to="/parking" className="btn primary-btn">
          Book Parking
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
