import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

function History({ userInfo }) {
  const [reservations, setReservations] = useState([]);
  const username = userInfo.username;

  useEffect(() => {
    axios
      .get(`http://localhost:4000/viewreservation/${username}`)
      .then((display) => {
        setReservations(display.data);
      });
  }, [reservations]);

  const deleteReservation = (event, Id) => {
    event.preventDefault();

    swal({
      title: "Are you sure?",
      buttons: ["No", "Yes"],
      dangerMode: true,
    }).then(async function (isConfirm) {
      if (isConfirm) {
        const display = await axios.delete(
          `http://localhost:4000/deletereservation/${Id}`
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
      <h3 className="">Reservations History</h3>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Model</th>
            <th>Year</th>
            <th>Rent</th>
            <th>Days</th>
            <th>Start Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((r) => (
            <tr key={r._id}>
              <td>{r.model}</td>
              <td>{r.year}</td>
              <td>{r.rent}</td>
              <td>{r.days}</td>
              <td>{r.date}</td>
              <td>
                <a href={`/updatereservation/${r._id}`}>
                  <BsFillPencilFill />
                </a>{" "}
                <a href="" onClick={(event) => deleteReservation(event, r._id)}>
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

export default History;
