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

const Journey = () => {
  return (
    <div className="Journey" id="Journey">
      <p>Journey</p>

      <VerticalTimeline>
        {experienceData.map((Data) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
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
                  <h2 className="vertical-timeline-element-title">
                    {Data.Title}
                  </h2>
                  <h4 className="vertical-timeline-element-title">
                    {Data.Company}
                  </h4>
                  <h4 className="vertical-timeline-element-subtitle">
                    {Data.Location}
                  </h4>

                  <Typography variant="body2">
                    <p>{Data.Description}</p>
                    <p>{Data.Description1}</p>
                    <p>{Data.Description2}</p>
                    <p>{Data.Description3}</p>
                  </Typography>
                </Grid>
              </Grid>
            </VerticalTimelineElement>
            // </div>
          );
        })}

        {educationData.map((edData) => {
          return (
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
                  <h2 className="vertical-timeline-element-title">
                    {edData.Degree}
                  </h2>
                  <h4 className="vertical-timeline-element-subtitle">
                    {edData.Major} {edData.Honors}
                  </h4>
                  {/* <h4 className="vertical-timeline-element-subtitle">
                    {edData.Honors}
                  </h4> */}
                  <h4 className="vertical-timeline-element-subtitle">
                    {edData.School}
                  </h4>
                  <h4 className="vertical-timeline-element-subtitle">
                    {edData.Location}
                  </h4>
                </Grid>
              </Grid>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <div></div>
    </div>
  );
};

export default Journey;
