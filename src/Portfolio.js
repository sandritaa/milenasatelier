import * as React from "react";
import projectPic1 from "./portfolioIcons/img1.png";
import projectPic2 from "./portfolioIcons/img2.jpeg";
import projectPic3 from "./portfolioIcons/img3.png";

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
            <h3>weather app</h3>
            <br />
            <a href="https://github.com/sandritaa/weather-journal-app">
              <img src={projectPic1} alt="" />
            </a>
            <br />
            <p>
              Created an asynchronous web app that uses Web API and user data to
              dynamically update the UI in the weather app
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
              Built an app that obtains trip location and date from the user,
              and displays weather and an image of location using external APIs
            </p>
          </div>

          <div className="box">
            <h3>redsol</h3>
            <br />
            <a href="https://github.com/sandritaa/redsol-app">
              <img src={projectPic3} alt="" />
            </a>
            <br />
            <p>
              Front-end of the web app using Vue.js, collect user input
              information and exchange the data with the back-end
            </p>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Portfolio;
