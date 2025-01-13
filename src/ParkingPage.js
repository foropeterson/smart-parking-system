import React from "react";
import "./ParkingPage.css"; // Ensure the CSS file is imported

const ParkingPage = () => {
  const parkingSpots = [
    { id: 1, name: "Spot A", description: "Located near the entrance" },
    { id: 2, name: "Spot B", description: "Covered parking space" },
    {
      id: 3,
      name: "Spot C",
      description: "Conveniently located near the elevators",
    },
    { id: 4, name: "Spot D", description: "Quiet area with more space" },
  ];

  return (
    <div className="parking-page">
      <h2>Available Parking Spots</h2>
      <p>Choose a parking spot and reserve it.</p>

      <div className="parking-spots">
        {parkingSpots.map((spot) => (
          <div key={spot.id} className="parking-spot-card">
            <h3>{spot.name}</h3>
            <p>{spot.description}</p>
            <button className="reserve-btn">Reserve Spot</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParkingPage;
