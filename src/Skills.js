import * as React from "react";
import skillsPic0 from "./skillsIcons/code.svg";
// import skillsPic1 from "./skillsIcons/communication.svg";
import skillsPic2 from "./skillsIcons/sports.svg";
import skillsPic3 from "./skillsIcons/strategy.svg";
import skillsPic4 from "./skillsIcons/world.png";

function Skills() {
  return (
    <body className="skillsBody">
      <div className="headerSkillsContainer" id="Skills">
        <h2>skills</h2>
      </div>
      <section className="boxSkills">
        <div className="container" id="skillsContainer">
          <div className="skillBox">
            <h3>creative direction</h3>
            <br />
            <img src={skillsPic3} alt="" />
            <br />
            <p>
              Created an asynchronous web app that uses Web API and user data to
              dynamically update the UI in the weather app
            </p>
          </div>

          <div className="skillBox">
            <h3>software developmet languages</h3>
            <br />
            <img src={skillsPic0} alt="" />
            <br />
            <p>
              Created an asynchronous web app that uses Web API and user data to
              dynamically update the UI in the weather app
            </p>
          </div>

          <div className="skillBox">
            <h3>languages</h3>
            <br />
            <img src={skillsPic4} alt="" />
            <br />
            <p>
              Created an asynchronous web app that uses Web API and user data to
              dynamically update the UI in the weather app
            </p>
          </div>

          <div className="skillBox">
            <h3>after hours</h3>
            <br />
            <img src={skillsPic2} alt="" />
            <br />
            <p>
              Created an asynchronous web app that uses Web API and user data to
              dynamically update the UI in the weather app
            </p>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Skills;
