import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import "./Header.responsive.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
  useEffect(() => {
    const menuResponsive = document.querySelector(".menu-div");
    const listDiv = document.querySelector(".list-div");
    const headerDiv = document.querySelector(".header-div");
    const menuIcon = document.querySelector(".menu-icon");
   
    
    menuResponsive.addEventListener("click", () => {
      
      if (listDiv.style.display === "flex") {
        
        listDiv.style.display = "none";
        headerDiv.style.height = "";
        headerDiv.style.width = "";
      }else if(listDiv.style.display === "none"){
        listDiv.style.display = "flex";
        headerDiv.style.height = "320px";
        headerDiv.style.width = "100%";
      }
    });

      window.addEventListener("resize", () => {
        if (window.innerWidth > 1000) {
          listDiv.style.display = "flex";
          headerDiv.style.height = "";
        }
      });
    
  }, []);
  return (
    <div className="header-div">
      <div className="contact-div">
        <div className="info-div">
          <div className="mail-div">
            <FontAwesomeIcon className="info-icon" icon={faEnvelope} />
            <a className="info-link" href="contact@mail.com ">
              contact@mail.com
            </a>
          </div>
          <div className="number-div">
            <FontAwesomeIcon className="info-icon" icon={faPhone} />
            <a className="info-link" href=" +0011223495">
              +0011223495
            </a>
          </div>
        </div>
        <div className="social-div">
          <div className="f">
            <a href="#">
              <FontAwesomeIcon className="header-icon" icon={faFacebookF} />
            </a>
          </div>
          <div className="f">
            <a href="#">
              <FontAwesomeIcon className="header-icon" icon={faTwitter} />
            </a>
          </div>
          <div className="f">
            <a href="#">
              <FontAwesomeIcon className="header-icon" icon={faYoutube} />
            </a>
          </div>
          <div className="linkdin">
            <a href="#">
              <FontAwesomeIcon className="header-icon" icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
      <div className="nav-div">
        <Link className="link1" to={"/"}>
          <div className="logo-div">
            <h2>
              Reve<span>Tive.</span>
            </h2>
          </div>
        </Link>
        <div className="list-div">
          <Link className="link" to={"/"}>
            <div className="list-item" id="home">
              Home
            </div>
          </Link>
          <Link className="link" to={"/about"}>
            <div className="list-item" id="about">
              About
            </div>
          </Link>
          <Link className="link" to={"/services"}>
            <div className="list-item" id="servises">
              Services
            </div>
          </Link>

          <Link className="link" to={"/projects"}>
            <div className="list-item" id="projects">
              Projects
            </div>{" "}
          </Link>
          <Link className="link" to={"/contact"}>
            <div className="list-item" id="contact">
              Contact
            </div>{" "}
          </Link>
        </div>
        <div className="menu-div">
          <div className="menu-i">
            <FontAwesomeIcon className="menu-icon" icon={faBars} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
