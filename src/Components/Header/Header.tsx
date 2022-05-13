import React from "react";
import "./Header.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setTheme } from "../../Store/Actions/AppAction";
import { Button } from "antd";
import { ReactComponent as LightModeIcon } from "../../Assets/Images/light.svg";
import { ReactComponent as DarkModeIcon } from "../../Assets/Images/dark.svg";
// import assets
import Logo from "../../Assets/Images/Logo.png";

const Header = () => {
  const dispatch = useDispatch();
  const theme: string = useSelector((state: any) => state.Reducer.theme);
  const toggleTheme = () => {
    if (theme === "light") {
      dispatch(setTheme("dark"));
    } else {
      dispatch(setTheme("light"));
    }
  };
  return (
    <header
      className={`Header ${theme === "light" ? "Header-light" : "Header-dark"}`}
    >
      <div
        className={`header-logo-wrapper ${
          theme === "light" ? "header-logo-wrapper-light" : ""
        }`}
      >
        <img src={Logo} alt="parisa derakhshan portfoilo logo" />
        <span>Parisa Derakhshan Portfolio</span>
      </div>
      <div
        className={`header-links ${
          theme === "light" ? "header-links-light" : ""
        }`}
      >
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/cv">CV</Link>
        <Link to="/about">About</Link>
        <a>Contact</a>
      </div>
      <Button className="header-theme-changer" onClick={toggleTheme}>
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </Button>
    </header>
  );
};
export default Header;
