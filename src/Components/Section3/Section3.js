import React from "react";
import "./Section3.scss";
import "./Section3.responsive.scss";
import Icon1 from "../../Images/web_development.svg";
import Icon2 from "../../Images/graphics_design.svg";
import Icon3 from "../../Images/seo_and_marketing.svg";
import Icon4 from "../../Images/customer_services.svg";
import Icon5 from "../../Images/app_development.svg";
import Icon6 from "../../Images/ui_ux_design.svg";
import Icon7 from "../../Images/product_design.svg";
import Icon8 from "../../Images/data_analyst.svg";

function Section3() {
  return (
    <div className="section3-content">
      <div className="section3-content1">
        <div className="content1-text">
          <h4>Our Servises</h4>
          <h2>
            See what can we do for your <br></br> Projects
          </h2>
        </div>
      </div>
      <div className="section3-icones">
        <div className="icons2">
          <div className="icons-div">
            <img src={Icon1}></img>
            <h5>Web Development</h5>
          </div>
          <div className="icons-div">
            <img src={Icon2}></img>
            <h5>Graphics Design</h5>
          </div>
        </div>
        <div className="icons2">
          <div className="icons-div">
            <img src={Icon3}></img>
            <h5>SEO & Marketing</h5>
          </div>
          <div className="icons-div">
            <img src={Icon4}></img>
            <h5>Customer Services</h5>
          </div>
        </div>
        <div className="icons2">
          <div className="icons-div">
            <img src={Icon5}></img>
            <h5>App Development</h5>
          </div>
          <div className="icons-div">
            <img src={Icon6}></img>
            <h5>UI/UX Design</h5>
          </div>
        </div>
        <div className="icons2">
          <div className="icons-div">
            <img src={Icon7}></img>
            <h5>Product Design</h5>
          </div>
          <div className="icons-div">
            <img src={Icon8}></img>
            <h5>Data Analyst</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section3;
