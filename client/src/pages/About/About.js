import React from "react";
import HeroImage from "../../assets/about-banner.jpg";
import "./About.scss";
const About = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Effortless. Simple. Powerful. boAt Rockerz Wireless series brings
            high-fidelity audio paired with premium design to experience sound
            like no other. From deep, rich bass to clean highs, you’ll hear
            every note with a new sense of clarity. boAt Rockerz come with
            premium dynamic drivers tweaked as per boAt’s high quality
            standards.
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={HeroImage} alt="banner" />
      </div>
    </div>
  );
};

export default About;
