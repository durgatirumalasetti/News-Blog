import React from "react";
import "./Header.css";
import logoImg from "../../../assets/images/NewsBlogW.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src={logoImg}
          alt="NewsBlog Logo"
          className="logo"
        />
      </div>
    </header>
  );
};

export default Header;
