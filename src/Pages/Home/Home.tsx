import React from "react";
import { useSelector } from "react-redux";
import "./Home.scss";
import homeVector from "../../Assets/Images/home-vector-2.svg";

const Home = () => {
  const theme: any = useSelector((state: any) => state.Reducer.theme);
  return (
    <div className={`home ${theme === "light" ? "home-light" : ""}`}>
      <div>
        <div>Hi I'm Parisa , an Unordinary Ui/Ux designer</div>
        <div>
          My process focuses on{" "}
          <span className="highlited">Web Applications design</span> and{" "}
          <span className="highlited">Mobile Applications design</span> . You
          can see my portfolio and resume on this site. You can also see ways to
          contact me in contact section.
        </div>
        <div>
          <span>Design</span>
          <span>Learn</span>
          <span>Focus</span>
          <span>Repeat...</span>
        </div>
      </div>
      <div>
        <img src={homeVector} alt="parisa derakhshan" />
      </div>
    </div>
  );
};
export default Home;
