import React from "react";
import CV from "../../assets/Navodit_Pathak_Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        {" "}
        Download CV{" "}
      </a>
      <a href="#contacts" className="btn btn-primary">
        Let's Connect
      </a>
    </div>
  );
};

export default CTA;
