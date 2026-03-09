import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
// import slider1 from '../../../assets/images/Tailored-Solutions.jpg';
// import slider2 from '../../../assets/images/End-to-End-Service.jpg';
// import slider3 from '../../../assets/images/Expert-Developers.jpg';
// import slider4 from '../../../assets/images/User-Centric-Design.jpg';
// import slider5 from '../../../assets/images/Cutting-Edge-Technology.jpg';
import '../../../css/slider-app.css';

const slider1="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599941/rio_main_website/jxhitjs7vlbrkpngjbfy.jpg"
const slider2="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599909/rio_main_website/sjjf1pj0tvi5r2np7g4z.jpg"
const slider3="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599911/rio_main_website/ykxere3xbdxprrj4f1kd.jpg"
const slider4="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599948/rio_main_website/nplndszlbtvme9aytksh.jpg"
const slider5="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599904/rio_main_website/qswvp4qj4bgroi7q8tsc.jpg"
const slidesData = [
  {
    image: slider1,
    title: "Tailored Solutions",
    description: "We take the time to understand your unique requirements and create customized apps that align with your business goals.",
  },
  {
    image: slider2,
    title: "End-to-End Service",
    description: "From initial consultation and design to development, testing, and deployment, we offer a comprehensive service that covers all aspects of app development",
  },
  {
    image: slider3,
    title: "Expert Developers",
    description: "Our team comprises seasoned developers with extensive experience in both iOS and Android platforms.",
  },
  {
    image: slider4,
    title: "User-Centric Design",
    description: "Our design philosophy centers around providing an exceptional user experience, ensuring your app is both functional and intuitive.",
  },
  {
    image: slider5,
    title: "Cutting-Edge Technology",
    description: "We use the latest tools and technologies to ensure your app is future-proof and scalable.",
  },
];

const ThreeDCarousel = () => {
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

export default ThreeDCarousel;
