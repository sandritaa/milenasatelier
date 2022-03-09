import * as React from "react";
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
    <body>
      {/* <div>
        <h2>Portfolio</h2>
      </div> */}
      <section className="boxes">
        <div className="container" id="portfolioContainer">
          <div>
            <h2>Portfolio</h2>

            <div className="box">
              <h3>project1</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
                porro assumenda voluptas labore, nam nulla architecto in quaerat
                ex sequi.
              </p>
            </div>
            <div className="box">
              <h3>project2</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
                porro assumenda voluptas labore, nam nulla architecto in quaerat
                ex sequi.
              </p>
            </div>
            <div className="box">
              <h3>project3</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
                porro assumenda voluptas labore, nam nulla architecto in quaerat
                ex sequi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Portfolio;
