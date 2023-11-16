import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <NavLink to="/">DORO</NavLink>
      </header>
      <nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/why-us">Why Us</NavLink>
        <NavLink to="/trust-profile">Trust Profile</NavLink>
        <NavLink to="/trust-graph">Trust Graph</NavLink>
        <NavLink to="/faq">FAQs</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </nav>
    </div>
  );
};

export default Header;
