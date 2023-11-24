import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="main">
        <div className="sneh-1 navbar-brand">Snehal Bhor</div>

        <div className="outer">
          <div className="btn-1">
            <li className="nav">
              <a className="nav-link" aria-current="page" href="/about me">
                <div className="change-text">About Me</div>
              </a>
            </li>
          </div>

          <div className="btn-1">
            <li className="nav">
              <a
                className="nav-link active div"
                aria-current="page"
                href="/transition towards it field"
              >
                <div className="change-text">Transition towards IT field</div>
              </a>
            </li>
          </div>

          <div className="btn-1">
            <li className="nav">
              <a className="nav-link active" aria-current="page" href="/resume">
                <div className="change-text">Resume</div>
              </a>
            </li>
          </div>

          <div className="btn-1">
            <li className="nav">
              <a
                className="nav-link active"
                aria-current="page"
                href="/githubprojectlink"
              >
                <div className="change-text">Github project liks</div>
              </a>
            </li>
          </div>

          <div className="btn-1">
            <li className="nav">
              <a
                className="nav-link active"
                aria-current="page"
                href="/main project 1"
              >
                <div className="change-text">Main Project -1</div>
              </a>
            </li>
          </div>

          <div className="btn-1">
            <li className="nav">
              <a
                className="nav-link active"
                aria-current="page"
                href="/main project 2"
              >
                <div className="change-text">Main project-2</div>
              </a>
            </li>
          </div>
        </div>
      </div>

      <div className="main-1">
        <div className="firstdiv">About Me</div>
        <div className="seconddiv">
          <div className="thirddiv-1 image-container">
            <img src="./sneha.JPG" alt="logo" width={100} className="src" />
          </div>
          <div className="thirddiv-2">
            <div className="main1">Snehal Bhor</div>
            <div className="subdiv">
              {" "}
              <br />
              Hello, I'm Snehal Bhor, a passionate individual with a diverse
              background and a thirst for learning. I hail from a small village
              in Ahmednagar, where I completed my schooling, nurturing a deep
              connection to my roots.
              <br />
              My academic journey led me to pursue a Master's degree in
              Microbiology, culminating in an MSc. in Microbiology. This field
              allowed me to explore the fascinating world of microorganisms and
              their impact on our lives.
              <br />
              After embarking on a new chapter in my life through marriage, I
              found myself in Pune, a bustling IT hub. With a curious mind and a
              drive for innovation, I decided to pivot my career towards the
              dynamic Information Technology sector. This transition has been a
              rewarding experience, where I've been able to apply my analytical
              skills and adapt to the fast-paced, ever-evolving tech landscape.
              <br />
              I'm a firm believer in lifelong learning and self-improvement. My
              journey from a small village to the thriving IT industry has
              taught me the value of adaptability and the limitless
              opportunities that life can offer. I'm excited to continue
              exploring new horizons, both personally and professionally, and I
              look forward to connecting with like-minded individuals on this
              incredible journey.
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
