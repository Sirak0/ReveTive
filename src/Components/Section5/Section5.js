import React from "react";
import "./Section5.scss";
import "./Section5.responsive.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Pimage1 from "../../Images/work-1.jpg";
import Pimage2 from "../../Images/work-2.jpg";
import Pimage3 from "../../Images/work-3.jpg";
import Pimage4 from "../../Images/work-4.jpg";
import Pimage5 from "../../Images/work-5.jpg";
import Pimage6 from "../../Images/work-6.jpg";

function Section5() {
  return (
    <div className="section5-content">
      <div className="section5-content1">
        <div className="section5-text">
          <h4>Portfolio</h4>
          <h2>Our Latest Projects</h2>
        </div>
        <button>
          Browse Projects{" "}
          <FontAwesomeIcon className="f-icon" icon={faArrowRight} />{" "}
        </button>
      </div>
      <div className="section5-content2">
        <div className="project-div">
          <img src={Pimage1} alt="pic"></img>
        </div>
        <div className="project-div">
          <img src={Pimage2} alt="pic"></img>
        </div>
        <div className="project-div">
          <img src={Pimage3} alt="pic"></img>
        </div>
        <div className="project-div">
          <img src={Pimage4} alt="pic"></img>
        </div>
        <div className="project-div">
          <img src={Pimage5} alt="pic"></img>
        </div>
        <div className="project-div">
          <img src={Pimage6} alt="pic"></img>
        </div>
      </div>
    </div>
  );
}
export default Section5;
