import React from "react";

function Account({ userInfo }) {
  return (
    <div className="mt-3 text-center">
      <h3>Account Details</h3>
      <p>Username: {userInfo.username}</p>
      <p>Role: {userInfo.role}</p>
    </div>
  );
}

export default Account;
