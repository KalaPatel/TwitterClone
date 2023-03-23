import { useState } from "react";
// import HamburgerMenu from "../hamburgerMenu";
import SideMenu from "../sideMenu";
import TrendList from "../trendList";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTwitter } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import "./index.css";
const Header = () => {
  const [hamburgerMenuStatus, setHamburgerMenuStatus] = useState(false);
  const [trendMenuStatus, setTrendMenuStatus] = useState(false);
  const HamburgerMenuOpen = () => {
    setHamburgerMenuStatus((prev) => !prev);
  };

  const TrendMenuOpen = () => {
    setTrendMenuStatus(!trendMenuStatus);
  };

  return (
    <div className="Header">
      <div className="mobile_header">
        <GiHamburgerMenu className="icons" onClick={HamburgerMenuOpen} />

        {hamburgerMenuStatus ? (
          <SideMenu styleType="sideMenuStyle hamburger_sideMenu" />
        ) : (
          <SideMenu styleType="sideMenuStyle hide" />
        )}
        <FaTwitter className="logo_icon" />
        <HiOutlineSparkles className="icons" onClick={TrendMenuOpen} />
        {trendMenuStatus ? (
          <TrendList styleType="sideMenuStyle trendTopics_mobileMenu" />
        ) : (
          <TrendList styleType="sideMenuStyle hideMenu" />
        )}
      </div>
      <div className="larger_screen_header">
        <FaTwitter className="logo_icon" />
        <SideMenu styleType="header_fullscreen_sideMenu" />
        <button className="Btn_tweet">Tweet</button>
      </div>
    </div>
  );
};

export default Header;
