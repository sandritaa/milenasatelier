import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "./data";
import { educationData } from "./data";

const Journey = () => {
  let dataInfo = { educationData };
  console.log(dataInfo);
  let dataInfo1 = { experienceData };
  console.log(dataInfo1);

  return (
    <div className="Journey" id="Journey">
      <p>Journey</p>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>Hello</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Journey;
