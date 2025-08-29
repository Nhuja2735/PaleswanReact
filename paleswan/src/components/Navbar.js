// src/components/Navbar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";




function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Hamburger Button (mobile) */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
        </li>
        <li>
          <NavLink to="/programs" onClick={() => setIsOpen(false)}>Programs</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
