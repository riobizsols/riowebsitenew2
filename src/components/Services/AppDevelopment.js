import React, { useEffect } from 'react'
import AppBanner from '../../assets/images/App-development.png'
import ios from '../../assets/images/iOS-Android-App-1.jpg'
import consultion from '../../assets/images/App-Consulting-Prototyping-1.jpg'
import uiux from '../../assets/images/App-UI-UX-1.jpg'
import support from '../../assets/images/Apps-supports-1.jpg'
import LazyImage from '../LazyImage';
import ios2 from '../../assets/images/iOS-Android-App-2.jpg'
import AppBanner2 from '../../assets/images/App-bg-img.webp'
import flutter from '../../assets/images/tools-1.png'
import react from '../../assets/images/tools-2.png'
import python from '../../assets/images/tools-3.png'
import java from '../../assets/images/tools-4.png'
import nodejs from '../../assets/images/tools-5.png'
import "../../css/AppDevelopment.css"
import ClientLogohead from '../Home/ClientLogohead'
import { FaAnglesRight } from "react-icons/fa6";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Link } from 'react-router-dom';
import ServiceContact from './ServiceContact'
import ContactFrom from './ContactFrom';
import { Helmet } from 'react-helmet';
import * as visitorTracking from '../../services/visitorTracking';


const AppDevelopment = () => {
  const AppBanner ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599894/rio_main_website/qvbwvkzbmlyx522ukbrd.png"
  
  useEffect(() => {
    visitorTracking.trackServiceInterest('App Development');
  }, []);
  const ios ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599920/rio_main_website/ulbicjiqlub2xnn7xa6w.jpg"
  const consultion ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599893/rio_main_website/igs0zfbnpyqfbyavcpmt.jpg"
  const uiux ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599894/rio_main_website/nfp6e02lrwslt693wrdo.jpg"
  const support ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599894/rio_main_website/crpn1hzv2guwvyycctax.jpg"
  const ios2 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599921/rio_main_website/qkiy2khgjbh9axbzs4yw.jpg"
  const AppBanner2 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599893/rio_main_website/pocl8dnm0u6c6fcmwa2m.webp"
  const flutter ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599944/rio_main_website/exxurnfv3wvw6hri1z8e.png"
  const react ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599944/rio_main_website/mgkyhv0xh6upcqr9aerv.png"
  const python ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599944/rio_main_website/fuqnmoibpgeqljaqtgbq.png"
  const java ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599944/rio_main_website/ulfzsa1wkpkme1tfmix1.png"
  const nodejs ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599945/rio_main_website/w0jtplwsz0ygcham1guy.png"
  return (
    <div>
      <Helmet>
        <title>Mobile App Development Services | iOS & Android Apps | RioBizSols</title>
        <meta name="description" content="RioBizSols provides expert mobile app development services for iOS, Android, and cross-platform applications with custom design, development, and support." />
        <meta name="keywords" content="mobile app development, iOS app development, Android app development, custom app development, mobile application development, app consulting" />
        <meta name="author" content="RioBizSols" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mobile App Development Services | iOS & Android Apps" />
        <meta property="og:description" content="Expert mobile app development for iOS, Android, and cross-platform solutions with UI/UX design and ongoing support." />
        <meta property="og:url" content="https://riobizsols.com/our-service/app-development" />
        <meta property="og:site_name" content="RioBizSols" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Mobile App Development Services | iOS & Android Apps" />
        <meta name="twitter:description" content="Custom mobile app development expertise using Flutter, React Native, Swift, Java, and more." />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://riobizsols.com/our-service/app-development" />
        
        {/* Schema.org Service Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "RioBizSols Mobile App Development",
            "description": "Professional mobile app development services",
            "provider": {
              "@type": "Organization",
              "name": "RioBizSols"
            },
            "areaServed": ["IN", "US", "GB"],
            "serviceType": [
              "iOS App Development",
              "Android App Development",
              "Cross-Platform Development",
              "App UI/UX Design",
              "App Consulting",
              "App Maintenance & Support"
            ]
          })}
        </script>
      </Helmet>
        <div className='app-banner'>
            <LazyImage className='app-img' src={AppBanner} alt="App Development" width={1200} height={500} />
            <h1 className='app-banner-title'> Where Innovative App Solutions Meet
            Flawless Execution</h1>
        </div>
        <ClientLogohead/>
        <hr className='b-line' />
        <div className="mid-content">
          <div className="app-head-line">
          Why choose an App Development Service?
          </div>
          <p className="head-con">
          Choosing an app development service is not just about building an app; it's about partnering with a trusted advisor who shares your vision and is committed to your success. With our expertise, efficiency, and dedication to excellence, we're confident that we can help you achieve your app development goals and unlock the full potential of your business.
          </p>
          <div className="app-container-hl">
          Here’s what we offer!
          </div>
          <div className="app-container" style={{alignItems:'flex-start'}}>
      <div className="app-image-section">
        <div className="app-image-box">
          <LazyImage src={ios} alt="iOS Android Apps" className="img-fluid" width={600} height={400} />
        </div>
      </div>

      <div className="app-text-section">
        <h2>Custom IOS & Android App Development</h2>
        <p>
          We specialize in crafting bespoke mobile applications tailored to your
          specific needs and objectives. Whether you require a native iOS app for
          the Apple ecosystem, an Android app for the vast Android user base, or
          both, our experts have the experience and skills to bring your vision to life.
        </p>
        <Link to='/our-service/app-development/custom-ios-android-app-development'>
        <button className="app-read-more-btn">READ MORE <ArrowCircleRightIcon/></button>
        </Link>
      </div>
    </div>
          <div className="app-container">
      <div className="app-image-section">
        <div className="app-image-box">
          <LazyImage src={ios2} alt="Cross-Platform Development" className="img-fluid" width={600} height={400} />
        </div>
      </div>

      <div className="app-text-section">
        <h2>Cross-Platform App Development</h2>
        <p>
        Reach a wider audience and maximize your investment with cross-platform app development. Our developers leverage frameworks like React Native and Flutter to build high-performance apps that run seamlessly on multiple platforms, saving you time and resources without compromising on quality or user experience.</p>
        <Link to='/our-service/app-development/cross-plat-form-app-development'>
        <button className="app-read-more-btn">READ MORE <ArrowCircleRightIcon/></button>
        </Link>
      </div>
    </div>
          <div className="app-container">
      <div className="app-image-section">
        <div className="app-image-box">
          <LazyImage src={uiux} alt="UI UX Design" className="img-fluid" width={600} height={400} />
        </div>
      </div>

      <div className="app-text-section">
        <h2>UI/UX Design</h2>
        <p>
        A captivating and intuitive user interface is essential for the success of any mobile app. Our UI/UX designers are masters at creating visually stunning interfaces and seamless navigation flows that enhance user engagement and drive conversions. From wireframing to prototyping to final design, we ensure that your app is well-optimized for usability and appeal.</p>
        <Link to='/our-service/app-development/uiux-design'>
        <button className="app-read-more-btn">READ MORE <ArrowCircleRightIcon/></button>
        </Link>
      </div>
    </div>
          <div className="app-container">
      <div className="app-image-section">
        <div className="app-image-box">
          <LazyImage src={consultion} alt="App Consulting" className="img-fluid" width={600} height={400} />
        </div>
      </div>

      <div className="app-text-section">
        <h2>Consulting & Prototyping</h2>
        <p>
        Transform your idea into a viable app with our consulting and prototyping services. Our experienced consultants will work closely with you to refine your concept, identify key features, and develop a roadmap for success.</p>
        <Link to='/our-service/app-development/consulting-prototyping'>
        <button className="app-read-more-btn">READ MORE <ArrowCircleRightIcon/></button>
        </Link>
      </div>
    </div>
      <div className="app-container" style={{alignItems:'flex-start'}}>
      <div className="app-image-section">
        <div className="app-image-box">
          <LazyImage src={support} alt="App Support" className="img-fluid" width={600} height={400} />
        </div>
      </div>

      <div className="app-text-section" >
        <h2>Maintenance & Post-Warranty Support</h2>
        <p>
        Launching your app is just the beginning of the journey. We also provide comprehensive maintenance and post-warranty support services to ensure that your app remains stable, secure, and up-to-date long after its initial release. From bug fixes to performance optimizations or feature enhancements, we are here to support you every step of the way. both, our experts have the experience and skills to bring your vision to life.
        </p>
        <Link to='/our-service/app-development/maintenance-post-warranty-support'>
        <button className="app-read-more-btn">READ MORE <ArrowCircleRightIcon/></button>
        </Link>
      </div>
    </div>
   </div>
   <div className="banner-2">
    <LazyImage className='banner-2-img' src={AppBanner2} alt="App Development Banner" width={1200} height={500} />
    <div className="banner-2-text">
      <div className="b-2-h">Here’s how we do!</div>
      <div className="b-2-l">Our app development process begins with understanding your business goals and problems. Whether you have existing code or not, we've got you covered. Our team takes over existing code, if any, and works with it, or creates a fresh plan to build an app from scratch. <span>Let us help you take your business to the next level with a high-quality app that meets your needs.</span></div>
      <Link to='/contact'>
        <button className="b-2-btn">LET'S CONNECT <ArrowCircleRightIcon/></button>
        </Link>
    </div>
   </div>
   <div className="stand">
    <div className="stand-h">
    What makes us stand apart?
    </div>
    <div className="stand-grid">
      <div className="expertise">
        <div className="expertise-h">
        <div className="stand-icon"><FaAnglesRight /></div>
        Expertise
      </div>
      <div className="expertise-con">
      Our team comprises seasoned developers, strategists, and designers with great expertise in their respective fields. We aim to bring years of collective experience and a passion for innovation to every project.
      </div>
      </div>
      <div className="expertise">
        <div className="expertise-h">
        <div className="stand-icon"><FaAnglesRight /></div>
        Tailored Solutions
      </div>
      <div className="expertise-con">
      We understand that every project is unique. That's why we take the time to listen to your requirements, analyze its goals, and craft custom solutions that align perfectly with your vision.      </div>
      </div>
      <div className="expertise">
        <div className="expertise-h">
        <div className="stand-icon"><FaAnglesRight /></div>
        Cutting-Edge Technology
      </div>
      <div className="expertise-con">
      We stay ahead of the curve by leveraging the latest technologies and frameworks. From native iOS and Android development to cross-platform solutions, we have the expertise to bring your app to life on any platform.      </div>
      </div>
      <div className="expertise">
        <div className="expertise-h">
        <div className="stand-icon"><FaAnglesRight /></div>
        Agile Development Process
      </div>
      <div className="expertise-con">
      Our agile development methodology allows us to adapt quickly to changing requirements and deliver results efficiently. We keep you involved at every step/stage of the process, ensuring utmost transparency.
      </div>
      </div>
      </div>
      <div className="expertise" id='expertise-last' >
        <div className="expertise-h">
          <div className="stand-icon"><FaAnglesRight /></div>
        Client-Centric Approach
      </div>
      <div className="expertise-con">
      At RIO, your satisfaction is our top priority. We prioritize a collaborative approach, responsiveness, and open communication, to ensure that your vision is brought to life exactly as you envision it. Your success is our success.
      </div>
      </div>
      <div className="tool-con" >
         Tools & Technologies
        <div className="tool-logo">
          <LazyImage src={flutter} alt="Flutter" width={100} height={100} />
          <LazyImage src={react} alt="React Native" width={100} height={100} />
          <LazyImage src={python} alt="Python" width={100} height={100} />
          <LazyImage src={java} alt="Java" width={100} height={100} />
          <LazyImage src={nodejs} alt="Node.js" width={100} height={100} />
        </div>
      </div>
      <div className="contact-con">
        <div className="contact-h">
        Let's Discuss Your Project
        </div>
        <div className="contact-p">
        Contact us today to discuss your project requirements and discover how we can help you achieve your goals. Together, we create an app that stands out in the crowded digital landscape and delivers exceptional value to your users.
        </div>
      </div>
      <ContactFrom/>
   </div>
  </div>
  )
}

export default AppDevelopment