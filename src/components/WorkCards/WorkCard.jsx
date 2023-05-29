import React from "react";
import StyledLink from "../UI/StyledLink/StyledLink";

const WorkCard = ({ to, bgImage, title }) => {
  return (
    <div className="work-card" style={{ backgroundImage: `url(${bgImage})` }}>
      <h2>APP DESIGN</h2>
      <StyledLink to="/">VIEW PROJECTS</StyledLink>
    </div>
  );
};

export default WorkCard;
