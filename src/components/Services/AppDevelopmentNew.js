import React, { useEffect } from 'react'
import '../../css/AppDevelopmentNew.css'
import LazyImage from '../LazyImage';
import ClientLogohead from '../Home/ClientLogohead'
import { Link } from 'react-router-dom';
import ContactFrom from './ContactFrom';
import { Helmet } from 'react-helmet-async';
import * as visitorTracking from '../../services/visitorTracking';
import { FaCheck, FaMobile, FaLaptopCode, FaPalette, FaComments, FaTools, FaRocket } from 'react-icons/fa';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const AppDevelopmentNew = () => {
  const AppBanner = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599894/rio_main_website/qvbwvkzbmlyx522ukbrd.png"
  const ios = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599920/rio_main_website/ulbicjiqlub2xnn7xa6w.jpg"
  const consultion = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599893/rio_main_website/igs0zfbnpyqfbyavcpmt.jpg"
  const uiux = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599894/rio_main_website/nfp6e02lrwslt693wrdo.jpg"
  const support = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599894/rio_main_website/crpn1hzv2guwvyycctax.jpg"
  const ios2 = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599921/rio_main_website/qkiy2khgjbh9axbzs4yw.jpg"
  const AppBanner2 = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599893/rio_main_website/pocl8dnm0u6c6fcmwa2m.webp"
  const flutter = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599944/rio_main_website/exxurnfv3wvw6hri1z8e.png"
  const react = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599944/rio_main_website/mgkyhv0xh6upcqr9aerv.png"
  const python = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599944/rio_main_website/fuqnmoibpgeqljaqtgbq.png"
  const java = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599944/rio_main_website/ulfzsa1wkpkme1tfmix1.png"
  const nodejs = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599945/rio_main_website/w0jtplwsz0ygcham1guy.png"
  
  useEffect(() => {
    visitorTracking.trackServiceInterest('App Development');
  }, []);

  const services = [
    {
      icon: <FaMobile />,
      title: "Custom iOS & Android",
      description: "Native mobile applications tailored to your specific needs for both iOS and Android platforms",
      image: ios,
      link: "/our-service/app-development/custom-ios-android-app-development"
    },
    {
      icon: <FaLaptopCode />,
      title: "Cross-Platform Development",
      description: "Build once, deploy everywhere with React Native and Flutter frameworks",
      image: ios2,
      link: "/our-service/app-development/cross-plat-form-app-development"
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      description: "Captivating and intuitive interfaces that enhance user engagement",
      image: uiux,
      link: "/our-service/app-development/uiux-design"
    },
    {
      icon: <FaComments />,
      title: "Consulting & Prototyping",
      description: "Transform your idea into a viable app with expert guidance",
      image: consultion,
      link: "/our-service/app-development/consulting-prototyping"
    },
    {
      icon: <FaTools />,
      title: "Maintenance & Support",
      description: "Comprehensive post-launch support to keep your app stable and updated",
      image: support,
      link: "/our-service/app-development/maintenance-post-warranty-support"
    }
  ];

  const whyChooseUs = [
    { icon: <FaCheck />, title: "Expertise", text: "Seasoned developers with years of experience" },
    { icon: <FaCheck />, title: "Tailored Solutions", text: "Custom solutions aligned with your vision" },
    { icon: <FaCheck />, title: "Cutting-Edge Tech", text: "Latest technologies and frameworks" },
    { icon: <FaCheck />, title: "Agile Process", text: "Adaptive and efficient development" },
    { icon: <FaCheck />, title: "Client-Centric", text: "Your success is our priority" }
  ];

  const technologies = [
    { name: "Flutter", image: flutter },
    { name: "React Native", image: react },
    { name: "Python", image: python },
    { name: "Java", image: java },
    { name: "Node.js", image: nodejs }
  ];

  return (
    <div className="app-dev-container">
      <Helmet>
        <title>Mobile App Development Services | iOS & Android Apps | RioBizSols</title>
        <meta name="description" content="RioBizSols provides expert mobile app development services for iOS, Android, and cross-platform applications with custom design, development, and support." />
        <meta name="keywords" content="mobile app development, iOS app development, Android app development, custom app development, mobile application development, app consulting" />
        <link rel="canonical" href="https://riobizsols.com/our-service/app-development" />
      </Helmet>

      {/* Hero Section */}
      <section className="app-hero">
        <div className="app-hero-overlay"></div>
        <LazyImage className="app-hero-bg" src={AppBanner} alt="App Development" width={1200} height={600} />
        <div className="app-hero-content">
          <h1 className="app-hero-title">
            <span className="app-hero-subtitle">Innovative App Solutions</span>
            Meet Flawless Execution
          </h1>
          <p className="app-hero-description">
            Transform your vision into powerful mobile experiences
          </p>
          <Link to="/contact" className="app-hero-cta">
            Get Started <FaRocket />
          </Link>
        </div>
      </section>

      <ClientLogohead />

      {/* Why Choose Section */}
      <section className="app-why-choose">
        <div className="app-container">
          <h2 className="app-section-title">Why Choose App Development?</h2>
          <p className="app-section-description">
            Partnering with us means working with a trusted advisor committed to your success. 
            With our expertise and dedication, we unlock the full potential of your business.
          </p>
          <div className="app-why-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="app-why-card">
                <div className="app-why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="app-services">
        <div className="app-container">
          <h2 className="app-section-title">Our Services</h2>
          <div className="app-services-grid">
            {services.map((service, index) => (
              <div key={index} className="app-service-card">
                <div className="app-service-image-wrapper">
                  <LazyImage src={service.image} alt={service.title} width={400} height={300} className="app-service-image" />
                  <div className="app-service-icon-badge">{service.icon}</div>
                </div>
                <div className="app-service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to={service.link} className="app-service-link">
                    Learn More <ArrowCircleRightIcon />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="app-cta-banner">
        <div className="app-cta-overlay"></div>
        <LazyImage className="app-cta-bg" src={AppBanner2} alt="Let's Connect" width={1200} height={400} />
        <div className="app-cta-content">
          <h2>Here's How We Do It!</h2>
          <p>
            Our process begins with understanding your business goals. Whether you have existing code 
            or starting fresh, we've got you covered. Let us help you take your business to the next level 
            with a high-quality app that meets your needs.
          </p>
          <Link to="/contact" className="app-cta-button">
            Let's Connect <ArrowCircleRightIcon />
          </Link>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="app-technologies">
        <div className="app-container">
          <h2 className="app-section-title">Tools & Technologies</h2>
          <p className="app-section-description">
            We leverage the latest technologies to build powerful, scalable applications
          </p>
          <div className="app-tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="app-tech-card">
                <LazyImage src={tech.image} alt={tech.name} width={80} height={80} />
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="app-contact-section">
        <div className="contact-con">
          <div className="contact-h">Let's Discuss Your Project</div>
          <div className="contact-p">
            Contact us today to discuss your requirements and discover how we can help you 
            achieve your goals with an app that stands out in the crowded digital landscape.
          </div>
        </div>
        <ContactFrom />
      </section>
    </div>
  );
};

export default AppDevelopmentNew;
