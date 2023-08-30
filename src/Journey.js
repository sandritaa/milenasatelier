import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "./data";
import { educationData } from "./data";
import { certificateData } from "./data";

import Grid from "@mui/material/Grid";

const Journey = () => {
  return (
    <body className="journeyBody">
      <div className="headerJourneyContainer" id="Journey">
        {" "}
        <div>
          <h2>Journey</h2>
        </div>
      </div>

      <section className="journeyHeader">
        <div className="container" id="journeyContainer">
          <VerticalTimeline lineColor="black" iconStyle={{ color: "black" }}>
            {educationData.map((edData) => {
              return (
                <VerticalTimelineElement
                  className="vertical-timeline-element--edu"
                  contentStyle={{
                    background: "rgb(250, 250, 250)",
                    color: "#000",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(97, 97, 97)",
                  }}
                  dateClassName={"dateEdu"}
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
                      <h4 className="edkMajorHonors-subtitle">
                        {edData.Major} {edData.Honors}
                      </h4>
                      <h4 className="edLocation-subtitle">{edData.Location}</h4>
                    </Grid>
                  </Grid>
                </VerticalTimelineElement>
              );
            })}

            {/* <VerticalTimeline lineColor="black" iconStyle={{ color: "black" }}> */}
            {certificateData.map((certData) => {
              return (
                <VerticalTimelineElement
                  className="vertical-timeline-element--edu"
                  contentStyle={{
                    background: "rgb(250, 250, 250)",
                    color: "#000",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(97, 97, 97)",
                  }}
                  dateClassName={"dateCert"}
                  date={certificateData.Date}
                  iconStyle={{
                    background: "#ffffff",
                    color: "#000",
                  }}
                  icon={certificateData.Icon}
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
                      <h3 className="certDegree-title">
                        {certificateData.Degree}
                      </h3>
                      <h4 className="certSchool-subtitle">
                        {certificateData.School}
                      </h4>
                      <h4 className="certLocation-subtitle">
                        {certificateData.Location}
                      </h4>
                    </Grid>
                  </Grid>
                </VerticalTimelineElement>
              );
            })}

            {experienceData.map((Data) => {
              return (
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "rgb(250, 250, 250)",
                    color: "#000",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(97, 97, 97)",
                  }}
                  dateClassName={"dateWork"}
                  date={Data.Date}
                  iconStyle={{
                    background: "#ffffff",
                    color: "##000000",
                    // background: "rgb(22\\6, 217, 209)",
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
                        <p>{Data.Description4}</p>
                      </div>
                      {/* </Typography> */}
                    </Grid>
                  </Grid>
                </VerticalTimelineElement>
                // </div>
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
