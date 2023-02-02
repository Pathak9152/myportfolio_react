import React from "react";
import "./experience.css";
import {BsPatchCheckFill} from'react-icons/bs'

const Experience = () => {
  return <section id="experiences">
    <h5>What skills I have</h5>
    <h2>Experience</h2>
    <div className="container experience_container">
      <div className="experience_frontend">
        <h3>Frontend Developent</h3>
        <div className="experience_content">
          <article className="experience_detail">
<BsPatchCheckFill className="experience_details-icon"/>
<div><h4>HTML</h4>
<small className="text-light">Experienced</small></div>
          </article>
          <article className="experience_detail">
<BsPatchCheckFill className="experience_details-icon"/>
<div><h4>CSS</h4>
<small className="text-light">Experienced</small></div>
          </article>
          <article className="experience_detail">
<BsPatchCheckFill className="experience_details-icon"/>
<div><h4>JavaScript</h4>
<small className="text-light">Experienced</small></div>
          </article>
          <article className="experience_detail">
<BsPatchCheckFill className="experience_details-icon"/>
<div><h4>TypeScript</h4>
<small className="text-light">Experienced</small></div>
          </article>
          <article className="experience_detail">
<BsPatchCheckFill className="experience_details-icon"/>
<div><h4>Angular</h4>
<small className="text-light">Experienced</small></div>
          </article>
          <article className="experience_detail">
<BsPatchCheckFill className="experience_details-icon"/>
<div><h4> React JS</h4>
<small className="text-light">Experienced</small></div>
          </article>
        </div>
      </div>
      <div className="experience_backend">
      <h3>Tech Stack</h3>
        <div className="experience_content">
          <article className="experience_detail">
<BsPatchCheckFill className="experience_details-icon"/>
<div><h4>AWS Cloud</h4>
<small className="text-light">Beginner</small></div>
          </article>
          <article className="experience_detail">
<BsPatchCheckFill className="experience_details-icon"/>
<div><h4>C Language</h4>
<small className="text-light">Intermediate</small></div>
          </article>
          <article className="experience_detail">
<BsPatchCheckFill className="experience_details-icon"/>
<div><h4>RESTful API's</h4>
<small className="text-light">Experienced</small></div>
          </article>
          <article className="experience_detail">
<BsPatchCheckFill className="experience_details-icon"/>
<div><h4>Testing</h4>
<small className="text-light">Experienced</small></div>
          </article>
          <article className="experience_detail">
<BsPatchCheckFill className="experience_details-icon"/>
<div><h4>POSTMAN</h4>
<small className="text-light">Experienced</small></div>
          </article>
          <article className="experience_detail">
<BsPatchCheckFill className="experience_details-icon"/>
<div><h4>Unit Testing</h4>
<small className="text-light">Experienced</small></div>
          </article>
        </div>
      </div>

    </div>
  </section>;
};

export default Experience;
