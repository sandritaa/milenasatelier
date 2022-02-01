import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "./data";
// import { educationData } from "./data";

const Journey = () => {
  // let dataInfo = { educationData };
  // console.log(dataInfo);
  // let dataInfo1 = { experienceData };
  // console.log(dataInfo1);

  return (
    <div className="Journey" id="Journey">
      <p>Journey</p>
      <div>
        {experienceData.map((Data) => {
          return (
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(255, 255, 255)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date={Data.Date}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  {Data.Title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {Data.Location}
                </h4>
                <p>{Data.Description}</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          );
        })}
      </div>
    </div>
  );
};

export default Journey;
