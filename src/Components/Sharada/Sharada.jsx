import React from "react";
import "./Sharada.css";
import sharuprofile from "../../assets/sharuprofile.jpg";

const Sharada = () => {
  return (
    <div className="sharada">
      <img className="sharu" src={sharuprofile} alt="" />
      <h1>
        <span>I'm Sharada,</span> front end developer based in Bangalore, India. 
      </h1>
      <p>
        A passionate Front-End Developer skilled in
        crafting beautiful, responsive websites and web apps. I specialize in
        HTML, CSS, JavaScript, and React 
      </p>
      <div className="sharu-action">
        <div className="sharu-connect">Connect with me</div>
        <div className="sharu-resume">My resume</div>
      </div>
    </div>
  );
};

export default Sharada;
