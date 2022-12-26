import React from "react";
import BannerImg from "../../assets/home-banner-b.jpg";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <img src={BannerImg} alt="" className="banner-img" />
    </div>
  );
};

export default Banner;
