import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: "60%" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12 }}
        sx={{
          height: 200,
        }}
      >
        <Grid item xs={3}>
          <Item>project 1</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>project 2</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>project 3</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>project 4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
