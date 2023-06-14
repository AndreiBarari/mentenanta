import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavBtn } from "../atoms/navigation/NavBtn";
import logo from "../assets/nav-logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <header className="header flex-col">
      <div className="hero flex-row">
        <span className="hero-contact">
          <CallIcon
            sx={{
              color: "#001f3f",
              fontSize: "1.8em",
            }}
          />
          <a href="tel:+40720000000">0720000000</a>
        </span>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        {/* <span className="hero-contact">
          <CallIcon
            sx={{
              color: "#001f3f",
              fontSize: "1.8em",
            }}
          />
          <a href="tel:+40726945665">0726945665</a>
        </span> */}

        <span className="hero-contact">
          <EmailIcon
            sx={{
              color: "#001f3f",
              fontSize: "1.8em",
            }}
          />
          <a href="mailto:random2@yahoo.com">employeeOne@yahoo.com</a>
        </span>
      </div>
      <nav className="nav-bar flex-row">
        <div className={isMobile ? "trapezoid-mobile" : "trapezoid"}></div>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <NavLink className="nav-link" to="/" activeclassname="active">
            <NavBtn name="Acasă" />
          </NavLink>
          <NavLink className="nav-link" to="/servicii" activeclassname="active">
            <NavBtn name="Servicii" />
          </NavLink>
          <NavLink className="nav-link" to="/about" activeclassname="active">
            <NavBtn name="Despre Noi" />
          </NavLink>
          <NavLink className="nav-link" to="/faq" activeclassname="active">
            <NavBtn name="FAQ" />
          </NavLink>
          <NavLink className="nav-link" to="/contact" activeclassname="active">
            <NavBtn name="Contact" />
          </NavLink>
        </ul>
        <button className="nav-menu-btn" onClick={toggleMobileMenu}>
          {isMobile ? <MenuIcon /> : <MenuOpenIcon />}
        </button>
      </nav>
    </header>
  );
};
