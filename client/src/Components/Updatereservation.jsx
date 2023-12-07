import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

function Updatereservation({ userInfo }) {
  const { id } = useParams();
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [rent, setRent] = useState("");
  const [days, setDays] = useState("");
  const [date, setDate] = useState("");
  const username = userInfo.username;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/viewareservation/${id}`)
      .then((display) => {
        setModel(display.data.model);
        setYear(display.data.year);
        setRent(display.data.rent);
        setDays(display.data.days);
        setDate(display.data.date);
      });
  }, []);

  const updateAReservation = async (event) => {
    event.preventDefault();
    const display = await axios.put(
      `http://localhost:4000/updatereservation/${id}`,
      {
        model,
        year,
        rent,
        days,
        date,
      }
    );

    if (display.data === "updated") {
      swal({
        title: "Updated",
        icon: "success",
        timer: 1000,
        buttons: false,
      });
      if (username === "admin") {
        navigate("/reservations");
      } else {
        navigate("/history");
      }
    }
  };

  return (
    <div className="mx-auto mt-3 p-3 border rounded" style={{ width: "98%" }}>
      <form className="">
        <h3>Update a reservation</h3>

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
            disabled
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
            disabled
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
            disabled
          />
        </div>
        <div className="mb-2">
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
        <div className="mb-2">
          <input
            type="date"
            placeholder="Date"
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
          onClick={updateAReservation}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Updatereservation;
