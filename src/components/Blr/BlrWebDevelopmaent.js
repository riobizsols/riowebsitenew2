import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import ClientLogohead from '../Home/ClientLogohead'
import '../../css/WebDevelopment.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CiStar } from "react-icons/ci";
import { LiaMedalSolid } from "react-icons/lia";
import { BsEmojiSmile } from "react-icons/bs";
import { LuBadgeCheck } from "react-icons/lu";
import { FiArrowUpRight } from "react-icons/fi";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Link } from 'react-router-dom'
import ContactFrom from '../Services/ContactFrom'
import * as visitorTracking from '../../services/visitorTracking';

const BlrWebDevelopment = () => {
  const webbanner ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599949/rio_main_website/gxb11nk48zwwq3n9rlxb.jpg"
  const webbanner2 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599951/rio_main_website/yezvyawfuuwbcfw1ho8o.jpg"
  const ourteams ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599929/rio_main_website/yohvomyvgyvhwjhcgcn2.png"
  const people ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599929/rio_main_website/n4tozb4pxbah0gih8n7k.png"
  const seoicon ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599936/rio_main_website/fnng9ocmpgphe6df20ml.png"
  const lauch ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599924/rio_main_website/shj3zoabrp7ccon0mosk.png"
  const webdesigning ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599904/rio_main_website/mnxbgqyualfr5dlnihaw.png"
  
  useEffect(() => {
    visitorTracking.trackServiceInterest('Web Development - Bangalore');
  }, []);
  const html ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599952/rio_main_website/sogn5jed1uwa3lk8qucr.png"
  const reactjs ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599953/rio_main_website/r5cjhmcfhex9mprubrvj.jpg"
  const nodejs ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599952/rio_main_website/pu40creogcfvi9ekuaks.png"
  const flutter ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599951/rio_main_website/sz0oqavj0uxvrcnymxzy.png"
  const shopify ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599953/rio_main_website/fldnk9pav6zvujgguhrc.png"
  const wordpress ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599954/rio_main_website/lpomsksq7wcbujxlqkz0.png"
  const contractual="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599950/rio_main_website/tolkkmjnrafdpicamrgt.png"
  const planning ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599952/rio_main_website/e9ggappkroydq4xfumzf.png"
  const proto="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599952/rio_main_website/meiesqjm03cpono8kkmy.png"
  const dev ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599951/rio_main_website/ocwq0kievfnsgh5ob1c2.png"
  const test="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599953/rio_main_website/vtazjfpf557yxmy8adsj.png"
const maintenance ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599926/rio_main_website/c8ildho1fh289494czpx.png"
const uiux ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599946/rio_main_website/iw5i9lvnwh0cyex5yxcy.png"
const webdeve ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599950/rio_main_website/kt4ooro1t8fqu5z0bkyf.png"
  const host ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599917/rio_main_website/eel2ellb4p5m0lziiyav.png"
  const webanalytics ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599949/rio_main_website/t20lufcp79sxtr8ruoa8.png"




  // Slider settings for infinite loop
  const settings = {
    dots: false,
    infinite: true,  // Enables infinite looping
    speed: 2000,
    slidesToShow: 2,  // Number of slides to show at once
    slidesToScroll: 1,
    autoplay: true,   // Enables automatic sliding
    autoplaySpeed: 4000, // Speed for auto sliding
    pauseOnHover: true,
  };

  return (
    <div>
      <Helmet>
        <title>Best Website Development & Design Services in Bangalore  </title>
        <meta name="description" content="Find top web development and design companies in Bangalore. Get custom websites built by expert developers and designers for your business." />
        <meta name="keywords" content="website development company bangalore, web designing company in bangalore, website developers in bangalore, website design company in bangalore, website development in bangalore, web development bangalore, bangalore website developers, website builders in bangalore, website design bangalore, web designers in bangalore"/>
      </Helmet>
        <div className='web-banner'>
            <img className='web-img' src={webbanner} alt="webbanner" />
            <div className="w-t-con">
            <div className='web-banner-title-1'>Vision into Reality With</div>
            <div className='web-banner-title-2'>Custom Web</div>
            <div className='web-banner-title-3'>Development</div>
            <Link  to='/contact'>
            <div className="web-but">
             Contact Us
             </div></Link>
            </div>
            </div>
            <ClientLogohead/>
            <hr className='b-line' />
    <div className="web-container">
      <div className="web-content">
        <h1 className='web-head'>
          Take your business to new heights with professional
          <span className="highlight">Web Development Services!</span>
        </h1>
        <p className='web-phara'>
        Having a strong online presence is important in today’s digital landscape. Effective online advertising, social media management, and search engine optimization can drive growth 10 times. Moreover, it helps engage with customers, reach new audiences, and increase revenue.
        </p>
        <p className='web-phara-1'>
        All this is only possible by building a strong digital marketing strategy. With the right tools, services, and certified digital marketers, like the ones offered at RIO, you can streamline and enhance your online business’s online presence and target the market effortlessly. Whether you need <strong> a website development company in Bangalore, web designing company in Bangalore, website developers in Bangalore, website design company in Bangalore we got you covered.</strong></p>
        <div className="features">
          <div className="feature"><div className='CiStar'><CiStar /></div>No Patchwork of Design</div>
          <div className="feature"><div className='LiaMedalSolid'><LiaMedalSolid /></div>Complete Visibility</div>
          <div className="feature"><div className='BsEmojiSmile'><BsEmojiSmile /></div>Happy Clients</div>
          <div className="feature"><div className='LuBadgeCheck'><LuBadgeCheck /></div>Healthier Business</div>
        </div>
        <Link to='/contact'>
        <button className="get-started">GET STARTED <ArrowCircleRightIcon/></button></Link>
      </div>
      <div className="image-section">
        <img src={webbanner2} alt="Web Development" className="image"/>
      </div>
    </div>

       
      <div className="brand_container1">
      <div className="web_column">
      <h2 className='web_title'>Your Businesses to Establish?</h2>
      <p  className='web_para'>Having a website is an indispensable tool for modern businesses today! It enables businesses to establish a strong online presence, reach a global audience, build credibility, and drive growth in the long run. If you are looking for a website development company in Bangalore, website builders in Bangalore, and website design in Bangalore RIO is your go-to solution.</p>
      <div className="Our-Creative-Team">
          Our Creative Team
          <a href="https://www.linkedin.com/company/rio-business-solutions-usa/people/">
          <img src={ourteams} alt="ourteams" />
          </a>
          </div>
      </div>
        <div className='web-slider_slick_container'>
      <Slider {...settings}>
         <div className='web-slider_box'>
        <img className='web-slider_box_icon' src={people} alt="people"/>
          <p className='web-slider_box_icon_title'>Credibility and Trust</p>
          <p className='web-slider_box_icon_p'>A professionally designed website establishes credibility and trust by showcasing your brand, expertise, testimonials, and portfolio. Partnering with us a reputable web designing company in Bangalore, Bangalore website developers, website builders in Bangalore, and web designers in Bangalore can enhance your business’s credibility, establishing a strong reputation within your industry</p>
        </div>
        <div className='web-slider_box' style={{height:'400px' , overflowY:'visible'}}>
        <img className='web-slider_box_icon' src={webdesigning} alt="webdesigning"/>
          <p className='web-slider_box_icon_title'>Greater Accessibility</p>
          <p className='web-slider_box_icon_p'>Websites are accessible 24/7, allowing potential customers to browse and purchase products & services at their convenience, even outside regular business hours. RIO a reliable website development company in Bangalore, web designing company in Bangalore Bangalore, website developers in Bangalore and website design company in Bangalore, can help you take advantage of this opportunity to boost sales.</p>
        </div>
        <div className='web-slider_box'>
        <img className='web-slider_box_icon' src={seoicon} alt="seoicon"/>
        <p className='web-slider_box_icon_title'>Effective Branding &amp;Marketing</p>
        <p className='web-slider_box_icon_p'>Showcase your brand identity, values, and unique selling points all on one centralized platform by utilizing content marketing, SEO, and social media integration. Our website developers in Bangalore, web designing company in Bangalore, and website design company in Bangalore can help you attract and engage a wider audience, increasing your brand visibility.</p>
        </div>
        <div className='web-slider_box'>
        <img className='web-slider_box_icon' src={lauch} alt="lauch"/>
          <p className='web-slider_box_icon_title'>Build Online Presence</p>
          <p className='web-slider_box_icon_p'>In this digital age, having an online presence is essential to reach a wider audience. website acts as a virtual storefront, making it easy for potential customers to find you and learn about your offerings. With our experienced web designers in Bangalore, website development company in Bangalore, web designing company in Bangalore and website developers in Bangalore. We will help you achieve a strong, engaging, and profitable online presence.</p>
        </div>
      </Slider>
    </div>   
      </div>

      <div className="wave-container">
    <div className='wave-head'>The best part is that the web application development cycle at RIO includes just 5 simple stages</div>
    <hr />
      <div className="wave-content">
        <div className="wave-img">
          <div className="wave-imgs-content">
            <img src={contractual} alt="contractual" />
            <h4>Contractual</h4>
            <p>A thorough evaluation of your business objectives.</p>
          </div>
          <div className="wave-imgs-content">
             <img src={planning} alt="planning" />
             <h4>Planning</h4>
             <p>Preparation of a roadmap and feasibility study.</p>
          </div>
          <div className="wave-imgs-content">
             <img src={proto} alt="proto" />
             <h4>Prototyping</h4>
             <p>Creation of a scalable and foolproof website concept.</p>
          </div>
          <div className="wave-imgs-content">
             <img src={dev} alt="dev" />
             <h4>Development</h4>
             <p>The core phase of website development.</p>
          </div>
          <div className="wave-imgs-content">
             <img src={test} alt="test" />
             <h4>Testing</h4>
             <p>Rigorous testing before the delivery of the final product.</p>
          </div>
        </div>
      </div>
  </div>

     <div className="container_web" style={{marginTop:0}}>
          <div className="text-column">
          <h5 className='web-ser-subtitle'>What we use</h5>
          <h2 className='web-ser-title1'>Tools & Technologies</h2>
          <p className='web-ser-para'>Having a strong online presence is important in today's digital landscape. Effective online advertising, social media management, and search engine optimization can drive growth tenfold. Moreover, it helps engage with customers, reach new audiences, and increase revenue Connect with us </p>
          <Link to='/contact' className='web-button' style={{textDecoration:'none', color:'White'}}>
                Contact us <span className='button-icon'><ArrowCircleRightIcon /></span>
          </Link>
          </div>
         <div className='logo-section'>
         <section className='web_wapp1 ' style={{marginTop:60}}>
         <div className="web-grid2" >
          <img src={html} alt="html"  />
          <p className='logo-title'>PHP</p>
            
          </div>
          <div className="web-grid2">
          <img src={reactjs} alt="reactjs" />
          <p className='logo-title'>REACT JS</p>
         
          </div>
          <div className="web-grid2">
          <img src={nodejs} alt="nodejs" />
          <p className='logo-title'>NODE JS</p>
          
          </div>
         </section> 
         {/* <div  className='digital_logo'><img src={logo} alt=""/></div> */}
         <section className='web_wapp1'>
         <div className="web-grid2">
          <img src={flutter} alt="flutter"  />
          <p className='logo-title'>FLUTTER</p>
          
          </div>
          <div className="web-grid2">
         
          <img src={shopify} alt="shopify"  />
          <p className='logo-title'>SHOPIFY</p>
          </div>
          <div className="web-grid2">
          <img src={wordpress} alt="wordpress" />
          <p className='logo-title'>WORDPRESS</p>
          </div>
         </section> 
         </div>
        </div>
        <div className="web-appli">
          <div className="web-appli-head">
          Web Application<br />Development Cycle
          </div>
          <div className="web-appli-contents">
            <div className="application-box">
              <div className="one">1</div>
              <div className="one-head">
              <Link to="/our-service/web-development/web-ui-ux">Web Design (UI/UX)</Link>
              </div>
              <div className="one-con"> Web Design (UI/UX) Elevate your brand with our expert UI/UX design services. Our focus is to
 create beautiful and easy-to-navigate interfaces, ensuring users feel engaged and satisfied. By
 prioritizing usability and aesthetics, we ensure a platform that encourages interaction as well as
 retention. For web designing companies in Bangalore, , website design companies in Bangalore, and web designers in Bangalore, RIO stands out.
              </div>
              <img className='one-img' src={uiux} alt="uiux" />
              <div className="uparrow"><Link to='/our-service/web-development/web-ui-ux'><FiArrowUpRight /></Link></div>
            </div>
            <div className="application-box">
              <div className="one">2</div>
              <div className="one-head">
              <Link to="/our-service/web-development/web-development-sub">Web Development</Link>
              </div>
              <div className="one-con">Web Development Build robust, scalable websites utilizing cutting-edge technologies and frameworks. Our expertise ensures your site can handle growing traffic and evolving business needs. By leveraging the latest tools, we create websites that are fast, reliable, and future-proof. As leading website developers in Bangalore, Bangalore website developers, website builders in Bangalore, and website design in Bangalore we guarantee quality.</div>
              <img className='one-img' src={webdeve} alt="webdeve" style={{width:'27vw'}}/>
              <div className="uparrow"><Link to='/our-service/web-development/web-development-sub'><FiArrowUpRight /></Link></div>
            </div>
            <div className="application-box">
              <div className="one">3</div>
              <div className="one-head">
              <Link to="/our-service/web-development/web-hosting-service">Web Hosting Service</Link>
              </div>
              <div className="one-con">Web Hosting Service Experience reliable and secure web hosting that keeps your website
 always online and accessible. Our state-of-the-art infrastructure ensures maximum uptime and
 protection against cyber threats. Enjoy fast loading speeds and robust performance with 24/7
 technical support. Trust us for stable and secure online operations. Our web development
 services in Bangalore, website development company in Bangalore, web designing company in Bangalore, and website developers in Bangalore, are top-notch.</div>
              <img className='one-img' src={host} alt="host" style={{width:'25vw'}} />
              <div className="uparrow"><Link to='/our-service/web-development/web-hosting-service'><FiArrowUpRight /></Link></div>
            </div>
            <div className="application-box">
              <div className="one">4</div>
              <div className="one-head">
                <Link to='/our-service/web-development/web-maintenance'>Web Maintenance</Link>
              </div>
              <div className="one-con"> Web Maintenance Ensure your website runs seamlessly with our ongoing maintenance and
 support services. We handle updates, security, and troubleshooting to keep your site in top
 condition. Our dedicated team is always available to address any issues promptly. Trust us to
 keep your digital presence flawless and efficient. For website builders in Bangalore, website design in Bangalore, and web designers in Bangalore
look no
 further than RIO.
</div>
              <img className='one-img' src={maintenance} alt="maintenance" style={{width:'23vw'}} />
              <div className="uparrow"><Link to='/our-service/web-development/web-maintenance'><FiArrowUpRight /></Link></div>
            </div>
            <div className="application-box">
              <div className="one">5</div>
              <div className="one-head">
              <Link to="/our-service/web-development/web-analytics">Web Analytics</Link>
              </div>
              <div className="one-con">Web Analytics Monitor and optimize the website's performance with our comprehensive web
 analytics services. Gain valuable insights into user behavior and site metrics, empowering you
to make informed, data-driven decisions. Enhance your strategy and achieve better results with
 detailed reports and analysis. If you need a website design company in Bangalore, a website development company in Bangalore, a web designing company in Bangalore, website developers in Bangalore, RIO
 offers exceptional service.</div>
              <img className='one-img' src={webanalytics} alt="webanalytics" />
              <div className="uparrow"><Link to="/our-service/web-development/web-analytics"><FiArrowUpRight /></Link></div>
            </div>
          </div>
        </div>
        <div className="contact-con">
        <div className="contact-h">
        Talk to expert
        </div>
        <div className="contact-p">Looking for the right expertise to grow your business? Our experts are here to help take your business to new heights of success.</div>
      </div>
      <ContactFrom/>
    </div>
  )
}

export default BlrWebDevelopment
