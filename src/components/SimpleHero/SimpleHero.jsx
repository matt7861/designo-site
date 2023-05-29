import React from "react";
import BannerWrapper from "../UI/BannerWrapper/BannerWrapper";
import "./SimpleHero.scss";

const SimpleHero = ({ title, text }) => {
  return (
    <BannerWrapper className="simple-hero container">
      <div className="simple-hero__content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </BannerWrapper>
  );
};

export default SimpleHero;
