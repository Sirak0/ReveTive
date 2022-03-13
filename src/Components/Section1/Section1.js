import React from "react";
import "./Section1.scss";
import "./Section1.responsive.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import Image1 from "../../Images/bg_image_1.jpg";
import Image2 from "../../Images/bg_image_2.jpg";
import Image3 from "../../Images/bg_image_3.jpg";

function Section1() {
  const [order, setOrder] = useState(1);
  const sliderStatus = useRef(false)
  const sliderCont = useRef();
  const buttonCont1 = useRef();
  const buttonCont2 = useRef();
  const buttonCont3 = useRef();

  function previous(){
     if(sliderStatus.current){
       return;
     }
     else{
       setOrder(order - 1)
     }
  }
  function next() {
    if(sliderStatus.current){
      return;
    }
    else{
      setOrder(order + 1);
    }
   
  }
  function change1() {
    sliderCont.current.style = "transform:translate(0)";
    buttonCont1.current.style.backgroundColor = "#4b74fe"
    buttonCont2.current.style.backgroundColor = ""
    buttonCont3.current.style.backgroundColor = ""
  }
  function change2() {
    sliderCont.current.style = "transform:translate(-33.3%)";
    buttonCont1.current.style.backgroundColor = ""
    buttonCont2.current.style.backgroundColor = "#4b74fe"
    buttonCont3.current.style.backgroundColor = ""
  }
  function change3() {
    sliderCont.current.style = "transform:translate(-66.6%)";
    buttonCont1.current.style.backgroundColor = ""
    buttonCont2.current.style.backgroundColor = ""
    buttonCont3.current.style.backgroundColor = "#4b74fe"
  }

  useEffect(() => {
    const button1 = document.querySelector("#buttoncont1");
    const button2 = document.querySelector("#buttoncont2");
    const button3 = document.querySelector("#buttoncont3");

    if (order === 1) {
      sliderCont.current.style = "transform:translate(0)";
      button1.style.backgroundColor = "#4b74fe";
      sliderStatus.current = true
      setTimeout(() => {
          sliderStatus.current = false
      },1000)
    } else {
      button1.style.backgroundColor = "";
    }
    if (order === 2) {
      sliderCont.current.style = "transform:translate(-33.3%)";
      button2.style.backgroundColor = "#4b74fe";
      sliderStatus.current = true
      setTimeout(() => {
          sliderStatus.current = false
      },1000)
    } else {
      button2.style.backgroundColor = "";
    }
    if (order === 3) {
      sliderCont.current.style = "transform:translate(-66.6%)";
      button3.style.backgroundColor = "#4b74fe";
      sliderStatus.current = true
      setTimeout(() => {
          sliderStatus.current = false
      },1000)
    } else {
      button3.style.backgroundColor = "";
    }

    if (order === 4) {
      setOrder(1);
    }
    if (order === 0) {
      setOrder(3);
    }
  }, [order]);

  return (
    <div className="content">
      <div className="content1">
        <div className="slider-cont" ref={sliderCont}>
          <div className="slider-item">
            <img className="image" src={Image1} alt="nkar"></img>
            <div className="text1-div">
              <p> We're design studio believe in ideas</p>
              <h1>Creative Design</h1>
              <button>Get Started</button>
            </div>
          </div>
          <div className="slider-item">
            <img className="image" src={Image2} alt="nkar"></img>
            <div className="text1-div">
              <h1 class="mb-4">We combine Design, Thinking, and Technical</h1>
              <div className="butt-div">
                <button>Get Started</button>
                <button className="butt2">See Pricing</button>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <img className="image" src={Image3} alt="nkar"></img>
            <div className="text1-div">
              <p> Easy way to build perfect website</p>
              <h1>Beautify handcrafted templates for your website</h1>
              <button className="butt2">Get Started</button>
            </div>
          </div>
        </div>
        <div className="button1-conts">
          <div
            className="button1-cont"
            onClick={change1}
            id="buttoncont1"
            ref={buttonCont1}
          ></div>
          <div
            className="button1-cont"
            onClick={change2}
            id="buttoncont2"
            ref={buttonCont2}
          ></div>
          <div
            className="button1-cont"
            onClick={change3}
            id="buttoncont3"
            ref={buttonCont3}
          ></div>
        </div>
        <div className="button-conts">
          <div className="button-cont" id="previous" onClick={previous}>
            <FontAwesomeIcon className="slider-icon" icon={faAngleLeft} />
          </div>
          <div className="button-cont" id="next" onClick={next}>
            <FontAwesomeIcon className="slider-icon" icon={faAngleRight} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section1;
