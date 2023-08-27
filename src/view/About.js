import React from "react";
import Divider from "../shared_comp/Divider";
import DownloadButton from "../shared_comp/DownloadButton";

const About = () => {
  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">
          About
        </h2>

        <div className="divider-custom divider-light">
          <Divider />
        </div>

        <div className="row">
          <div className="col-lg-4 ms-auto">
            <p className="lead">
              Freelancer is a free bootstrap theme created by Start Bootstrap.
              The download includes the complete source files including HTML,
              CSS, and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-lg-4 me-auto">
            <p className="lead">
              You can create your own custom avatar for the masthead, change the
              icon in the dividers, and add your email address to the contact
              form to make it fully functional!
            </p>
          </div>
        </div>

        <div className="text-center mt-4">
          <DownloadButton />
        </div>
      </div>
    </section>
  );
};

export default About;
