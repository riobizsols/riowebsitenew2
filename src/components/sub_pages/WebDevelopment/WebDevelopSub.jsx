import React from 'react'
import '../WebDevelopment/WebDevelopSub'
import { Helmet } from 'react-helmet';
import { FaAnglesRight } from "react-icons/fa6";
import ClientLogohead from '../../Home/ClientLogohead'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Link } from 'react-router-dom'
import ContactFrom from '../../Services/ContactFrom'
import Slider from 'react-slick';

const WebDevelopSub = () => {

  const w_s_banner = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599952/rio_main_website/cwlxbfxzvn34wryynyln.jpg"
  const web_dev = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599951/rio_main_website/pfzufykcw2rhelqomr8d.jpg"
  const consumer_centric = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599899/rio_main_website/eaxjqtl7x3nxd4utk0qm.png"
  const rating = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599913/rio_main_website/vqmqm1u1ecnnvxlbbrlo.png"
  const Quality_Assurance = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599913/rio_main_website/fzvrd1f2bsrxdpyleoc7.png"
  const call = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599897/rio_main_website/ikx8stcolszh6pbga8bo.png"

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
        <title>Top Web Development Services | Riobizsols - Hire the Best
        </title>
        <meta name="description" content="Discover Riobizsols' expert web development services. Leading web development company for eCommerce, applications, and more." />
        <meta name="keywords" content="web development companies, website development company, ecommerce website developer, web development agency, web application development" />
      </Helmet>
       <div className='web-banner'>
            <img className='web-img' src={w_s_banner} alt="w_s_banner" />
            <div className='web-banner-wm'>Web-Development</div>
            
        </div>
        <div className="web_main_content">
          <div className="web_main_intro">
           <div className="container_web_main">
          <div className="w_m_con">
          <h1 className='w_m_h'>Transform Your Digital Presence</h1>
          <p className='w_m_p'>Let Rio be your partner in digital success. Together, we can build a website that not only looks great but also drives results. Whether you're a startup, a growing business, or an established enterprise, our expert website builders in Bangalore team are dedicated to delivering tailored solutions that meet your unique needs.</p>
          <div ></div>
          <Link to='/contact'>
        <button className="get-started">LET'S CONNECT US! <ArrowCircleRightIcon/></button></Link>
          </div>
          <div className="w_m_img">
          <img className='web_main_img' src={web_dev} alt="web_dev"/>
          </div>
         </div>
          </div>
         <ClientLogohead/>
            <hr />
         
        <h2 className='pay_title1'>Web Development Section</h2>
        <p className='pay_txt_description'>Our website development company in Bangalore provides a comprehensive range of services</p>
        <hr />
        <div className="ui_ux_web">
          <h3 style={{color:'#1B75BB', textDecoration:'underline'}}>Static Websites</h3>
          <p>Fast, secure, and easy to maintain. It is ideal for businesses needing a robust online presence without frequent content updates.</p>
        </div>
     <div className="stand-grid">
      <div className="expertise">
        <div className="expertise-h">
        <div className="stand-icon"><FaAnglesRight /></div>
        Custom Design
      </div>
      <div className="expertise-con">
      Unique, visually appealing designs that reflect your brand identity.
      </div>
      </div>
      <div className="expertise">
        <div className="expertise-h">
        <div className="stand-icon"><FaAnglesRight /></div>
        Responsive Layouts
      </div>
      <div className="expertise-con">Seamless performance across all devices – from desktops to smartphones.</div>
      </div>
      </div>

      <div className="expertise" id='expertise-last' >
        <div className="expertise-h">
          <div className="stand-icon"><FaAnglesRight /></div>
          SEO Optimized
      </div>
      <div className="expertise-con">
      Enhance your visibility on search engines to attract more visitors.
      </div>
      </div>

        <div className="ui_ux_web">
          <h3 style={{color:'#1B75BB', textDecoration:'underline'}}>Dynamic Websites</h3>
          <p>For businesses that need to frequently update content, interact with users, or manage databases.</p>
        </div>

        <div className="stand-grid">
      <div className="expertise">
        <div className="expertise-h">
        <div className="stand-icon"><FaAnglesRight /></div>
        Content Management Systems (CMS)
      </div>
      <div className="expertise-con">
      Easy-to-use platforms like WordPress, Joomla, and Drupal for effortless content updates.
      </div>
      </div>
      <div className="expertise">
        <div className="expertise-h">
        <div className="stand-icon"><FaAnglesRight /></div>
        E-commerce Solutions
      </div>
      <div className="expertise-con">Robust, scalable online stores with secure payment gateways.</div>
      </div>
      </div>

      <div className="expertise" id='expertise-last' >
        <div className="expertise-h">
          <div className="stand-icon"><FaAnglesRight /></div>
          User Interactivity
      </div>
      <div className="expertise-con">
      Features like blogs, forums, and customer portals to engage your audience.</div>
      </div>

      <div className="ui_ux_web">
          <h3 style={{color:'#1B75BB', textDecoration:'underline'}}>E-commerce Websites</h3>
          <p>Robust, scalable online stores designed to convert visitors into customers.</p>
        </div>

        <div className="stand-grid">
      <div className="expertise">
        <div className="expertise-h">
        <div className="stand-icon"><FaAnglesRight /></div>
        Custom E-commerce Solutions
      </div>
      <div className="expertise-con">
      Tailored online stores that meet your specific business needs.
      </div>
      </div>
      <div className="expertise">
        <div className="expertise-h">
        <div className="stand-icon"><FaAnglesRight /></div>
        Secure Payment Gateways
      </div>
      <div className="expertise-con">Safe and reliable payment options for your customers</div>
      </div>
      <div className="expertise">
        <div className="expertise-h">
        <div className="stand-icon"><FaAnglesRight /></div>
        Inventory Management
      </div>
      <div className="expertise-con">Easy-to-use systems for managing products, orders, and stock.</div>
      </div>
      <div className="expertise">
        <div className="expertise-h">
        <div className="stand-icon"><FaAnglesRight /></div>
        User Experience Design
      </div>
      <div className="expertise-con">Intuitive, user-friendly interfaces to enhance the shopping experience.</div>
      </div>
      </div>

      <div className="expertise" id='expertise-last' >
        <div className="expertise-h">
          <div className="stand-icon"><FaAnglesRight /></div>
          SEO and Marketing Integration
      </div>
      <div className="expertise-con">
      Tools to boost your store's visibility and drive traffic.</div>
      </div>
        
        <h2 className='pay_title1'>Web Development Section</h2>
      <div className="brand_container1" style={{margin:'3rem 0 0', display:'flex', justifyContent:'center'}}>
        <div className='web-slider_slick_container'>
      <Slider {...settings}>
         <div className='web-slider_box'>
        <img className='web-slider_box_icon'  src={rating} alt="rating"/>
          <p className='web-slider_box_icon_title'>Experienced Team</p>
          <p className='web-slider_box_icon_p'>Our web designers in bangalore developers have years of experience and a passion for innovation.
          </p>
        </div>
        <div className='web-slider_box' >
        <img className='web-slider_box_icon' src={consumer_centric} alt="consumer_centric"/>
          <p className='web-slider_box_icon_title'>Customer-Centric Approach</p>
          <p className='web-slider_box_icon_p'>Our website developers in bangalore will listen, understand, and deliver solutions tailored to your needs.</p>
        </div>
        <div className='web-slider_box'>
        <img className='web-slider_box_icon' src={Quality_Assurance} alt="Quality_Assurance"/>
        <p className='web-slider_box_icon_title'>Quality Assurance</p>
        <p className='web-slider_box_icon_p'> Rigorous testing to ensure your website is secure, fast, and bug-free.</p>
        </div>
        <div className='web-slider_box'>
        <img className='web-slider_box_icon' src={call} alt="call"/>
        <p className='web-slider_box_icon_title'>Continuous Support</p>
        <p className='web-slider_box_icon_p'>Ongoing maintenance and support to keep your website running smoothly.</p>
        </div>
      </Slider>
        </div>   
       </div>
       <div className="contact-con">
        <div className="contact-h">Let’s discuss your project!</div>
        <div className="contact-p">Contact Rio today to discuss your project and discover how our web development services can benefit your business.</div>
      </div>
      <ContactFrom/>
      </div>
    </div>
  )
}

export default WebDevelopSub