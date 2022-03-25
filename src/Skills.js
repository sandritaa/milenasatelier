import * as React from "react";
import skillsPic0 from "./skillsIcons/code.svg";
// import skillsPic1 from "./skillsIcons/communication.svg";
import skillsPic2 from "./skillsIcons/sports.svg";
import skillsPic3 from "./skillsIcons/strategy.svg";
import skillsPic4 from "./skillsIcons/world.svg";

function Skills() {
  return (
    <body className="skillsBody">
      <div className="headerSkillsContainer" id="Skills">
        <h2>skills</h2>
      </div>
      <section className="boxSkills">
        <div className="container" id="skillsContainer">
          <div className="skillBox" id="skillBox1">
            <h3>creative direction</h3>
            <br />
            <img src={skillsPic3} alt="" />
            <br />
            <p>▪ Lateral Thinker</p>
            <p>▪ Detail Oriented</p>
            <p>▪ Team Player</p>
            <p>▪ Multitasker </p>
            <p>▪ Assertive Communicator </p>
          </div>

          <div className="skillBox" id="skillBox2">
            <h3>software</h3>
            <br />
            <img src={skillsPic0} alt="" />
            <br />
            <p>▪ Javascript </p>
            <p>▪ HTML</p>
            <p>▪ CSS</p>
            <p>▪ React.js </p>
            <p>▪ Vue.js</p>
            <p>▪ Figma </p>
          </div>

          <div className="skillBox" id="skillBox3">
            <h3>languages</h3>
            <br />
            <img src={skillsPic4} alt="" />
            <br />
            <p>▪ English </p>
            <p>▪ Spanish</p>
            <p>▪ Italian</p>
          </div>

          <div className="skillBox" id="skillBox3">
            <h3>other</h3>
            <br />
            <img src={skillsPic4} alt="" />
            <br />
            <p>▪ English </p>
            <p>▪ Spanish</p>
            <p>▪ Italian</p>
          </div>

          <div className="skillBox" id="skillBox4">
            <h3>after hours</h3>
            <br />
            <img src={skillsPic2} alt="" />
            <br />
            <p>▪ Mountain Biking </p>
            <p>▪ Skiing</p>
            <p>▪ Cooking</p>
            <p>▪ Dancing </p>
            <p>▪ Rock climbing</p>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Skills;
