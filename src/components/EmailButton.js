import React from "react";
import { Link } from "react-router-dom";
import "./EmailButton.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"];
const COLOR = ["primary", "blue", "red", "green"];

export const EmailButton = ({
  mailto,
  label,
  type,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;
  return (
    <Link
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      type={type}
      to="#"
      target="_blank"
      onClick={(e) => {
        window.location = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};
