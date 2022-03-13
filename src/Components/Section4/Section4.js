import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Section4.scss";
import "./Section4.responsive.scss";
import TimeImage1 from "../../Images/team_1.jpg";
import TimeImage2 from "../../Images/team_2.jpg";
import TimeImage3 from "../../Images/team_3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

function Section4() {
  const sliderCont = useRef();
  const buttonCont1 = useRef();
  const buttonCont2 = useRef();
  const buttonCont3 = useRef();
  
  
  useEffect(()=>{
   const section4Content2 = document.querySelector(".section4-content2")
   const section4Content3 = document.querySelector(".section4-content3")
    
   window.addEventListener("resize",()=>{
    if (window.innerWidth < 810) {
        section4Content3.style.display = "flex"
        section4Content2.style.display = "none"
    }else{
        section4Content2.style.display = "flex"
        section4Content3.style.display = "none"
    }

})
   if(window.innerWidth < 810){
      section4Content2.style.display = "none"
      section4Content3.style.display = "flex"
      sliderCont.current.style = "transform:translate(33.3%)"
      buttonCont1.current.style.backgroundColor = "#4b74fe";
   }else{
    section4Content2.style.display = "flex"
    section4Content3.style.display = "none"
   }

  },[])
  
  function change1() {
    sliderCont.current.style = "transform:translate(33.3%)";
    buttonCont1.current.style.backgroundColor = "#4b74fe";
    buttonCont2.current.style.backgroundColor = ""
    buttonCont3.current.style.backgroundColor = ""
    
    
  }
  function change2() {
    sliderCont.current.style = "transform:translate(0%)";
    buttonCont2.current.style.backgroundColor = "#4b74fe";
    buttonCont1.current.style.backgroundColor = ""
    buttonCont3.current.style.backgroundColor = ""
    
  }
  function change3() {
    sliderCont.current.style = "transform:translate(-33.3%)";
    buttonCont3.current.style.backgroundColor = "#4b74fe";
    buttonCont2.current.style.backgroundColor = ""
    buttonCont1.current.style.backgroundColor = ""
    
  }
  return (
    <div className="section4-content">
      <div className="section4-content1">
        <div className="content1-text">
          <h4>Our Teams</h4>
          <h2>
            The Expert Team on<br></br> ReveTive
          </h2>
        </div>
      </div>
      <div className="section4-content2">
        <div className="time-div1">
          <img src={TimeImage1} alt="pic"></img>
          <h2>Walter White</h2>
          <p>Chief exclusive officer</p>
          <div className="time-icone1">
            <FontAwesomeIcon className="t-icon1" icon={faFacebookMessenger} />
            <FontAwesomeIcon className="t-icon1" icon={faPhone} />
            <FontAwesomeIcon className="t-icon1" icon={faEnvelope} />
          </div>
        </div>
        <div className="time-div1">
          <img src={TimeImage2} alt="pic"></img>
          <h2>Sarah Johanson</h2>
          <p>Chief Technology Officer</p>
          <div className="time-icone1">
            <FontAwesomeIcon className="t-icon1" icon={faFacebookMessenger} />
            <FontAwesomeIcon className="t-icon1" icon={faPhone} />
            <FontAwesomeIcon className="t-icon1" icon={faEnvelope} />
          </div>
        </div>
        <div className="time-div1">
          <img src={TimeImage3} alt="pic"></img>
          <h2>Anna Anderson</h2>
          <p>Product Manager</p>
          <div className="time-icone1">
            <FontAwesomeIcon className="t-icon1" icon={faFacebookMessenger} />
            <FontAwesomeIcon className="t-icon1" icon={faPhone} />
            <FontAwesomeIcon className="t-icon1" icon={faEnvelope} />
          </div>
        </div>
      </div>
      <div className="section4-content3">
      <div className="slider-content1" ref={sliderCont}>
          <div className="sliders-item1">
          <div className="time-div1">
          <img src={TimeImage1} alt="pic"></img>
          <h2>Walter White</h2>
          <p>Chief exclusive officer</p>
          <div className="time-icone1">
            <FontAwesomeIcon className="t-icon1" icon={faFacebookMessenger} />
            <FontAwesomeIcon className="t-icon1" icon={faPhone} />
            <FontAwesomeIcon className="t-icon1" icon={faEnvelope} />
          </div>
        </div>
            </div>
            
          <div className="sliders-item1">
          <div className="time-div1">
          <img src={TimeImage2} alt="pic"></img>
          <h2>Sarah Johanson</h2>
          <p>Chief Technology Officer</p>
          <div className="time-icone1">
            <FontAwesomeIcon className="t-icon1" icon={faFacebookMessenger} />
            <FontAwesomeIcon className="t-icon1" icon={faPhone} />
            <FontAwesomeIcon className="t-icon1" icon={faEnvelope} />
          </div>
        </div>
            </div>
            <div className="sliders-item1">
            <div className="time-div1">
          <img src={TimeImage3} alt="pic"></img>
          <h2>Anna Anderson</h2>
          <p>Product Manager</p>
          <div className="time-icone1">
            <FontAwesomeIcon className="t-icon1" icon={faFacebookMessenger} />
            <FontAwesomeIcon className="t-icon1" icon={faPhone} />
            <FontAwesomeIcon className="t-icon1" icon={faEnvelope} />
          </div>
        </div>
            </div>
            </div>
        
        <div className="button3-conts">
          <div
            className="button3-cont"
            onClick={change1}
            id="buttoncont1"
            ref={buttonCont1}
          ></div>
          <div
            className="button3-cont"
            onClick={change2}
            id="buttoncont2"
            ref={buttonCont2}
          ></div>
          <div
            className="button3-cont"
            onClick={change3}
            id="buttoncont3"
            ref={buttonCont3}
          ></div>
          
        </div>
        
        </div>
    </div>
  );
}
export default Section4;
