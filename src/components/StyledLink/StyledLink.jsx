import React from "react";
import { Link } from "react-router-dom";
import "./StyledLink.scss";

const StyledLink = ({ children, to, style }) => {
  const linkStyle = `styled-link styled-link--${style}`;

  return (
    <Link to={to} className={linkStyle}>
      {children}
    </Link>
  );
};

export default StyledLink;
