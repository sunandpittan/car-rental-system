import axios from "axios";
import React, { useEffect, useState } from "react";

function Vehicleslist() {
  const [vehicles, setVehicles] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const modelSearch = (e) => {
    setSearchVal(e.target.value);
  };

  useEffect(() => {
    axios.get("http://localhost:4000/viewvehicles").then((display) => {
      setVehicles(display.data);
    });
  }, [vehicles]);

  return (
    <div className="mt-4 mx-auto" style={{ width: "98%" }}>
      <h3 className="">
        Vehicles Search{" "}
        <input
          type="text"
          placeholder="Enter Model.."
          className="text-danger"
          id="inputSearch"
          onChange={modelSearch}
        />
      </h3>

      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Model</th>
            <th>Year</th>
            <th>Rent</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles
            .filter(
              (row) =>
                !searchVal.length ||
                row.model
                  .toString()
                  .toLowerCase()
                  .includes(searchVal.toString().toLowerCase())
            )
            .map((v) => (
              <tr key={v._id}>
                <td>{v.model}</td>
                <td>{v.year}</td>
                <td>{v.rent}</td>
                <td>{v.status}</td>
                <td>
                  <a href={`/reservevehicle/${v._id}`}>Reserve</a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Vehicleslist;
