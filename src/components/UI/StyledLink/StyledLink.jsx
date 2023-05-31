import React from "react";
import { Link } from "react-router-dom";
import linkArrow from "../../../assets/images/link-arrow.svg";
import "./StyledLink.scss";

const StyledLink = ({ to, children }) => {
  return (
    <Link to={to} className="styled-link">
      {children}
      <img src={linkArrow} alt="" />
    </Link>
  );
};

export default StyledLink;
