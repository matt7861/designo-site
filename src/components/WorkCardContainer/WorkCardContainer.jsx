import React from "react";
import "./WorkCardContainer.scss";

const WorkCardContainer = ({ children, layout }) => {
  return (
    <div className={`${layout} work-card-container container`}>{children}</div>
  );
};

export default WorkCardContainer;
