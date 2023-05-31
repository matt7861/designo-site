import React from "react";
import StyledButton from "../UI/StyledButton/StyledButton";
import "./TextImageColumns.scss";

const TextImageColumns = ({ image, to, buttonText, title, text }) => {
  return (
    <div className="text-image-cols">
      <img src={image} alt="" />
      <h3>{title}</h3>
      {text && <p>${text}</p>}
      {to && <StyledButton to={to}>{buttonText}</StyledButton>}
    </div>
  );
};

export default TextImageColumns;
