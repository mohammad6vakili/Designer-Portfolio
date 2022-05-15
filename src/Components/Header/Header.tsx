import React, { useState } from "react";
import "./Header.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setTheme } from "../../Store/Actions/AppAction";
import { Button, Modal } from "antd";
import { ReactComponent as LightModeIcon } from "../../Assets/Images/light.svg";
import { ReactComponent as DarkModeIcon } from "../../Assets/Images/dark.svg";
import { ReactComponent as EmailIcon } from "../../Assets/Images/email.svg";
import { ReactComponent as LinkedinIcon } from "../../Assets/Images/linkedin.svg";
import { ReactComponent as PinterestIcon } from "../../Assets/Images/pinterest.svg";
// import assets
import Logo from "../../Assets/Images/Logo.png";

const Header = () => {
  const dispatch = useDispatch();
  const [contactModal, setContactModal] = useState<boolean>(false);
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
        <a onClick={() => setContactModal(true)}>Contact</a>
      </div>
      <Button className="header-theme-changer" onClick={toggleTheme}>
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </Button>
      <Modal visible={contactModal} onCancel={() => setContactModal(false)}>
        <div
          className={`mv-modal ${theme === "light" ? "mv-modal-light" : ""}`}
        >
          <div>Contact With Me</div>
          <a>
            <span>Email</span>
            <EmailIcon />
          </a>
          <a
            onClick={() =>
              window.location.replace("www.linkedin.com/in/parisaderakhshan")
            }
          >
            <span>Linkedin</span>
            <LinkedinIcon />
          </a>
          <a>
            <span>Pinterest</span>
            <PinterestIcon />
          </a>
          <span className="mv-modal-close-button">×</span>
        </div>
      </Modal>
    </header>
  );
};
export default Header;
