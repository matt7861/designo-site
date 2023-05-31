import React from "react";
import "./ColumnWrapper.scss";

const ColumnWrapper = ({ children }) => {
  return <div class="column-wrapper container">{children}</div>;
};

export default ColumnWrapper;
