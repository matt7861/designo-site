import React from "react";
import StyledLink from "../UI/StyledLink/StyledLink";
import "./WorkCard.scss";

const WorkCard = ({ size, title, to, bgImage }) => {
  return (
    <div
      className={`work-card ${size}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2>{title}</h2>
      <StyledLink to={to}>VIEW PROJECTS</StyledLink>
    </div>
  );
};

export default WorkCard;
