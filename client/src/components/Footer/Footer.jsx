import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            During one of their many explorations, our founders Aman Gupta and
            Sameer Mehta discovered that the dopest people of our land were in
            search of affordable, durable and ultra fashionable audio products
            to groove to.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Mumbai, India - 400051</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: +91 0000000000</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: info@odeostore.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
        </div>
        <div className="col">
          <div className="title">Home</div>
          <span className="text">About</span>
          <span className="text">Contact</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Terms & Conditions</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            ODEOSTORE 2022, Developed By Anand Shukla
          </span>
          <img src={Payment} alt="payment" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
