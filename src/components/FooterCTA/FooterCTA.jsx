import React from "react";
import "./FooterCTA.scss";
import StyledButton from "../UI/StyledButton/StyledButton";
import BannerWrapper from "../UI/BannerWrapper/BannerWrapper";

const FooterCTA = () => {
  return (
    <BannerWrapper className="footer-cta container padding-wrapper">
      <div>
        <h2>
          Let's talk about <br />
          your project
        </h2>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          <br />
          our expertise can help your business grow.
        </p>
      </div>

      <StyledButton to="/contact" style="light">
        GET IN TOUCH
      </StyledButton>
    </BannerWrapper>
  );
};

export default FooterCTA;
