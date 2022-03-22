import * as React from "react";
import projectPic1 from "./portfolioIcons/img1.png";
import projectPic2 from "./portfolioIcons/img2.jpeg";
import projectPic3 from "./portfolioIcons/img3.png";

function Skills() {
  return (
    <body className="skillsBody">
      <div className="headerSkillsContainer" id="Skills">
        <h2>skills</h2>
      </div>
      <section className="boxSkills">
        <div className="container" id="skillsContainer">
          {/* <div>
            {" "} */}
          {/* <h2>Portfolio</h2> */}
          <div className="skillBox">
            <br />
            <img src={projectPic1} alt="" />
            <br />
          </div>

          <div className="skillBox">
            <br />
            <img src={projectPic2} alt="" />
            <br />
          </div>
          <div className="skillBox">
            <br />
            <img src={projectPic3} alt="" />
            <br />
          </div>
        </div>
      </section>
    </body>
  );
}

export default Skills;
