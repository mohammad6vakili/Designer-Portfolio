import React from "react";
import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Components/Header/Header";
import { Routings } from "./Constant/utils";
import { ReactComponent as EmailIcon } from "./Assets/Images/email.svg";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const theme: any = useSelector((state: any) => state.Reducer.theme);
  return (
    <div className={`App ${theme === "light" ? "App-light" : "App-dark"}`}>
      <Header />
      <Routes>
        {Routings.map((route, index) => (
          <Route path={route.Path} key={index} element={<route.Component />} />
        ))}
      </Routes>
      <div>
        <EmailIcon /> parisa6derakhshan@gmail.com
      </div>
    </div>
  );
};

export default App;
