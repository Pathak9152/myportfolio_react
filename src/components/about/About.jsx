import React from "react";
import "./about.css";
import ME from "../../assets/profile.jpg";
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2> About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img alt="my image" src={ME} />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon"/>
              <h5>Experience</h5>
              <small>1.7  years of working </small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon"/>
              <h5>Currently</h5>
              <small>Project Engineer at WIPRO </small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon"/>
              <h5>Projects</h5>
              <small>10+ </small>
            </article>
           
          </div>
          <p>
              A Creative Web Developer , having good experience in creating cross platform Web Applications using 
              in-demand FrameWorks like - Angular , React JS .
              Exposure to all stages from planning , development to Deployment and its bug-Fixing to make
                Applications user centred .

            </p>
            <a href="#contacts" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
