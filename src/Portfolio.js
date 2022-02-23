import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import logo from "./pic.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: "60%", height: 200, margin: "auto" }}>
      <Grid
        // sx={{
        //   height: 200,
        // }}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12 }}
      >
        <Grid item xs={3}>
          <Item>
            <div className="pic1" id="pic1">
              <img src={logo} alt="" />
            </div>
            <p>
              antium quae perferendis quisquam? Exercitationem, non?
              Reprehenderit, ad maxime! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <div className="pic1" id="pic1">
              <img src={logo} alt="" />
            </div>
            <p>
              antium quae perferendis quisquam? Exercitationem, non?
              Reprehenderit, ad maxime! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <div className="pic1" id="pic1">
              <img src={logo} alt="" />
            </div>
            <p>
              antium quae perferendis quisquam? Exercitationem, non?
              Reprehenderit, ad maxime! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <div className="pic1" id="pic1">
              <img src={logo} alt="" />
            </div>
            <p>
              antium quae perferendis quisquam? Exercitationem, non?
              Reprehenderit, ad maxime! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
