import React from "react";
import "./Section7.scss";
import "./Section7.responsive.scss";

function Section7() {
  return (
    <div className="section7-cont">
      <div className="stay">
        <h2>Stay in touch</h2>
        <p>
          Just say hello or drop us a line. You can manualy send us email on
          <a href="#"> example@mail.com </a>
        </p>
      </div>
      <form className="form-div">
        <div className="line1">
          <label htmlFor={"name"}>
            {" "}
            Name <br></br>
            <input
              className="form-input"
              type="text"
              placeholder="Enter Name.."
              id="name"
            ></input>
          </label>
          <label htmlFor={"email"}>
            {" "}
            Email <br></br>
            <input
              className="form-input"
              type="email"
              placeholder="Email address.."
              id="email"
            ></input>
          </label>
        </div>
        <div className="line2">
          <label htmlFor={"subject"}>
            {" "}
            Subject <br></br>
            <input
              className="form-input"
              type="text"
              placeholder="Subject.."
              id="subject"
            ></input>
          </label>
          <label htmlFor={"message"}>
            {" "}
            Message <br></br>
            <textarea
              className="form-input"
              placeholder="Enter message.."
              name="text"
              id="message"
            ></textarea>
          </label>

          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
export default Section7;
