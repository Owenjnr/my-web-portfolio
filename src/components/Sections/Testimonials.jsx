import React from "react";
import Slider from "react-slick";
import Testimonial from "../Items/Testimonial";

const testimonialsData = [
  {
    id: 1,
    content:
      "A dedicated individual that is ready to learn, with specialized experience in graphic design and bespoke web design. He has very good understanding of client needs and has delivered great service.",
    authorImage: "images/primal.png",
    authorName: "Umar Bashir",
    authorStatus: "Director, Primal Aero",
  },
  {
    id: 2,
    content:
      "A creative and talented IT professional who developes software, web platforms & UI designs. He has completed projects including Flexedu webapp & Avcal website which were all delivered successfully.",
    authorImage: "images/avcal.png",
    authorName: "Nazif Isa",
    authorStatus: "Director, Avcal & Ribadu Colleges",
  },
  {
    id: 3,
    content:
      "He is an innovative and well-detailed web developer who has provided his services to KOANA since 2019 & we can say he is one of our most creative & capable web developer with excellent coding and unique design skills.",
    authorImage: "images/koana.png",
    authorName: "Idara Essien",
    authorStatus: "CEO, Koana Consulting",
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonials-wrapper">
      <Slider {...settings} className="padding-slider">
        {testimonialsData.map((testimonial) => (
          <Testimonial testimonial={testimonial} key={testimonial.id} />
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
