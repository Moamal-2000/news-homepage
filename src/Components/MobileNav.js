import React from "react";
import { useNavDataContext } from "../App";
import Links from "./Links";
import "./MobileNav.css";

const MobileNav = () => {
  const navData = useNavDataContext();


  return (
    <nav className={`mobile-nav ${navData.isNavListActive && "active"}`}>
      <img
        className="close-menu-icon"
        src={require("../images/icon-menu-close.svg").default}
        alt=""
        onClick={() => {
          navData.setIsNavListActive((prevValue) => !prevValue);
        }}
      ></img>
      <Links />
    </nav>
  );
};

export default MobileNav;
