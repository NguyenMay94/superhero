import React from "react";
import "../../../asset/sass/components/input.scss";

const Input = (props) => {
  const {
    type,
    inValid,
    touched,
    shouldValidate,
    className,
    elementConfig,
    value,
    changed,
  } = props;
  const inValidClass = inValid && shouldValidate && touched ? "invalid" : "";

  const renderElement = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            className={`input ${className || ""} ${inValidClass}`}
            {...elementConfig}
            value={value}
            onChange={changed}
          />
        );
      case "select":
        return (
          <select
            className={`input ${className || ""} ${inValidClass}`}
            value={value}
            onChange={changed}
          >
            {elementConfig.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.displayValue}
              </option>
            ))}
          </select>
        );
      default:
        return (
          <input
            className={`input ${className || ""} ${inValidClass}`}
            {...elementConfig}
            value={value}
            onChange={changed}
          />
        );
    }
  };

  return (
    <div className={`input-section ${inValidClass}`}>
      <label className="label">{props.label}</label>
      {renderElement()}
      {inValidClass ? <p className="message-invalid">{props.message}</p> : null}
    </div>
  );
};

export default Input;
