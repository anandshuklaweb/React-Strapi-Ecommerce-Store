import HeroImage from "../../../assets/banner-img.png";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>BOAT</h1>
          <p>
            India's fastest growing audio & wearables brand. The most incredible
            range of wireless earphones, earbuds, headphones, smart watches
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

export default Banner;
