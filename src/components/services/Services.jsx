import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
        <h2>What I Offer</h2>
        <h5>Services</h5>
    <div className="container services_container">
        <article className="service">
        <div className="service_head">
    <h3>Web Applications</h3>
</div>

    <ul className='service_list'>
        <li>
            <BiCheck/>
            <p>Development of cutting edge Web Applications</p>
        </li>
        <li>
        <BiCheck/>
            <p>Writing and reviewing code for sites, typically HTML, XML, or JavaScript</p>
        </li>
        <li> 
        <BiCheck/>
            <p>Troubleshooting problems with performance or user experience</p>
            <br/>

        </li>
    </ul>
        </article>
        <article className="service">
        <div className="service_head">
    <h3>Responsive Web Design</h3>
</div>

    <ul className='service_list'>
        <li>
            <BiCheck/>
            <p>Responsive designs adaptable to all kind of devices</p>
        </li>
        <li>
        <BiCheck/>
            <p>User centred view od development</p>
        </li>
        <li> 
        <BiCheck/>
            <p>Continuous upgradations for existing systems 
                <br/>
                <br/>
                <br/>

            </p>
        </li>
    </ul>
        </article>
        <article className="service">
        <div className="service_head">
    <h3>Angular Development</h3>
</div>

    <ul className='service_list'>
        <li>
            <BiCheck/>
            <p>Design and implement visually aesthetic user interfaces</p>
        </li>
        <li>
        <BiCheck/>
            <p>Work in an Agile team process, collaborating closely with fellow developers</p>
        </li>
        <li> 
        <BiCheck/>
            <p>Debugging and Fixes existing Codes</p>
        </li>
    </ul>
        </article>
    </div>
    </section>
  )
}

export default Services