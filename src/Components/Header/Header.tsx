import React, { useState } from "react";
import "./Header.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
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
        <Link
          className={
            location.pathname === "/" && theme === "dark"
              ? "header-link-active"
              : ""
          }
          id={
            location.pathname === "/" && theme === "light"
              ? "header-link-active-light"
              : ""
          }
          to="/"
        >
          Home
        </Link>
        <Link
          className={
            location.pathname === "/projects" && theme === "dark"
              ? "header-link-active"
              : ""
          }
          id={
            location.pathname === "/projects" && theme === "light"
              ? "header-link-active-light"
              : ""
          }
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className={
            location.pathname === "/skills" && theme === "dark"
              ? "header-link-active"
              : ""
          }
          id={
            location.pathname === "/skills" && theme === "light"
              ? "header-link-active-light"
              : ""
          }
          to="/skills"
        >
          Skills
        </Link>
        <Link
          className={
            location.pathname === "/about" && theme === "dark"
              ? "header-link-active"
              : ""
          }
          id={
            location.pathname === "/about" && theme === "light"
              ? "header-link-active-light"
              : ""
          }
          to="/about"
        >
          About
        </Link>
        <a onClick={() => setContactModal(true)}>Contact</a>
      </div>
      <Button
        className={`header-theme-changer ${
          theme === "light" ? "header-theme-changer-light" : ""
        }`}
        onClick={toggleTheme}
      >
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </Button>
      <Modal visible={contactModal} onCancel={() => setContactModal(false)}>
        <div
          className={`mv-modal ${theme === "light" ? "mv-modal-light" : ""}`}
        >
          <div>Contact With Me</div>
          <a
            data-target="tooltip"
            title="parisa6derakhshan@gmail.com"
            href="mailto:parisa6derakhshan@gmail.com"
            target={"_blank"}
          >
            <span>Email</span>
            <EmailIcon />
          </a>
          <a
            data-target="tooltip"
            title="https://linkedin.com/in/parisaderakhshan"
            href="https://linkedin.com/in/parisaderakhshan"
            target={"_blank"}
          >
            <span>Linkedin</span>
            <LinkedinIcon />
          </a>
          <a
            data-target="tooltip"
            title="https://pin.it/5GdXFF3"
            href="https://pin.it/5GdXFF3"
            target={"_blank"}
          >
            <span>Pinterest</span>
            <PinterestIcon />
          </a>
          <span
            onClick={() => setContactModal(false)}
            className="mv-modal-close-button"
          >
            ×
          </span>
        </div>
      </Modal>
    </header>
  );
};
export default Header;
