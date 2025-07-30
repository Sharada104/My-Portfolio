import React from "react";
import "./About.css";
import sharuprofile from "../../assets/sharuprofile.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me </h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={sharuprofile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi, I'm Sharada Hiremath, a Front-End Developer with 6 months of
              hands-on internship experience building responsive and interactive
              web applications. During my internship, I worked with technologies
              like HTML, CSS, JavaScript, and React, translating UI/UX designs
              into real-world user experiences. I gained experience
              collaborating with developers and designers, debugging
              cross-browser issues, and building reusable components. I’m
              passionate about writing clean, maintainable code and continuously
              learning modern front-end trends. I'm currently looking for
              opportunities to contribute to exciting projects where I can grow
              as a developer and create meaningful user experiences.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
