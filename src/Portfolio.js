import * as React from "react";
import projectPic1 from "./portfolioIcons/img5.png";
import projectPic2 from "./portfolioIcons/img2.jpeg";
import projectPic3 from "./portfolioIcons/img1.png";
import projectPic4 from "./portfolioIcons/img6.png";
import projectPic5 from "./portfolioIcons/img7.png";

function Portfolio() {
  return (
    <body className="portfolioBody">
      <div className="headerPortContainer" id="Portfolio">
        <h2>Portfolio</h2>
      </div>
      <section className="boxes">
        <div className="container" id="portfolioContainer">
          {/* <div>
            {" "} */}
          {/* <h2>Portfolio</h2> */}

          <div className="box">
            <h3>Galleria Milena</h3>
            <br />
            <a href="https://github.com/sandritaa/galleriamilena">
              <img src={projectPic1} alt="" />
            </a>
            <br />
            <p>
              E-commerce web app for upcoming artists to showcase and sell their
              art, built using Flask, JS and SQLAlchemy
            </p>
          </div>

          <div className="box">
            <h3>travel planner</h3>
            <br />
            <a href="https://github.com/sandritaa/travel-app">
              <img src={projectPic2} alt="" />
            </a>
            <br />
            <p>
              Web app built using Express.js that dynamically renders a user’s
              trip information obtained from APIs called server side
            </p>
          </div>

          <div className="box">
            <h3>weather app</h3>
            <br />
            <a href="https://github.com/sandritaa/weather-journal-app">
              <img src={projectPic3} alt="" />
            </a>
            <br />
            <p>
              Created an asynchronous web app that uses Web API and user data to
              dynamically update the UI in the weather app
            </p>
          </div>
          <div className="box">
            <h3>MadalArt</h3>
            <br />
            <a href="https://github.com/sandritaa/shirinart">
              <img src={projectPic5} alt="" />
            </a>
            <br />
            <p>
              MadalasArt is a web application that allows for an artist to
              showcase and sell their artwork
            </p>
          </div>
          <div className="box">
            <h3>Milena's Atelier</h3>
            <br />
            <a href="https://github.com/sandritaa/milenasatelier">
              <img src={projectPic4} alt="" />
            </a>
            <br />
            <p>
              Web app built using React.js that walks users through my
              professional and educational journey
            </p>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Portfolio;
