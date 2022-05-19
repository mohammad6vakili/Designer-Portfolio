import React from "react";
import "./Skills.scss";
import { Progress } from "antd";
import { useSelector } from "react-redux";

const Skills = () => {
  const theme: any = useSelector((state: any) => state.Reducer.theme);
  return (
    <div className={`skills ${theme === "light" ? "skills-light" : ""}`}>
      <div>My skills in percent</div>
      <div>
        <Progress
          strokeColor={{
            "0%": "#7a0bc0",
            "100%": "#fa58b6",
          }}
          trailColor={"rgba(255,255,255,.3)"}
          percent={100}
          strokeWidth={30}
        />
      </div>
    </div>
  );
};
export default Skills;
