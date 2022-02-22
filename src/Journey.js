import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "./data";
import { educationData } from "./data";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import { styled } from "@mui/material/styles";

// const Img = styled("img")({
//   margin: "auto",
//   display: "block",
//   maxWidth: "100%",
//   maxHeight: "100%",
// });

const Journey = () => {
  // let dataInfo = { educationData };
  // console.log(dataInfo);
  // let dataInfo1 = { experienceData };
  // console.log(dataInfo1);

  return (
    <div className="Journey" id="Journey">
      <p>Journey</p>

      <VerticalTimeline>
        {experienceData.map((Data) => {
          return (
            // <div class="work">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                // background: "rgb(255, 255, 255)",
                background: "rgb(250, 250, 250)",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(97, 97, 97)",
              }}
              lineColor={"black"}
              date={Data.Date}
              iconStyle={{
                background: "rgb(226, 217, 209)",
                color: "#fff",
              }}
              icon={Data.Icon}
            >
              {/* <h3 className="vertical-timeline-element-title">
                  {Data.Title}
                </h3> */}

              {/* <h4 className="vertical-timeline-element-subtitle">
                  {Data.Location}
                </h4> */}
              {/* 
                <Paper
                  sx={{ p: 4, margin: "auto", maxWidth: 500, flexGrow: 1 }}
                > */}
              <Grid
                container
                spacing={1}
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 500,
                  flexGrow: 1,
                }}
              >
                {/* <Grid item xs={12} sm={12} md={12} container>
                    <Grid item xs container direction="column" spacing={2}> */}
                <Grid item>
                  <h3 className="vertical-timeline-element-title">
                    {Data.Title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {Data.Location}
                  </h4>

                  <Typography variant="body2">
                    <p>{Data.Description}</p>
                    <p>{Data.Description1}</p>
                    <p>{Data.Description2}</p>
                    <p>{Data.Description3}</p>
                  </Typography>
                  {/* <Img sx={{ width: 100 }} alt="image1" src={Data.Image} /> */}
                  {/* <Img sx={{ width: 100 }} alt="complex" src={myLogo} />
                    <Img sx={{ width: 100 }} alt="complex" src={myLogo} /> */}
                </Grid>
              </Grid>
              {/* </Grid>
                </Grid> */}
              {/* </Paper> */}

              {/* <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{
                    p: 2,
                    margin: "auto",
                    maxWidth: 500,
                    flexGrow: 1,
                  }}
                >
                  <Grid item xs={12} md={6}>
                    1{" "}
                  </Grid>
                  <Grid item xs={6}>
                    2{" "}
                  </Grid>
                  <Grid item xs={6}>
                    3{" "}
                  </Grid>
                  <Grid item xs={6}>
                    4{" "}
                  </Grid>
                </Grid> */}
              {/* <p>{Data.Description}</p>
                <p>{Data.Description1}</p>
                <p>{Data.Description2}</p>
                <p>{Data.Description3}</p> */}
            </VerticalTimelineElement>
            // </div>
          );
        })}

        {educationData.map((edData) => {
          return (
            // <div class="education">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(250, 250, 250)",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(97, 97, 97)",
              }}
              lineColor={"#000"}
              date={edData.Date}
              iconStyle={{
                background: "rgb(238, 224, 191)",
                color: "#fff",
              }}
              icon={edData.Icon}
            >
              <Grid
                container
                spacing={1}
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 500,
                  flexGrow: 1,
                }}
              >
                <Grid item>
                  <h3 className="vertical-timeline-element-title">
                    {edData.Degree}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {edData.Major}
                  </h4>
                  <h4 className="vertical-timeline-element-subtitle">
                    {edData.Honors}
                  </h4>
                  {/* <h2 className="vertical-timeline-element-title">
                      {edData.School}
                    </h2> */}
                  <h4 className="vertical-timeline-element-subtitle">
                    {edData.Location}
                  </h4>

                  {/* <Img sx={{ width: 100 }} alt="image1" src={edData.Image} /> */}
                </Grid>
              </Grid>
            </VerticalTimelineElement>
            // </div>
          );
        })}
      </VerticalTimeline>
      <div></div>
    </div>
  );
};

export default Journey;
