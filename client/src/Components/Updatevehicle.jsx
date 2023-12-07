import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

function Updatevehicle() {
  const { id } = useParams();
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [rent, setRent] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/viewvehicle/${id}`).then((display) => {
      setModel(display.data.model);
      setYear(display.data.year);
      setRent(display.data.rent);
      setStatus(display.data.status);
    });
  }, []);

  const updateAVehicle = async (event) => {
    event.preventDefault();
    const display = await axios.put(
      `http://localhost:4000/updatevehicle/${id}`,
      {
        model,
        year,
        rent,
        status,
      }
    );

    if (display.data === "updated") {
      navigate("/managevehicles");
      swal({
        title: "Updated",
        icon: "success",
        timer: 1000,
        buttons: false,
      });
    }
  };

  return (
    <div className="mx-auto mt-3 p-3 border rounded" style={{ width: "98%" }}>
      <form className="">
        <h3>Update a vehicle</h3>

        <div className="mb-2">
          <input
            type="text"
            placeholder="Model"
            className="form-control"
            id="inputModel"
            value={model}
            onChange={(event) => {
              setModel(event.target.value);
            }}
          />
        </div>
        <div className="mb-2">
          <input
            type="number"
            placeholder="Year"
            className="form-control"
            id="inputYear"
            value={year}
            onChange={(event) => {
              setYear(event.target.value);
            }}
          />
        </div>
        <div className="mb-2">
          <input
            type="number"
            placeholder="Rent"
            className="form-control"
            id="inputRent"
            value={rent}
            onChange={(event) => {
              setRent(event.target.value);
            }}
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            placeholder="Status"
            className="form-control"
            id="inputStatus"
            value={status}
            onChange={(event) => {
              setStatus(event.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-dark" onClick={updateAVehicle}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Updatevehicle;
