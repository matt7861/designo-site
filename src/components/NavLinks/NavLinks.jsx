import React from "react";
import { Link } from "react-router-dom";
import "./NavLinks.scss";

const NavLinks = ({ color }) => {
  return (
    <nav className={color}>
      <Link className="link" to="/about">
        OUR COMPANY
      </Link>
      <Link className="link" to="/locations">
        LOCATIONS
      </Link>
      <Link className="link" to="/contact">
        CONTACT
      </Link>
    </nav>
  );
};

export default NavLinks;
