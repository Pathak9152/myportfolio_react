import React from "react";
import './footer.css';
import { BsInstagram } from "react-icons/bs";
import { BsSnapchat } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="footer">
      <a href="/#" className="footer_logo">NAVODIT</a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiences">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Recommendations</a>
        </li>
        <li>
          <a href="#contacts">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/navodit.pathak.75" target="_blank"><FaFacebookF/></a>
        <a href="https://www.instagram.com/pathak_9152/" target="_blank"><BsInstagram/></a>
        <a href="https://www.snapchat.com/add/navoditp2021?share_id=yb5DHsSIRTyDXRh7QbjdNA&locale=en_IN" target="_blank"><BsSnapchat/></a>
      </div>
    </footer>
  );
};

export default Footer;
