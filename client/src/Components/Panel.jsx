import React from "react";

function Panel() {
  return (
    <div className="mt-3 text-center">
      <a
        href="/managevehicles"
        className="btn btn-outline-dark btn-lg me-1"
        role="button"
      >
        Vehicles
      </a>
      <a
        href="/users"
        className="btn btn-outline-dark btn-lg me-1"
        role="button"
      >
        Users
      </a>
      <a
        href="/reservations"
        className="btn btn-outline-dark btn-lg"
        role="button"
      >
        Reservations
      </a>
    </div>
  );
}

export default Panel;
