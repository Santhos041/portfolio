import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                MERN Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                RVTech Learn
              </h4>
              <p>
              Hands-on experience with MERN stack during the internship. Developed proficiency
              in building scalable web applications, implementing RESTful APIs, and crafting dynamic user interfaces.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
              MERN Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Better Tomorrow
              </h4>
              <p>
                Experienced in MERN stack development, including authentication, APIs, role-based routing, and MongoDB
                optimization. Skilled in Express for backend and error handling.
              </p>
            </VerticalTimelineElement>
           
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
