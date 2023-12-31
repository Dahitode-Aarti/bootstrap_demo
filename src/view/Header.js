import React, { useState } from "react";
import menu from "../data_comp/NavbarLinks";
import StartBootstrapText from "../shared_comp/StartBootstrapText";

const Header = () => {
  const [active, setActive] = useState("");

  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          <StartBootstrapText />
        </a>
        <button
          className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            {menu.map((items, index) => {
              return (
                <li
                  className="nav-item mx-0 mx-lg-1"
                  key={index}
                  onClick={() => {
                    setActive(index);
                  }}
                >
                  <a
                    className={
                      active === index
                        ? "nav-link py-3 px-0 px-lg-3 rounded active"
                        : "nav-link py-3 px-0 px-lg-3 rounded"
                    }
                    href={items.href}
                  >
                    {items.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
