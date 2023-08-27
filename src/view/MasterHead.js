import React from "react";
import StartBootstrapText from "../shared_comp/StartBootstrapText";
import Divider from "../shared_comp/Divider";

const MasterHead = () => {
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        <img
          className="masthead-avatar mb-5"
          src="assets/img/avataaars.svg"
          alt="..."
        />
        <h1 className="masthead-heading text-uppercase mb-0">
          <StartBootstrapText />
        </h1>
        <div className="divider-custom divider-light">
          <Divider />
        </div>
        <p className="masthead-subheading font-weight-light mb-0">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </header>
  );
};

export default MasterHead;
