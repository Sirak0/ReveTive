import React from "react";
import Section8 from "../Section8/Section8";
import { Link } from "react-router-dom";
import "./Services.scss";
import "./Services.responsive.scss";
import Section3 from "../Section3/Section3";
import Section6 from "../Section6/Section6";

function Services() {
  return (
    <div className="services-cont">
      <div className="services-content">
        <div className="img-text">
          <Link className="i-link" to={"/"}>
            Home
          </Link>
          <li>Services</li>
        </div>

        <div className="page-name">
          <h1>Services</h1>
        </div>
      </div>
      <div className="services-sections">
        <Section3 />
        <Section6 />
        <Section8 />
      </div>
    </div>
  );
}
export default Services;
