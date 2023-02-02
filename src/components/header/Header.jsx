import React from "react";
import CTA from "./CTA";
import profile from "../../assets/profile.jpg";
import HeaderSocials from "./header_socials";
import "./header.css";
import MEE from "../../assets/profile.jpg";


const Header = () => {
  return (
    <header>
      <div className="conatiner header_container">
        <h5>Hello I'm</h5>
        <h1>Navodit Pathak</h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTA />
        <HeaderSocials />
        <img className="me" img src={MEE} alt="me" /><div></div>
        <a href="#contacts" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
