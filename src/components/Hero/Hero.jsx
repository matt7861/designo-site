import React from "react";
import heroImage from "../../assets/images/hero-image.png";
import StyledLink from "../StyledLink/StyledLink";
import BannerWrapper from "../UI/BannerWrapper/BannerWrapper";
import "./Hero.scss";

const Hero = () => {
  return (
    <BannerWrapper className="hero container">
      <div className="hero__content">
        <h2>Award-winning custom designs and digital branding solutions</h2>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <StyledLink to="/about" style="light">
          LEARN MORE
        </StyledLink>
        <img className="hero__image" src={heroImage} alt="hero image" />
      </div>
    </BannerWrapper>
  );
};

export default Hero;
