import "./Navbar.css";
import logo from "../../assets/FoodieLogo.png";
import { ImSearch } from "react-icons/im";
import { TbBasketFilled } from "react-icons/tb";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Menu");
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="" className="logo" />{" "}
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile-app")}
          className={menu === "Mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact-us")}
          className={menu === "Contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        <ImSearch style={{ height: "19px", width: "19px" }} />
        <div className="navbar-serach-icon">
          <Link to="/cart">
            <TbBasketFilled style={{ height: "20px", width: "20px" }} />
          </Link>
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
