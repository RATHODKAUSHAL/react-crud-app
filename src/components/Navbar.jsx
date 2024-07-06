import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>

      <nav className="navbar navbar-expand-lg bg-" >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-lg-5 me-lg-auto">
            <Link className="navbar-brand" to="/">
            Edu.
          </Link>
              <li class="nav-item">
              <Link className="nav-link active bg-black text-white" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link bg-black " to="/topics">
                Browse Topics
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link click-scroll bg-black" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link click-scroll bg-black" to="/contact">
                  Contact
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link click-scroll bg-black" to="/students">
                  Student
                </Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
