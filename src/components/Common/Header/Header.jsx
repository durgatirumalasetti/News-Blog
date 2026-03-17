import React from "react";
import "./Header.css";
import logo from "../../../assets/images/newsblog-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src={logo}
          alt="NewsBlog Logo"
          className="logo"
        />
      </div>
    </header>
  );
};

export default Header;
