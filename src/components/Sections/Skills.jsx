import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    " I specialize in manipulating the very fabric of the web, its raw materials of HTML, CSS, JavaScript usually with jQuery. I also run Node.js-based workflow automation for web projects. My main server-side language is PHP, quite often paired with MySQL. I also use WordPress for client sites, depending on requirements.",
  progressData: [
    {
      id: 1,
      name: "Wordpress",
      percentage: 85,
    },
    {
      id: 2,
      name: "HTML & CSS",
      percentage: 90,
    },
    {
      id: 3,
      name: "javascript & Angular",
      percentage: 80,
    },
    {
      id: 4,
      name: "Networking",
      percentage: 90,
    },
  ],
};

function Skills() {
  return (
    <>
      <p className="mb-0">{skillData.skillContent}</p>
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.progressData.map((progress) => (
            <div className="col-md-6 mt-50" key={progress.id}>
              <TrackVisibility once>
                <Skill progress={progress} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
