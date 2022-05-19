import React from "react";
import { useSelector } from "react-redux";
import "./About.scss";
import aboutImage from "../../Assets/Images/about.svg";

const About = () => {
  const theme: any = useSelector((state: any) => state.Reducer.theme);
  return (
    <div className={`about ${theme === "light" ? "about-light" : ""}`}>
      <div>A few lines about me ...</div>
      <div>
        <div>
          <div>
            I have been working in the field of design for about{" "}
            <span className="highlited">3 years</span>. At first, I focused more
            on UX topics.
          </div>
          <div>
            I am currently living in Iran and that is why most of the projects
            that I have done are in Persian But I have also designed projects in
            English.
          </div>
          <div>
            The topics of the projects designed by me are more about{" "}
            <span className="highlited">Management Dashboards</span>,{" "}
            <span className="highlited">Mobile Applications</span>,{" "}
            <span className="highlited">NFT Marketplaces</span>,{" "}
            <span className="highlited">Site Landing Pages</span>, etc.
          </div>
          <div>
            I also have experience in designing
            <span className="highlited">ui kits</span>,{" "}
            <span className="highlited">logos</span>,{" "}
            <span className="highlited">banner ads</span>, etc.
          </div>
          <div>
            But my main focus is on{" "}
            <span className="highlited">Product Design</span> and{" "}
            <span className="highlited">User Interface</span> and{" "}
            <span className="highlited">User Experience</span> of a software.
          </div>
          <div>
            Although I was born in Iran and I speak Persian, I am fluent in{" "}
            <span className="highlited">English</span>
            and I have no problem communicating with English speakers.
          </div>
        </div>
        <div>
          <img src={aboutImage} alt="about me" />
        </div>
      </div>
    </div>
  );
};
export default About;
