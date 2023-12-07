import React from "react";

function Dashboard() {
  return (
    <div className="mt-3 text-center">
      <a
        href="/vehicleslist"
        className="btn btn-outline-dark btn-lg me-1"
        role="button"
      >
        Vehicles
      </a>
      <a
        href="/history"
        className="btn btn-outline-dark btn-lg me-1"
        role="button"
      >
        Reservation History
      </a>
      <a href="/account" className="btn btn-outline-dark btn-lg" role="button">
        Account Details
      </a>
    </div>
  );
}

export default Dashboard;
