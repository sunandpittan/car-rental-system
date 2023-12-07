import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { BsFillTrashFill } from "react-icons/bs";

function Viewusers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/viewusers").then((display) => {
      setUsers(display.data);
    });
  }, [users]);

  const deleteUser = (event, Id) => {
    event.preventDefault();

    swal({
      title: "Are you sure?",
      buttons: ["No", "Yes"],
      dangerMode: true,
    }).then(async function (isConfirm) {
      if (isConfirm) {
        const display = await axios.delete(
          `http://localhost:4000/deleteuser/${Id}`
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
      <h3 className="">Users</h3>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.username}</td>
              <td>{u.role}</td>
              <td>
                <a href="" onClick={(event) => deleteUser(event, u._id)}>
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

export default Viewusers;
