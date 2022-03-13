import React from "react";
import Section2 from "../Section2/Section2";
import Section4 from "../Section4/Section4";
import Section8 from "../Section8/Section8";
import { Link } from "react-router-dom";
import "./About.scss";
import "./About.responsive.scss";


function About() {
  return (
    <div className="about-cont">
      <div className="about-content">
        <div className="img-text">
          <Link className="i-link" to={"/"}>
            Home
          </Link>
          <li>About</li>
        </div>

        <div className="page-name">
          <h1>About</h1>
        </div>
      </div>
      <div className="about-sections">
        <Section2 />
        <Section4 />
        <Section8 />
      </div>
    </div>
  );
}
export default About;
