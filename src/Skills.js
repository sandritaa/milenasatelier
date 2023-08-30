import * as React from "react";
// import skillsPic0 from "./skillsIcons/code.svg";
// import skillsPic1 from "./skillsIcons/communication.svg";
// import skillsPic2 from "./skillsIcons/sports.svg";
// import skillsPic3 from "./skillsIcons/strategy.svg";
// import skillsPic4 from "./skillsIcons/world.svg";

function Skills() {
  return (
    <body className="skillsBody">
      <div className="headerSkillsContainer" id="Skills">
        <h2>skills</h2>
      </div>
      <section className="boxSkills">
        <div className="container" id="skillsContainer">
          <div className="skillBox" id="skillBox1">
            <h3>software</h3>
            <br />
            {/* <img src={skillsPic0} alt="" /> */}
            <p>▪ Python</p>
            <p>▪ Javascript </p>
            <p>▪ HTML</p>
            <p>▪ CSS</p>
            <p>▪ SQL</p>
            <p>▪ SQLAlchemy</p>
            <p>▪ Flask</p>
            <p>▪ React.js </p>
            <p>▪ Vue.js</p>
            <p>▪ Git</p>
          </div>

          <div className="skillBox" id="skillBox2">
            <h3>soft skills</h3>

            {/* <img src={skillsPic3} alt="" /> */}
            <br />
            <p>▪ Lateral Thinking</p>
            <p>▪ Detail Oriented</p>
            <p>▪ Team Player</p>
            <p>▪ Multitasking </p>
            <p>▪ Time Management </p>
            <p>▪ Organization </p>
            <p>▪ Communciation </p>
          </div>

          <div className="skillBox" id="skillBox3">
            <h3>Tools</h3>
            {/* <img src={skillsPic4} alt="" /> */}
            <br />
            <p>▪ Figma </p>
            <p>▪ Github</p>
            <p>▪ Trello</p>
            <p>▪ Jira</p>
            <p>▪ Shopify</p>
            <p>▪ ECVision</p>
            <p>▪ Joor</p>
            <p>▪ Microsoft Office</p>
          </div>

          <div className="skillBox" id="skillBox4">
            <h3>languages</h3>

            {/* <img src={skillsPic4} alt="" /> */}
            <br />
            <p>▪ English - Native</p>
            <p>▪ Spanish - Native</p>
            <p>▪ Italian - Intermediate</p>
          </div>

          <div className="skillBox" id="skillBox5">
            <h3>after hours</h3>

            {/* <img src={skillsPic2} alt="" /> */}
            <br />
            <p>▪ Mountain Biking </p>
            <p>▪ Traveling</p>
            <p>▪ Skiing</p>
            <p>▪ Cooking</p>
            <p>▪ Rock climbing</p>
            <p>▪ Dancing</p>
            <p>▪ Painting </p>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Skills;
