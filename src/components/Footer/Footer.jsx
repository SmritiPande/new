import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import logo from "../../assets/FoodieLogo.png";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logo" src={logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            atque blanditiis architecto minima reiciendis eum, est neque nobis
            explicabo quas dignissimos sit quo similique ab! At modi distinctio
            fuga nesciunt!
          </p>
          <div className="footer-social-icons">
            <FaFacebook className="icon" />
            <FaInstagramSquare className="icon" />
            <FaLinkedin className="icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@foodie.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ Foodie.com - All right Reserved.
      </p>
    </div>
  );
};

export default Footer;
