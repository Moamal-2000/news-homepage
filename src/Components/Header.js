import React, { useEffect, useState } from "react";
import { useNavDataContext } from "../App";
import logoImg from "../images/logo.svg";
import "./Header.css";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  const [navSwitcher, setNavSwitcher] = useState(true);
  const navData = useNavDataContext()



  const iconMenu = (
    <>
      <div
        className="menu-icon"
        onClick={() => navData.setIsNavListActive((prevValue) => !prevValue)}
      >
        <div className="line"></div>
      </div>
      <Nav hide={true} />
    </>
  );



  useEffect(() => {
    function showNavList() {
      if (window.innerWidth >= 768) {
        setNavSwitcher(true);
        navData.setIsNavListActive(prevValue => false)
      }
      else {
        setNavSwitcher(false);
      }
    }
    showNavList();

    window.addEventListener("resize", () => showNavList());


    return () => {
      window.removeEventListener("resize", showNavList);
    };
  }, [navData]);



  return (
    <header>
      <div className="logo">
        <img src={logoImg} alt="" />
      </div>

      {navSwitcher ? <Nav /> : iconMenu}
      <MobileNav />
    </header>
  );
};

export default Header;
