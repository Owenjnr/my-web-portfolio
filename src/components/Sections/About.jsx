import React from "react";
import { Link as ScrollLink } from "react-scroll";

const aboutData = {
  cvpath: "media/Emmanuel Owen - Web Developer.pdf",
  image: "images/logo1.png",
  name: "Emmanuel Owen",
  location: "Birmingham, UK",
  birthday: "vii-v-mcmxciv",
  email: "chuloowen@gmail.com",
  aboutMe:
    "I'm a web developer, passionate about delivering exceptional results and metrics and outperforming previous best-yet. I'm bi/multilingual and skilled at creating a unique customer experience that highlights brand message, improves click rates by driving customer experience and keeps current on technological trends. I also possess professional experience with Adobe Creative Suite (Photoshop, Illustrator, & AfterEffects) up to the latest versions. My passion for arts, filmmaking and music has allowed me to be more versatile. I collaborated on projects with Jam City, RestlessNatives, and NinjArt. I also featured with One-box films, UK in a recent film called - About me; coming soon!.",
};

function About() {
  return (
    <div className="row">
      <div className="col-md-3">
        <img src={aboutData.image} alt={aboutData.name} />
      </div>
      <div className="col-md-9">
        <h2 className="mt-4 mt-md-0 mb-4">Hello,</h2>
        <p className="mb-0">{aboutData.aboutMe}</p>
        <div className="row my-4">
          <div className="col-md-6">
            <p className="mb-2">
              Name: <span className="text-dark">{aboutData.name}</span>
            </p>
            <p className="mb-0">
              Birthday: <span className="text-dark">{aboutData.birthday}</span>
            </p>
          </div>
          <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
            <p className="mb-2">
              Location: <span className="text-dark">{aboutData.location}</span>
            </p>
            <p className="mb-0">
              Email: <span className="text-dark">{aboutData.email}</span>
            </p>
          </div>
        </div>
        <a href={aboutData.cvpath} className="btn btn-default mr-3">
          <i className="icon-cloud-download"></i>Download CV
        </a>
        <ScrollLink
          activeClass="active"
          to="section-contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-alt mt-2 mt-md-0 mt-xs-2"
        >
          <i className="icon-envelope"></i>Hire me 🤞🏾
        </ScrollLink>
      </div>
    </div>
  );
}

export default About;
