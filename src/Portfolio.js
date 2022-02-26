import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import project1 from "./portfolioIcons/img2.jpeg";
import project2 from "./portfolioIcons/img0.png";
import project3 from "./portfolioIcons/img4.png";
import project4 from "./portfolioIcons/img3.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Portfolio() {
  return (
    <div className="Portfolio" id="Portfolio">
      <h2>Portfolio</h2>

      <Box sx={{ width: "60%", height: 200, margin: "auto" }}>
        <Grid
          // sx={{
          //   height: 200,
          // }}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 12 }}
        >
          <section>
            <Grid item xs={3}>
              <Item>
                <div className="item1">
                  <div className="pic1" id="pic1">
                    <img src={project1} alt="" />
                  </div>
                  <p>
                    antium quae perferendis quisquam? Exercitationem, non?
                    Reprehenderit, ad maxime! Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit.
                  </p>
                </div>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <div className="item2">
                  <div className="pic2" id="pic2">
                    <img src={project2} alt="" />
                  </div>
                  <p>
                    antium quae perferendis quisquam? Exercitationem, non?
                    Reprehenderit, ad maxime! Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit.
                  </p>
                </div>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <div className="item3">
                  <div className="pic3" id="pic3">
                    <img src={project3} alt="" />
                  </div>
                  <p>
                    antium quae perferendis quisquam? Exercitationem, non?
                    Reprehenderit, ad maxime! Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit.
                  </p>
                </div>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <div className="item4">
                  <div className="pic4" id="pic4">
                    <img src={project4} alt="" />
                  </div>
                  <p>
                    antium quae perferendis quisquam? Exercitationem, non?
                    Reprehenderit, ad maxime! Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit.
                  </p>
                </div>
              </Item>
            </Grid>
          </section>
        </Grid>
      </Box>
    </div>
  );
}

export default Portfolio;
