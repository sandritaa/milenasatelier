// import { Link } from "react-scroll";
// import { useState } from "react/cjs/react.development";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar sticky">
      <h1>sandra novi</h1>
      <div className="links">
        <a href="#Home">Home</a>
        <a href="#Bio">Bio</a>
        <a href="#Portfolio">Portfolio</a>
        <a href="#Contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
