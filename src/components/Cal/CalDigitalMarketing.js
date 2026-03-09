import React,{useState, useEffect} from 'react';
import '../../css/Digital.css';
import ClientLogohead from '../Home/ClientLogohead';
import { IoIosStarOutline } from "react-icons/io";
import { MdOutlineCheckCircle } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { SlBadge } from "react-icons/sl";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import HomeContact from '../Home/HomeContact';
import Accordion from '../Accordion/Accordion';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as visitorTracking from '../../services/visitorTracking';

function CalDigitalMarketing() {
  
  useEffect(() => {
    visitorTracking.trackServiceInterest('Digital Marketing - California');
  }, []);
  const logo ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599933/rio_main_website/wx9qqfbghlhzhykmqx6v.png"
  const DM ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599906/rio_main_website/pf3z9puajbp2duks88hl.jpg"
  const digital2 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599906/rio_main_website/p3g4eypennl5uvjenyww.png"
  const service ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599937/rio_main_website/f0zw46jvq1aisyxogxfg.jpg"
 
  const Surfer ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599941/rio_main_website/w5uwc2tcueepwush98cx.png"
  const Google ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599914/rio_main_website/kpskutptlmbm6aichpqx.png"
  const GoogleSearch ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599914/rio_main_website/dtxabwtufptjpydmsp3d.png"
  const ahrefs ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599891/rio_main_website/iebcft7tifnl4djcz52b.png"
  const keyword ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599922/rio_main_website/nscadz1xwwsevrpgomec.png"
  const semrush ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599935/rio_main_website/tgkdzhfvuz7yccxx55mr.png"
  const bp ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599897/rio_main_website/gn0jcjtxo118e6rrhfa2.png"
  const plan ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599930/rio_main_website/k0sco5upl3w4eyndxuqn.png"
  const time ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599943/rio_main_website/hgrdcmjur4mpku0jolvw.png"
  const sm ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599938/rio_main_website/cuftsz4fhz9ylapw8slv.png"
  
  const accordionItems = [
    { label: "Branding", content: "With an effective strategy and its implementation, we ensure that the USP or the uniqueness of your business is felt worldwide. Our experts conduct a thorough analysis of your business and target audience to ensure only a single USP of your business is noticed by them. Utilizing social media and other platforms, we help you develop effective communication channels for your business.",
    link:"/our-service/digital-marketing/branding"
     },
    { label: "Content Marketing", content: "Our content marketing services are most beneficial for developing, editing, writing, promoting, and publishing search engine-friendly content, such as blog posts, email marketing, online guides, or promotional videos. We aim to engage the target audience with relevant content that answers their questions and earns trust. Our Content specialist helps you develop an effective strategy to attract potential customers and build a lasting impression on them.",
    link:"/our-service/digital-marketing/content-marketing"
     },
    { label: "Pay-Per-Click", content: "PPC campaigns help businesses generate leads by targeting relevant prospects. By using a Google ad, you can reach people actively searching for what you offer. PPC ads appear when potential customers search for your products on Google.",
    link:"/our-service/digital-marketing/pay-per-click"
     },
    { label: "Social Media Marketing", content: "Social media, being an integral part of people’s lives today, holds exponential benefits for businesses to generate leads and interact with the masses. Our SMM services includes creating effective social media marketing campaigns across various channels such as Facebook, Instagram, LinkedIn, Twitter, and more. Our experts identify your marketing goals, analyze competitors, and evaluate your customers’ behavior to design a tailored approach. ",
      link:"/our-service/digital-marketing/social-media-marketing"
     },
    { label: "Search Engine Optimization", content: "Search engines are the best gateway to understanding online experiences, which is why SEO services are vital for generating more website traffic, leads, and sales. Our SEO experts perform on-page and off-page optimization and use Google Search Console to track your website’s performance. Being the #1 SEO agency, our services include SEO copywriting, local SEO services, eCommerce SEO services, lead generation SEO, and so on. We aim to attract high-quality leads and traffic and increase conversions with an effective SEO strategy.",
      link:"/our-service/digital-marketing/seo"
    },
  ];

  const [count, setCount] = useState(0); // Initialize state to 0
  const maxCount = 3500; // Set maximum count

  useEffect(() => {
    // Set up a timer that increases the count every 1 second (1000 ms)
    const interval = setInterval(() => {
      setCount((prevCount) => {
        // Check if the count has reached the maximum value
        if (prevCount >= maxCount) {
          clearInterval(interval); // Clear the interval if max count is reached
          return prevCount; // Return the previous count to stop incrementing
        }
        return prevCount + 1; // Increment count by 1
      });
    }, 10);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
   

  return (

    <div>
      <Helmet>
        <title>Best Digital Marketing Services in California </title>
        <meta name="description" content="Discover top digital marketing companies and services in California. From PPC to social media, find the best digital agencies for your business growth
" />
        <meta name="keywords" content="digital marketing california,digital marketing companies in california, digital marketing in california, digital agency california, digital marketing services in california, top digital marketing agencies in california, ppc agency california, social media marketing agency in california, best digital marketing agency in california" />
      </Helmet>
      <div className="container-digital">
        <img src={DM} alt="Digital Marketing Banner" className="digital-img" />
        <h1 className="digital_banner_title">One-Stop Digital Marketing Services!</h1>
      </div>
      <ClientLogohead />
      <div className='container'>
        <div className="container_digital_ser">
          <div className="images-column">
            <img src={digital2} alt="Image 1" className="image-item" />
          </div>

          <div className="text-column">
            <h2 className='digital-ser-title'>Discover How our Digital Marketing
Services In Californiacan unlock the
potential of your business</h2>
            <p className='digital-ser-para'>Having a strong online presence is important in today’s digital landscape. Effective online
advertising, social media management, and search engine optimization can drive growth 10
times.
</p>
            <p className='digital-ser-para'>All this is only possible by building a strong digital marketing strategy. With the right tools,
services, and certified digital marketers, like the ones offered at our digital marketing
company in california, you can streamline and enhance your online business’s online
presence and target the market effortlessly
</p>
            <div className='digit-wrapper'>
              <h5><IoIosStarOutline className='digit-icon' /> No Patchwork Of Design</h5>
              <h5><SlBadge className='digit-icon1' /> Complete Transparency</h5>
              <h5><CiFaceSmile className='digit-icon2' /> Innovative Strategies</h5>
              <h5><MdOutlineCheckCircle className='digit-icon3' /> Transform Your Vision</h5>
              <Link to='/contact'  style={{textDecoration:'none', color:'White'}}>
              <button className='digital-button'>
                Get Started <span className='button-icon'><ArrowCircleRightIcon /></span>
              </button></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='top-ser-bg'>
      <div className="container_digital_ser1">
          <div className="text-column">
          <h5 className='top-ser-subtitle'>Top Services</h5>
          <h2 className='top-ser-title'>Grow And Prosper With Our Experts</h2>
          <p className='top-ser-para'>Looking for a dedicated and top digital marketing company in California? Then
partner with RIO, whose vision is to serve better with strategic analysis, and
cutting-edge, creative problem-solving digital tools.
</p>
          <p className='work'>Work Completed</p>
          <p className='top-count'>{count}+</p>
          <Link to='/contact'  style={{textDecoration:'none', color:'White'}}>
          <button className='digital-button1'>
                Contact us <span className='button-icon'><ArrowCircleRightIcon /></span>
              </button></Link>
          </div>
         <div>
         <section className='digital_wapp'>
         <div className="black digital-grid">
          <img src={bp} alt="branding" />
          <h5>Branding</h5>
          <p>We help you develop effective communication channels for your business.
          </p>
          </div>
          <div className="black digital-grid">
          <img src={plan} alt="content_writing" />
          <h5>Content Writing</h5>
          <p>Our Content specialist helps you develop an effective strategy to attract potential customers.</p>
          </div>
         </section>
         <div  className='digital_logo'><img src={logo} alt="digitallogo"/></div>
         <section className='digital1_wapp'>
         <div className="black digital1-grid">
          <img src={time} alt="seo" />
          <h5>SEO</h5>
          <p>Search engines are the best gateway to understanding online experiences, which is why SEO services are vital for generating more website traffic, leads, and sales.
          </p>
          </div>
          <div className="black digital1-grid">
          <img src={sm} alt="social_media" />
          <h5>Social Media</h5>
          <p>Our experts identify your marketing goals, analyze competitors, and evaluate your customers' behavior to design a tailored approach.</p>
          </div>
         </section> 

         </div>
        </div>
      </div>
      <div className="digital-service-bg">
       <div className="container_digital_ser1">
          <div className="text-column">
          <img src={service} alt="Image 1" className="digital-ser-img" />
          <div className="digital-progress"> 
            <div className="progress-bar">

            </div>
            <h4>Client<br/>Satisfied</h4>
           <div className="progress-bar1"></div>
          <h4>Project Success Rate</h4> 
          </div>
        
          
          </div>
         <div>
         <section className='digital_ser_wapp'>
         <div className="text-column">
          {/* <h5 className='digital_ser_wapp_subtitle'>Our Service</h5> */}
          <h2 className='digital_ser_wapp_title'>Digital Marketing in California</h2>
          <p className='digit-ser-para1'>RIO, a reliable and best digital marketing agency in california possesses a team of
experienced marketing experts who's ready to collaborate with you to understand your business
needs and create a brand strategy that builds your brand equity, promotes its growth, and
connects with the potential audience.
</p>
           <Accordion items={accordionItems} />
          </div>
         </section>
         </div>
        </div>
      </div>
      <div className="container_digital_ser1" style={{marginTop:0}}>
          <div className="text-column">
          <h2 className='top-ser-title1'>Tools & Technologies</h2>
          <p className='top-ser-para'>Our tailor-made digital marketing services include SEO, branding, social media
marketing, social media engagement, content marketing, PPC advertising, and more.
Our team of experts stays up-to-date with the latest trends and technologies to ensure
your digital marketing efforts are successful, reinforcing our reputation as one of the top
digital marketing agencies in california.</p>
          <Link to='/contact'  style={{textDecoration:'none', color:'White'}}>
          <button className='digital-button1'>
                Contact us <span className='button-icon'><ArrowCircleRightIcon /></span>
              </button></Link>
          </div>
         <div>
         <section className='digital1_wapp1 ' style={{marginTop:60}}>
         <div className="digital1-grid2" >
          <img src={Google} alt="google_analytics" style={{height:50, width:100}} />
          <h6>GOOGLE <br/>ANALYTICS</h6>
            
          
          </div>
          <div className="digital1-grid2">
          <img src={GoogleSearch} alt="google_search_console"  style={{height:50, width:100}}/>
          <h6>GOOGLE <br/>SEARCH <br/>CONSOLE</h6>
         
          </div>
          <div className="digital1-grid2">
          <img src={ahrefs} alt="ahref"  style={{height:50, width:100}}/>
          <h6>AHREF</h6>
          
          </div>
         </section> 
       
         <section className='digital1_wapp1'>
         <div className="digital1-grid2">
          <img src={Surfer} alt="surfer" style={{height:50, width:100}} />
          <h6>SURFER</h6>
          
          </div>
          <div className="digital1-grid2">
         
          <img src={keyword} alt="keyword_everywhere" style={{height:70, width:100}} />
          <h6>KEYWORD EVERYWHERE</h6>
          </div>
          <div className="digital1-grid2">
          <img src={semrush} alt="semrush" style={{height:50, width:100}} />
          <h6>SEMRUSH</h6>
          </div>
         </section> 
 
         </div>
        </div>
        <HomeContact/> 
     
    </div>
  );
}

export default CalDigitalMarketing;
