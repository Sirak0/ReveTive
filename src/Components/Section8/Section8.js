import React from "react";
import "./Section8.scss";
import "./Section8.responsive.scss";
import ClientImage1 from "../../Images/airbnb.png";
import ClientImage2 from "../../Images/google.png";
import ClientImage3 from "../../Images/mailchimp.png";
import ClientImage4 from "../../Images/paypal.png";
import ClientImage5 from "../../Images/stripe.png";

function Section8(){
    return(
<div className="clients-div">
<div className="clients">
    <img src={ClientImage1} alt="pic"></img>
</div>
<div className="clients">
<img src={ClientImage2} alt="pic"></img>
</div>
<div className="clients">
<img src={ClientImage3} alt="pic"></img>
</div>
<div className="clients">
<img src={ClientImage4} alt="pic"></img>
</div>
<div className="clients">
<img src={ClientImage5} alt="pic"></img>
</div>
</div>
    )
}
export default Section8;