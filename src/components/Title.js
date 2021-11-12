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
      <span className="h1">Sanchan's Gallery</span>
      <p>This website is photos Gallery....</p>
      <h2>My Pictures!</h2>
    </div>
  );
};

export default Title;
