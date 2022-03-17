import * as React from "react";
import projectPic1 from "./portfolioIcons/img1.png";
import projectPic2 from "./portfolioIcons/img2.jpeg";
import projectPic3 from "./portfolioIcons/img3.png";
// import projectPic4 from "./portfolioIcons/img0.png";
// import { styled } from "@mui/material/styles";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import project1 from "./portfolioIcons/img2.jpeg";
// import project2 from "./portfolioIcons/img0.png";
// import project3 from "./portfolioIcons/img4.png";
// import project4 from "./portfolioIcons/img3.png";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

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
            <img src={projectPic1} alt="" />
            <br />
            <p>
              Created an asynchronous web app that uses Web API and user data to
              dynamically update the UI in the weather app
            </p>
          </div>

          <div className="box">
            <h3>travel planner</h3>
            <br />
            <img src={projectPic2} alt="" />
            <br />
            <p>
              Built an app that obtains trip location & date from the user, and
              displays weather and an image of location using external APIs
            </p>
          </div>
          <div className="box">
            <h3>redsol</h3>
            <br />
            <img src={projectPic3} alt="" />
            <br />
            <p>
              Front-end of the web app using Vue.js, collect user input
              information and exchange the data with the back-end
            </p>
          </div>
          {/* <div className="box">
            <h3>delicias</h3>
            <br />
            <img src={projectPic4} alt="" />
            <br />
            <p>
              Cooking recipe website whose UI was designed using Figma and user
              experience feedback
            </p>
          </div> */}
        </div>
        {/* </div> */}
      </section>
    </body>
  );
}

export default Portfolio;
