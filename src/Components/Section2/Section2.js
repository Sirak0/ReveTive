import React from "react";
import "./Section2.scss";
import "./Section2.responsive.scss";
import AboutImage from "../../Images/about.jpg";

function Section2() {
  return (
    <div className="section2-content1">
      <div className="section2-text">
        <h4>About Us</h4>
        <h2>
          We are <span>Professional Teams</span>
          <br></br> to Growth your Business
        </h2>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of
        </p>
        <button className="butt2">Read More</button>
      </div>
      <div className="section2-img">
        <img className="about-img" src={AboutImage} alt="pic"></img>
      </div>
    </div>
  );
}
export default Section2;
