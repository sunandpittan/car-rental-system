import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

function Viewvehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/viewvehicles").then((display) => {
      setVehicles(display.data);
    });
  }, [vehicles]);

  const deleteVehicle = (event, Id) => {
    event.preventDefault();

    swal({
      title: "Are you sure?",
      buttons: ["No", "Yes"],
      dangerMode: true,
    }).then(async function (isConfirm) {
      if (isConfirm) {
        const display = await axios.delete(
          `http://localhost:4000/deletevehicle/${Id}`
        );

        if (display.data === "deleted") {
          swal({
            title: "Deleted",
            icon: "success",
            buttons: false,
            timer: 1000,
          });
        }
      }
    });
  };

  return (
    <div className="mt-4 mx-auto" style={{ width: "98%" }}>
      <h3 className="">Vehicles</h3>
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
          {vehicles.map((v) => (
            <tr key={v._id}>
              <td>{v.model}</td>
              <td>{v.year}</td>
              <td>{v.rent}</td>
              <td>{v.status}</td>
              <td>
                <a href={`/updatevehicle/${v._id}`}>
                  <BsFillPencilFill />
                </a>{" "}
                <a href="" onClick={(event) => deleteVehicle(event, v._id)}>
                  <BsFillTrashFill />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Viewvehicles;
