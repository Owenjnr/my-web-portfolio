import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "February 2022 - June 2022",
    degree: "Lead Designer at Job Tailor, London",
    content:
      "Conceptualizing the website design product and assisting the development as well as providing guidance and facilitating suitable interventions to deliver best product versions.",
  },
  {
    id: 2,
    year: "September 2020 - December 2021",
    degree: "Masters Degree",
    content:
      "Graduated from the University of Sunderland with Masters in Cybersecurity: Knowledged and hands-on experience in Fundamentals & User Experience Design, Cyber Resilience, Incident Response, and Technology Management for Organizations.",
  },
  {
    id: 3,
    year: "October 2021 - December 2021",
    degree: "Front-end Developer at Eco-Global Solutions Ltd",
    content:
      "Design user profile elements and components for the Eco-Social App ",
  },
  {
    id: 4,
    year: "March 2020 -  September 2020",
    degree: "Web Developer at Koana Consulting",
    content:
      "Manage IT infrastructure and lead web development projects.",
  },
  {
    id: 5,
    year: "May 2017 - March 2020",
    degree: "Junior Web/Software Developer at HITCH: Flexfinity Media Ltd",
    content:
      "Revamping & developing client-side designs and solutions for the HITCH software project and handling external client web projects. ",
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
