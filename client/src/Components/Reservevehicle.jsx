import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

function Reservevehicle({ userInfo }) {
  const { id } = useParams();
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [rent, setRent] = useState("");
  const [days, setDays] = useState("");
  const [date, setDate] = useState("");
  const username = userInfo.username;
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/viewvehicle/${id}`).then((display) => {
      setModel(display.data.model);
      setYear(display.data.year);
      setRent(display.data.rent);
    });
  }, []);

  const reserveAVehicle = async (event) => {
    event.preventDefault();
    const display = await axios.post("http://localhost:4000/addreservation", {
      model,
      year,
      rent,
      days,
      date,
      username,
    });

    if (display.data === "added") {
      navigate("/history");
      swal({
        title: "Reserved",
        icon: "success",
        timer: 1000,
        buttons: false,
      });
    }
  };

  return (
    <div className="mx-auto mt-3 p-3 border rounded" style={{ width: "98%" }}>
      <form className="">
        <h3>Reserve a vehicle</h3>

        <div className="mb-2">
          <label for="inputModel" className="form-label">
            Model
          </label>
          <input
            type="text"
            placeholder="Model"
            className="form-control"
            id="inputModel"
            value={model}
            onChange={(event) => {
              setModel(event.target.value);
            }}
            disabled
          />
        </div>
        <div className="mb-2">
          <label for="inputYear" className="form-label">
            Year
          </label>
          <input
            type="number"
            placeholder="Year"
            className="form-control"
            id="inputYear"
            value={year}
            onChange={(event) => {
              setYear(event.target.value);
            }}
            disabled
          />
        </div>
        <div className="mb-2">
          <label for="inputRent" className="form-label">
            Rent per day
          </label>
          <input
            type="number"
            placeholder="Rent"
            className="form-control"
            id="inputRent"
            value={rent}
            onChange={(event) => {
              setRent(event.target.value);
            }}
            disabled
          />
        </div>
        <div className="mb-2">
          <label for="inputDays" className="form-label">
            No of Days
          </label>
          <input
            type="number"
            placeholder="Days"
            className="form-control"
            id="inputDays"
            value={days}
            onChange={(event) => {
              setDays(event.target.value);
            }}
          />
        </div>
        <label for="inputDate" className="form-label">
          Start Date
        </label>
        <div className="mb-2">
          <input
            type="date"
            placeholder="Start Date"
            className="form-control"
            id="inputDate"
            value={date}
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-dark"
          onClick={reserveAVehicle}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Reservevehicle;
