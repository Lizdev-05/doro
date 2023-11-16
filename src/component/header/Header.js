import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <header className={style.header}>
        <div>
          <NavLink to="/">DORO</NavLink>
        </div>

        <nav className={style.headerRight}>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/why-us">Why Us</NavLink>
          <NavLink to="/trust-profile">Trust Profile</NavLink>
          <NavLink to="/trust-graph">Trust Graph</NavLink>
          <NavLink to="/faq">FAQs</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
