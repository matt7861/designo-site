import React from "react";
import { Link } from "react-router-dom";
import "./StyledButton.scss";

const StyledButton = ({ children, to, style }) => {
  const linkStyle = `styled-button styled-button--${style}`;

  return (
    <Link to={to} className={linkStyle}>
      {children}
    </Link>
  );
};

export default StyledButton;
