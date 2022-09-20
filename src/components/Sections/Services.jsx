import React from "react";
import Service from "../Items/Service";

const servicesData = [
  {
    id: 1,
    name: "Web Development",
    content: "My speciality is crafting custom high-end Website designs driven by smart brand-centric and results-driven strategies.",
    icon: "icon-globe",
  },
  {
    id: 2,
    name: "Design",
    content: "My background in art and frontend design informs everything from concept to design to implementation.",
    icon: "icon-chemistry",
  },
  {
    id: 3,
    name: "Build",
    content: "With my design, i use the best and latest web thinking to make sure your site is a joy to use accross devices.",
    icon: "icon-directions",
  },
  {
    id: 4,
    name: "SEO",
    content: "Employing SEO features and technologies to improve and promote search to your site. I stay on top of the latest trends to keep our clients rank higher",
    icon: "icon-rocket",
  },
  {
    id: 5,
    name: "Network Management",
    content: "Assuring connectivity and security on current and new product features to ensure complete compliance with best practises.",
    icon: "icon-note",
  },
  {
    id: 6,
    name: "Launch & Management",
    content: "I will be with you at launch. My passion & dedication keeps me on your team long after with excellent aftercare.",
    icon: "icon-bubbles",
  },
];

function Services() {
  return (
    <div className="row -mt-20">
      {servicesData.map((service) => (
        <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
          <Service service={service} />
        </div>
      ))}
    </div>
  );
}

export default Services;
