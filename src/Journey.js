import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "./data";
import { educationData } from "./data";
import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";

const Journey = () => {
  return (
    <body>
      <section className="journeyHeader">
        <div className="container" id="journeyContainer">
          <div>
            <h2>Journey</h2>
          </div>

          <VerticalTimeline lineColor="black" iconStyle={{ color: "black" }}>
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
                  date={Data.Date}
                  iconStyle={{
                    background: "#ffffff",
                    color: "#000",
                    // background: "rgb(226, 217, 209)",
                    // color: "#fff",
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
                      <h3 className="workTitle-title">{Data.Title}</h3>
                      <h4 className="workCompany-subtitle">{Data.Company}</h4>
                      <h4 className="workLocation-subtitle">{Data.Location}</h4>

                      {/* <Typography variant="body2"> */}
                      <div className="workDescription0">
                        <p>{Data.Description}</p>
                        <p>{Data.Description1}</p>
                        <p>{Data.Description2}</p>
                        <p>{Data.Description3}</p>
                      </div>
                      {/* </Typography> */}
                    </Grid>
                  </Grid>
                </VerticalTimelineElement>
                // </div>
              );
            })}
            {educationData.map((edData) => {
              return (
                <VerticalTimelineElement
                  className="vertical-timeline-element--edu"
                  contentStyle={{
                    background: "rgb(250, 250, 250)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(97, 97, 97)",
                  }}
                  date={edData.Date}
                  iconStyle={{
                    background: "#ffffff",
                    color: "#000",

                    // background: "rgb(238, 224, 191)",
                    // color: "#fff",
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
                      <h3 className="edDegree-title">{edData.Degree}</h3>
                      <h4 className="edSchool-subtitle">{edData.School}</h4>
                      <h4 className="edLocation-subtitle">{edData.Location}</h4>
                      <h4 className="edkMajorHonors-subtitle">
                        {edData.Major} {edData.Honors}
                      </h4>
                      {/* <h4 className="vertical-timeline-element-subtitle">
                    {edData.Honors}
                  </h4> */}
                    </Grid>
                  </Grid>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
        <div></div>
        {/* </div> */}
      </section>
    </body>
  );
};

export default Journey;
