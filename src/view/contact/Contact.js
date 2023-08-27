import React from "react";
import Divider from "../../shared_comp/Divider";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Contact Me
        </h2>
        <div className="divider-custom">
          <Divider />
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
