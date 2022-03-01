// import { Link } from "react-scroll";
// import { useState } from "react/cjs/react.development";
import React from "react";

const Navbar = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href");
    const element = document.querySelector(targetId);
    const location = element.offsetTop;
    const navbar = document.querySelector(".navbar");

    window.scrollTo({
      left: 0,
      top: location - navbar.offsetHeight,

      // https://www.javascripttutorial.net/javascript-dom/javascript-width-height/
    });
  };

  return (
    <header className="layoutContainer">
      <nav className="navbar sticky">
        <h1>sandra novi</h1>
        <div className="links-item">
          <a href="#Bio" onClick={handleClick}>
            Bio
          </a>
          <a href="#Journey" onClick={handleClick}>
            Journey
          </a>
          <a href="#Portfolio" onClick={handleClick}>
            Portfolio
          </a>
          <a href="#Contact" onClick={handleClick}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
