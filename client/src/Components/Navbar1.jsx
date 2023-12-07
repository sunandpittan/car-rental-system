import React from "react";
import { BsPower } from "react-icons/bs";

function Navbar1({ userInfo }) {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-md bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Car Rental
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              {!userInfo ? (
                <>
                  <a className="nav-link" href="/signup">
                    Sign up
                  </a>
                  <a className="nav-link" href="signin">
                    Sign in
                  </a>
                </>
              ) : userInfo.role === "admin" ? (
                <>
                  <a className="nav-link" href="/panel">
                    Panel
                  </a>
                  <a className="nav-link" href="/account">
                    {userInfo.username}
                  </a>
                  <a
                    className="nav-link text-danger"
                    href="/"
                    onClick={() => localStorage.clear()}
                  >
                    <BsPower />
                  </a>
                </>
              ) : userInfo.role === "user" ? (
                <>
                  <a className="nav-link" href="/dashboard">
                    Dashboard
                  </a>
                  <a className="nav-link" href="/account">
                    {userInfo.username}
                  </a>
                  <a
                    className="nav-link text-danger"
                    href="/"
                    onClick={() => localStorage.clear()}
                  >
                    <BsPower />
                  </a>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar1;
