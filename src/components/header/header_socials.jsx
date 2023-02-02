import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const header_socials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/navodit-pathak/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/pathak_9152" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/pathak_9152/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default header_socials;
