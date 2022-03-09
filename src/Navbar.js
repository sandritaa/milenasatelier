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
    <body>
      <nav className="navbar sticky">
        <div class="container">
          <div class="logo">sandra novi</div>

          <ul className="navLinks-item">
            <li>
              <a href="#Bio" onClick={handleClick}>
                Bio
              </a>
            </li>
            <li>
              <a href="#Journey" onClick={handleClick}>
                Journey
              </a>
            </li>
            <li>
              <a href="#Portfolio" onClick={handleClick}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#Contact" onClick={handleClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </body>
  );
};

export default Navbar;
