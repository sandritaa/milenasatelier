import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "./data";
import { educationData } from "./data";
import Grid from "@mui/material/Grid";

// import myLogo from "./logo1.png";

const Journey = () => {
  // let dataInfo = { educationData };
  // console.log(dataInfo);
  // let dataInfo1 = { experienceData };
  // console.log(dataInfo1);

  return (
    <div className="Journey" id="Journey">
      <p>Journey</p>
      <div>
        <VerticalTimeline>
          {experienceData.map((Data) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(255, 255, 255)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                lineColor={"rgb(33, 150, 243)"}
                date={Data.Date}
                iconStyle={{
                  background: "rgb(255, 255, 255)",
                  color: "#fff",
                }}
                icon={Data.Icon}
              >
                <h3 className="vertical-timeline-element-title">
                  {Data.Title}
                </h3>

                <h4 className="vertical-timeline-element-subtitle">
                  {Data.Location}
                </h4>

                <p>{Data.Description}</p>
                <p>{Data.Description1}</p>
                <p>{Data.Description2}</p>
                <p>{Data.Description3}</p>
              </VerticalTimelineElement>
            );
          })}
          {educationData.map((edData) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(255, 255, 255)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                lineColor={"rgb(33, 150, 243)"}
                date={edData.Date}
                iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
                icon={edData.Icon}
              >
                <h2 className="vertical-timeline-element-title">
                  {edData.Degree}
                </h2>
                <h4 className="vertical-timeline-element-subtitle">
                  {edData.Major}
                </h4>
                <h4 className="vertical-timeline-element-subtitle">
                  {edData.Honors}
                </h4>
                <h2 className="vertical-timeline-element-title">
                  {edData.School}
                </h2>
                <h4 className="vertical-timeline-element-subtitle">
                  {edData.Location}
                </h4>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Journey;
