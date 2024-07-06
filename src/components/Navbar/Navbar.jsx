import "./Navbar.css";
import logo from "../../assets/FoodieLogo.png";
import { ImSearch } from "react-icons/im";
import { TbBasketFilled } from "react-icons/tb";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("Menu");
  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("Mobile-app")}
          className={menu === "Mobile-app" ? "active" : ""}
        >
          Mobile-app
        </li>
        <li
          onClick={() => setMenu("Contact-us")}
          className={menu === "Contact-us" ? "active" : ""}
        >
          Contact us
        </li>
      </ul>
      <div className="navbar-right">
        <ImSearch style={{ height: "19px", width: "19px" }} />
        <div className="navbar-serach-icon">
          <TbBasketFilled style={{ height: "20px", width: "20px" }} />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
