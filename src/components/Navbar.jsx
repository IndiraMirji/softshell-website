import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="div1">
        Empower your team with SoftShell Enterprise — Scalable, secure
        automation for all
      </div>
      <nav
        className="navbar navbar-expand-lg sticky-top"
        style={{ backgroundColor: "#fff9fb", borderBottom: "1px solid black" }}
      >
        <div className="container-fluid">
         <a className='navbar-brand fs-3 fw-semibold d-flex align-items-center' href='#'>
  <img
    src='/logo.png'
    alt='SoftShell Logo'
    style={{ width: '50px', height: '50px', marginRight: '10px' }}
  />
  SoftShell
</a>



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

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  How It Works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Get Started
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <button
            className="btn ms-auto"
            style={{
              backgroundColor: "#e67300",
              color: "white",
              borderRadius: "20px",
              width: "130px",
              padding: "8px",
              marginRight: "90px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1",
              fontSize: "17px",
            }}
          >
            Get Started{" "}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
