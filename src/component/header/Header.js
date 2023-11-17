import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import "./Nav.css";

// import React from "react";
// import { NavLink } from "react-router-dom";
// import style from "./Header.module.css";

// const Header = () => {
//   return (
//     <div>
//       <header className={style.header}>
//         <div>
//           {/* <NavLink to="/">DORO</NavLink> */}
//           <a href="#">DORO</a>
//         </div>

//         <nav className={style.headerRight}>
//           <ul>
//             <li>
//               <a href="#">Home</a>
//             </li>
//             <li>
//               <a href="#about">About</a>
//             </li>
//           </ul>
{
  /* <NavLink to="#about">About</NavLink>
          <NavLink to="#why-us">Why Us</NavLink>
          <NavLink to="#trust-profile">Trust Profile</NavLink>
          <NavLink to="#trust-graph">Trust Graph</NavLink>
          <NavLink to="#faq">FAQs</NavLink>
          <NavLink to="#signup">Sign Up</NavLink> */
}
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Header;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeNav, setActivenav] = useState("#");

  const setNav = (activeNavBar) => {
    setMobileMenu(false);
    setActivenav(activeNavBar);
  };

  return (
    <nav
      className={`flex flex-col z-10 bg px-8 py-7 ${
        mobileMenu ? "h-screen " : "h-fit"
      } fixed top-0 w-full shadow-xl md:flex-row md:justify-between md:px-20 md:h-fit`}
    >
      <a href="#" className="text-xl">
        <span className="">DORO</span>
      </a>
      <nav>
        <div className="md:hidden mobile-btns">
          <button
            type="button"
            className={classNames(!mobileMenu ? "block" : "hidden")}
            onClick={() => setMobileMenu(true)}
          >
            <MenuIcon className="h-8 mr-2" />
          </button>
          <button
            type="button"
            className={classNames(mobileMenu ? "block" : "hidden")}
            onClick={() => setMobileMenu(false)}
          >
            <XIcon className="h-8 mr-2" />
          </button>
        </div>
        <div
          className={classNames(mobileMenu ? "block" : "hidden", "md:block")}
        >
          <ul className="flex flex-col gap-8 items-center mt-24 md:flex-row md:mt-1">
            {/* <li>
              <a
                href="#"
                onClick={() => setNav("#")}
                className={activeNav === "#" ? "active" : ""}
              >
                Home
              </a>
            </li> */}
            <li>
              <a
                href="#about"
                onClick={() => setNav("#about")}
                className={activeNav === "#about" ? "active" : ""}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#why-us"
                onClick={() => setNav("#why-us")}
                className={activeNav === "#why-us" ? "active" : ""}
              >
                Why Us
              </a>
            </li>
            <li>
              <a
                href="#trust-profile"
                onClick={() => setNav("#trust-profile")}
                className={activeNav === "#trust-profile" ? "active" : ""}
              >
                Trust Profile
              </a>
            </li>
            <li>
              <a
                href="#trust-graph"
                onClick={() => setNav("#trust-graph")}
                className={activeNav === "#trust-graph" ? "active" : ""}
              >
                Trust Graph
              </a>
            </li>
            <li>
              <a
                href="#faq"
                onClick={() => setNav("#faq")}
                className={activeNav === "#faq" ? "active" : ""}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#signup"
                onClick={() => setNav("#signup")}
                className={activeNav === "#signup" ? "active" : ""}
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  );
};

export default Header;
