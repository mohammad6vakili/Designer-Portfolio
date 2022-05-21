import React from "react";
import "./Skills.scss";
import { Progress } from "antd";
import { useSelector } from "react-redux";
import { SkillsData } from "../../Constant/utils";

const Skills = () => {
  const theme: any = useSelector((state: any) => state.Reducer.theme);
  return (
    <div className={`skills ${theme === "light" ? "skills-light" : ""}`}>
      <div>My skills in percent</div>
      <div>
        {SkillsData.map((skill, index) => (
          <div>
            <span>{skill.label}</span>
            <Progress
              key={index}
              strokeColor={{
                "0%": "#7a0bc0",
                "100%": "#fa58b6",
              }}
              trailColor={"#a1a1a1"}
              percent={skill.value}
              strokeWidth={30}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
