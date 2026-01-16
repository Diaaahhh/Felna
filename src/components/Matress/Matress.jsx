import React from "react";
import "./Matress.css";
import Hero from "../Hero/Hero";
import Body from "../Body/Body";

function Matress() {
  return (
    <div className="wrapper">
      <div className="matress">
        <Hero/>
        <Body/>
      </div>
    </div>
  );
}

export default Matress;
