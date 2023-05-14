import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Avatar = ({ src }) => (
  <div className="avatar">
    <img src={src} alt="avatar" />
  </div>
);

const NavLink = ({ text, link }) => (
  <Link to={`/${link}`} className="navlink">
    {text}
  </Link>
);

const Navbar = () => (
  <nav className="navbar">
    <div className="links">
      <NavLink text="Dashboard" link="dashboard" />
      <NavLink text="Customers" link="customers" />
    </div>
    <div className="avatar">
      <Avatar src="https://github.com/chenkie.png" />
    </div>
  </nav>
);

export default Navbar;
