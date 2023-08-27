import { useState } from "react";
import SendButton from "../../shared_comp/SendButton";
import TextBox from "./TextBox";

const ContactForm = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormError, setIsFormError] = useState(false);

  const handleFormSubmit = async (event) => {
    try {
      setIsFormSubmitted(true);
      setIsFormError(false);
    } catch {
      setIsFormError(true);

      setIsFormSubmitted(false);
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-lg-8 col-xl-7">
        <form
          id="contactForm"
          data-sb-form-api-token="API_TOKEN"
          onSubmit={handleFormSubmit}
        >
          <TextBox
            type="text"
            label="Full name"
            name="name"
            placeholder="Enter your name..."
          />

          <TextBox
            type="email"
            label="Email address"
            name="email"
            placeholder="name@example.com"
          />
          <TextBox
            type="tel"
            label="Phone number"
            name="phone"
            placeholder="(123) 456-7890"
          />

          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              id="message"
              type="text"
              placeholder="Enter your message here..."
              style={{ height: "10rem" }}
              data-sb-validations="required"
            ></textarea>
            <label for="message">Message</label>
            <div
              className="invalid-feedback"
              data-sb-feedback="message:required"
            >
              A message is required.
            </div>
          </div>

          <div
            className={`text-center mb-3 ${isFormSubmitted ? "" : "d-none"}`}
            id="submitSuccessMessage"
          >
            <div className="fw-bolder">Form submission successful!</div>
            To activate this form, sign up at
            <br />
            <a href="https://startbootstrap.com/solution/contact-forms">
              https://startbootstrap.com/solution/contact-forms
            </a>
          </div>

          <div
            className={`text-center text-danger mb-3 ${
              isFormError ? "" : "d-none"
            }`}
            id="submitErrorMessage"
          >
            Error sending message!
          </div>

          <SendButton />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
