import React from "react";
import "./FooterCTA.scss";
import StyledLink from "../StyledLink/StyledLink";
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

      <StyledLink to="/contact" style="light">
        GET IN TOUCH
      </StyledLink>
    </BannerWrapper>
  );
};

export default FooterCTA;
