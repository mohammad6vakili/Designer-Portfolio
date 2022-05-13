import React from "react";
import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Components/Header/Header";

const App = () => {
  const theme: any = useSelector((state: any) => state.Reducer.theme);
  return (
    <div className={`App ${theme === "light" ? "App-light" : "App-dark"}`}>
      <Header />
      ss
    </div>
  );
};

export default App;
