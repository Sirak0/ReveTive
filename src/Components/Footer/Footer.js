import React from "react";
import "./Footer.scss";
import "./Footer.responsive.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-cont">
      <div className="footer-cont1">
        <div className="f-logo">
          <h2>
            Reve<span>Tive.</span>
          </h2>
        </div>
        <div className="f-contact">
          <h3>Contact Information</h3>
          <p>
            301 The Greenhouse, Custard<br></br> Factory, London, E2 8DY.
            <br></br>
            <br></br> Email: example@mail.com<br></br>
            <br></br> Phone: +00 112323980
          </p>
        </div>
        <div className="f-company">
          <h3>Company</h3>
          <a href="#"> Home</a>
          <a href="#">Career</a>
          <a href="">Resources</a>
        </div>
        <div className="f-news">
          <h3>Newsletter</h3>
          <input type="text" placeholder="Enter Your email"></input>
          <button>Submit</button>
        </div>
      </div>
      <div className="f-end">
        <div className="cop">
          <p class="copyright">© 2022 RevTiv. | Made By Sirak</p>
        </div>
        <div className="f-social">
          <div className="s">
            <a href="#">
              <FontAwesomeIcon className="footer-icon" icon={faFacebookF} />
            </a>
          </div>
          <div className="s">
            <a href="#">
              <FontAwesomeIcon className="footer-icon" icon={faTwitter} />
            </a>
          </div>
          <div className="s">
            <a href="#">
              <FontAwesomeIcon className="footer-icon" icon={faYoutube} />
            </a>
          </div>
          <div className="s">
            <a href="#">
              <FontAwesomeIcon className="footer-icon" icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
