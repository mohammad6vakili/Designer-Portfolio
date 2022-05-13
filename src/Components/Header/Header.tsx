import React from "react";
import "./Header.scss";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../../Store/Actions/AppAction";

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
      <span onClick={toggleTheme}>parisa</span>
    </header>
  );
};
export default Header;
