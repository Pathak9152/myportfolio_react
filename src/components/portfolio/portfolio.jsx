import React from "react";
import "./portfolio.css";
import IMG from "../../assets/img.jpg";
import IMG2 from "../../assets/gym.jpg";
import IMG3 from "../../assets/mycalcii.png";
import IMG4 from "../../assets/soon.jpg";
import IMG5 from "../../assets/port.jpg";

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG} />
          </div>
          <h3>Guess my Number</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Pathak9152/guessmyNumber"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://guess-my-number120.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img className="gymimage" src={IMG2} />{" "}
          </div>
          <h3>Gymnasium Webpage</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Pathak9152/gymWebSite"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://pathak9152.github.io/gymWebSite/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} />{" "}
          </div>
          <h3>Calculator</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Pathak9152/calculator" className="btn">
              GitHub
            </a>
            <a
              href="https://pathak9152.github.io/calculator/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img className="portimage" src={IMG5} /> {/* <div>hii</div> */}
          </div>
          <h3>React Based PortFolio</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/pathak_9152" className="btn">
              GitHub
            </a>
            <a href="#" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} />{" "}
          </div>
          <h3>A blogging Website</h3>
          <div className="portfolio_item-cta">
            <a href="#/" className="btn-disable">
              GitHub
            </a>
            <a href="#/" className="btn btn-primary-disable">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} />{" "}
          </div>
          <h3>Easy Restauro..</h3>
          <div className="portfolio_item-cta">
            <a href="#/" className="btn-disable">
              GitHub
            </a>
            <a href="#/" className="btn btn-primary-disable" disabled>
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
export default portfolio;
