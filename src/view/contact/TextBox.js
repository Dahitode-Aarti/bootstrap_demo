import React from "react";

const TextBox = ({ type, label, name, placeholder }) => {
  return (
    <div className="form-floating mb-3">
      <input
        className="form-control"
        id={name}
        type={type}
        placeholder={placeholder}
        data-sb-validations="required"
      />
      <label for={name}>{label}</label>
      <div
        className="invalid-feedback"
        data-sb-feedback={`${name}":required"`}
      >{`A ${name} is required.`}</div>
    </div>
  );
};

export default TextBox;
