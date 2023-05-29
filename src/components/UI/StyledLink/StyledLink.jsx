import React from "react";
import { Link } from "react-router-dom";

const StyledLink = ({ to, children }) => {
  return (
    <Link to={to} className="styled-link">
      {children}
    </Link>
  );
};

export default StyledLink;
