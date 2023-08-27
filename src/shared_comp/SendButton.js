import { useState } from "react";

const SendButton = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  return (
    <button className="btn btn-primary btn-xl" id="submitButton" type="submit">
      {isFormSubmitted ? "Submitted" : "send"}
    </button>
  );
};

export default SendButton;
