import React from "react";
import socialLinks from "../data_comp/SocialLinks";
import StartBootstrapText from "../shared_comp/StartBootstrapText";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">
                2215 John Daniel Drive
                <br />
                Clark, MO 65243
              </p>
            </div>

            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Around the Web</h4>
              <ul className="list-inline mb-0">
                {socialLinks.map((socialLinks, i) => (
                  <li className="list-inline-item" key={`social_link_${i}`}>
                    <a
                      className="btn btn-outline-light btn-social text-center rounded-circle"
                      href={socialLinks.href}
                    >
                      <i
                        className={`fab fa-fw ${socialLinks.iconClassName}`}
                      ></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">About Freelancer</h4>
              <p className="lead mb-0">
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by
                <a href="http://startbootstrap.com">
                  <StartBootstrapText />
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
