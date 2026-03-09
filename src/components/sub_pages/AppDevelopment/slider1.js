import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import slider1 from '../../../assets/images/discover.jpg';
import slider2 from '../../../assets/images/design.jpg';
import slider3 from '../../../assets/images/development.jpg';
import slider4 from '../../../assets/images/deploy_maint.jpg';
import '../../../css/slider-app.css';

const slidesData = [
  {
    image: slider1,
    title: "Discovery & Planning",
    description: "Understand your business needs and objectives. Define the project scope and technical requirements. Create a detailed roadmap and timeline.              ",
  },
  {
    image: slider2,
    title: "Design",
    description: "Craft intuitive and engaging UI/UX designs. Ensure responsive and adaptive designs for all devices. ",
  },
  {
    image: slider3,
    title: "Development",
    description: "Write clean, maintainable, and scalable code. Integrate backend services and APIs. Conduct rigorous testing to ensure bug-free performance.",
  },
  {
    image: slider4,
    title: "Deployment & Maintenance",
    description: "Deploy your app to various app stores. Provide ongoing support and updates. Monitor performance and user feedback for continuous improvement.",
  },
 
];

const ThreeDCarousel1 = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const NextArrow = ({ onClick }) => (
    <div className='arrow next' onClick={onClick}>
      <FaArrowRight />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className='arrow prev' onClick={onClick}>
      <FaArrowLeft />
    </div>
  );

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: slidesToShow === 1 ? false : true, // Disable center mode on mobile
    centerPadding: slidesToShow === 1 ? "0px" : "0", // Remove padding on mobile
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.image} alt={slide.title} className="carousel-image" />
            <div className="carousel-overlay">
              <h2 className="carousel-title">{slide.title}</h2>
              <p className="carousel-description">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ThreeDCarousel1;
