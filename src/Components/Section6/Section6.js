import React from "react";
import "./Section6.scss";
import "./Section6.responsive.scss";
import { useState, useEffect, useRef } from "react";
import PersonImage1 from "../../Images/person_1.jpg";
import PersonImage2 from "../../Images/person_2.jpg";
import PersonImage3 from "../../Images/person_3.jpg";
import PersonImage4 from "../../Images/person_2.jpg";
import PersonImage5 from "../../Images/person_1.jpg";
import PersonImage6 from "../../Images/person_3.jpg";

function Section6() {
  const sliderCont = useRef();
  const buttonCont1 = useRef();
  const buttonCont2 = useRef();
  
  
  function change1() {
    sliderCont.current.style = "transform:translate(0)";
    buttonCont1.current.style.backgroundColor = "#4b74fe";
    buttonCont2.current.style.backgroundColor = ""
    
    
  }
  function change2() {
    sliderCont.current.style = "transform:translate(-50%)";
    buttonCont2.current.style.backgroundColor = "#4b74fe";
    buttonCont1.current.style.backgroundColor = ""
    
  }
  return (
    <div className="section6-content">
      <div className="section6-content1">
        <div className="slider-content" ref={sliderCont}>
          <div className="sliders-item">
            <div className="text2-div">
              <div className="slider-text1">
                <p>
                  The quick, brown fox jumps over a lazy dog. DJs flock by when
                  MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds
                  jog, flick quartz, vex nymphs. Waltz, bad nymph
                </p>
              </div>
              <div className="slider-icon1">
                <img src={PersonImage1} alt="pic"></img>
                <h5>
                  Sam Watson <br></br>
                  <span>CEO - Mosh Elite Ltd.</span>
                </h5>
              </div>
            </div>
            <div className="text2-div">
              <div className="slider-text1">
                <p>
                  The quick, brown fox jumps over a lazy dog. DJs flock by when
                  MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds
                  jog, flick quartz, vex nymphs. Waltz, bad nymph
                </p>
              </div>
              <div className="slider-icon1">
                <img src={PersonImage2} alt="pic"></img>
                <h5>
                  Edinson Alfa <br></br>
                  <span>CEO - Mosh Elite Ltd.</span>
                </h5>
              </div>
            </div>
            <div className="text2-div">
              <div className="slider-text1">
                <p>
                  The quick, brown fox jumps over a lazy dog. DJs flock by when
                  MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds
                  jog, flick quartz, vex nymphs. Waltz, bad nymph
                </p>
              </div>
              <div className="slider-icon1">
                <img src={PersonImage3} alt="pic"></img>
                <h5>
                  May Halloway<br></br>
                  <span>CEO - Mosh Elite Ltd.</span>
                </h5>
              </div>
            </div>
          </div>
          <div className="sliders-item">
            <div className="text2-div">
              <div className="slider-text1">
                <p>
                  The quick, brown fox jumps over a lazy dog. DJs flock by when
                  MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds
                  jog, flick quartz, vex nymphs. Waltz, bad nymph
                </p>
              </div>
              <div className="slider-icon1">
                <img src={PersonImage4} alt="pic"></img>
                <h5>
                  Edinson Alfa<br></br>
                  <span>CEO - Mosh Elite Ltd.</span>
                </h5>
              </div>
            </div>
            <div className="text2-div">
              <div className="slider-text1">
                <p>
                  The quick, brown fox jumps over a lazy dog. DJs flock by when
                  MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds
                  jog, flick quartz, vex nymphs. Waltz, bad nymph
                </p>
              </div>
              <div className="slider-icon1">
                <img src={PersonImage5} alt="pic"></img>
                <h5>
                  Sam Watson<br></br>
                  <span>CEO - Mosh Elite Ltd.</span>
                </h5>
              </div>
            </div>
            <div className="text2-div">
              <div className="slider-text1">
                <p>
                  The quick, brown fox jumps over a lazy dog. DJs flock by when
                  MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds
                  jog, flick quartz, vex nymphs. Waltz, bad nymph
                </p>
              </div>
              <div className="slider-icon1">
                <img src={PersonImage6} alt="pic"></img>
                <h5>
                  May Halloway<br></br>
                  <span>CEO - Mosh Elite Ltd.</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="button2-conts">
          <div
            className="button2-cont"
            onClick={change1}
            id="buttoncont1"
            ref={buttonCont1}
          ></div>
          <div
            className="button2-cont"
            onClick={change2}
            id="buttoncont2"
            ref={buttonCont2}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
