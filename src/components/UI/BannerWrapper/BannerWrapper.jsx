import React from "react";
import "./BannerWrapper.scss";

const BannerWrapper = ({ children, className }) => {
  return <div className={`banner-wrapper ${className}`}>{children}</div>;
};

export default BannerWrapper;
