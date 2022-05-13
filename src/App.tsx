import React from "react";
import "./App.scss";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "./Store/Actions/AppAction";

const App = () => {
  const dispatch = useDispatch();
  const theme: any = useSelector((state: any) => state.Reducer.theme);
  const toggleTheme = () => {
    if (theme === "light") {
      dispatch(setTheme("dark"));
    } else {
      dispatch(setTheme("light"));
    }
  };
  return (
    <div className={theme === "light" ? "App-light" : "App-dark"}>
      <span onClick={toggleTheme}>{theme}</span>
    </div>
  );
};

export default App;
