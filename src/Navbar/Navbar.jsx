import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="main">
      <div className="sneh-1 navbar-brand">Snehal Bhor</div>

      <div className="outer">
        <div className="btn-1">
          <li className="nav">
            <a className="nav-link" aria-current="page" href="/about me"><div className="change-text">
              About Me</div>
            </a>
          </li>
        </div>

        <div className="btn-1">
          <li className="nav">
            <a
              className="nav-link active div"
              aria-current="page"
              href="/why i change the career"
            >
              <div className="change-text">Why I change the career</div>
            </a>
          </li>
        </div>

        <div className="btn-1">
          <li className="nav">
            <a className="nav-link active" aria-current="page" href="/resume"><div className="change-text">
              Resume</div>
            </a>
          </li>
        </div>

        <div className="btn-1">
          <li className="nav">
            <a
              className="nav-link active"
              aria-current="page"
              href="/githubprojectlink"
            ><div className="change-text">
              Github project liks</div>
            </a>
          </li>
        </div>

        <div className="btn-1">
          <li className="nav">
            <a
              className="nav-link active"
              aria-current="page"
              href="/main project 1"
            ><div className="change-text">
              Main Project -1</div>
            </a>
          </li>
        </div>

        <div className="btn-1">
          <li className="nav">
            <a
              className="nav-link active"
              aria-current="page"
              href="/main project 2"
            ><div className="change-text">
              Main project-2</div>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
