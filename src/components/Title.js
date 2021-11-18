import React from "react";
import "../index.css";
import Logo from "./logo.png";

const Title = () => {
  return (
    <div className="title">
      <img
        className="logo"
        src={Logo}
        alt="logo"
        style={{ height: "30px", marginTop: "10px" }}
      />{" "}
      <h1>Sanchan's Photo Gallery</h1>
      <p>"Somewhere between Emotion and Emotionless,<br /> i grew up...."</p>
      <h2>My Pictures!</h2>
    </div>
  );
};

export default Title;
