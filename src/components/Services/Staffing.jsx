import React, { useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import staffing from '../../assets/images/Satffing.jpg'
import '../../css/Staffing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Divider from '@mui/material/Divider';
import ClientLogohead from '../Home/ClientLogohead'
import ST from '../../assets/images/Short-Term-2.jpg'
import LT from '../../assets/images/temp-hire-1.png'
import TH from '../../assets/images/Tem-hire.jpg'
import DH from '../../assets/images/Direct-hire.jpg'
import FH from '../../assets/images/Fresher-Hiring.jpg'
import LH from '../../assets/images/Lateral-Hiring.jpg'
import EH from '../../assets/images/Executive-Hiring.jpg'
import CS from '../../assets/images/Contractual Staffing.jpg'
import rating from '../../assets/images/flaticon-rating.png'
import smiley from '../../assets/images/smiley.png'
import badge from '../../assets/images/badge.png'
import logo from '../../assets/images/riologo.png'
import { FaRegHandPointer } from "react-icons/fa6";
import { Helmet } from 'react-helmet-async';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import HomeContact from '../Home/HomeContact';
import {Link} from 'react-router-dom';
import * as visitorTracking from '../../services/visitorTracking';
function Staffing() {
  const logo ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599933/rio_main_website/wx9qqfbghlhzhykmqx6v.png"
  const  staffing ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599934/rio_main_website/bgu2wjroejobbkdvaa4h.jpg"
  const ST ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599938/rio_main_website/vzkvc8o2xmdo8iqpesii.jpg"
  const LT ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599943/rio_main_website/tizzlgzdnpqeimqj4ibi.png"
  
  useEffect(() => {
    visitorTracking.trackServiceInterest('Staffing');
  }, []);
  const TH ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599942/rio_main_website/avnq97aksw5dnjt1ivk2.jpg"
  const DH ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599907/rio_main_website/boqqmtydjrmj2esomj4q.jpg"
  const FH ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599914/rio_main_website/ceszaokyrw4zoukoy1cy.jpg"
  const LH ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599924/rio_main_website/c58eunlepdqzhub53ily.jpg"
  const EH ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599910/rio_main_website/xspwcxsvmuyxa8s2ujlz.jpg"
  const CS ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599901/rio_main_website/fumg3wvzh7rooy6dowis.jpg"
  const smiley ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599939/rio_main_website/vagdtdemcgb8emutozma.png"
 const badge ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599895/rio_main_website/v1wgugjpp5slfrfpjl0m.png"
  const rating = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599932/rio_main_website/eop7qupgfzv0enckm8qa.png"
  return (
    <div>
       <Helmet>
        <title>Staffing Solutions | IT Recruitment & Talent Acquisition | RioBizSols</title>
        <meta name="description" content="RioBizSols provides comprehensive staffing solutions including contract staffing, direct hiring, executive recruitment, and fresh talent acquisition across IT and business sectors." />
        <meta name="keywords" content="staffing solutions, IT recruitment, contract staffing, direct hiring, executive recruitment, talent acquisition, staffing agency" />
        <meta name="author" content="RioBizSols" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Staffing Solutions | IT Recruitment & Talent Acquisition" />
        <meta property="og:description" content="Comprehensive staffing solutions for IT recruitment, contract staffing, direct hiring, and executive recruitment." />
        <meta property="og:url" content="https://riobizsols.com/our-service/staffing" />
        <meta property="og:site_name" content="RioBizSols" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Staffing Solutions | IT Recruitment & Talent Acquisition" />
        <meta name="twitter:description" content="RioBizSols - Your trusted partner for IT recruitment and comprehensive staffing solutions." />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://riobizsols.com/our-service/staffing" />
        
        {/* Schema.org Service Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "RioBizSols Staffing Solutions",
            "description": "Comprehensive IT recruitment and staffing services",
            "provider": {
              "@type": "Organization",
              "name": "RioBizSols"
            },
            "areaServed": ["IN", "US", "GB"],
            "serviceType": [
              "Contract Staffing",
              "Direct Hiring",
              "Executive Recruitment",
              "Fresh Talent Acquisition",
              "Temporary Staffing",
              "Lateral Hiring"
            ]
          })}
        </script>
      </Helmet>
    <div className='staff'>
      <img src={staffing} alt="Staffing Solutions" className='staffing-img' />
      <h1 className='staff_banner_title'> Build Your Dream Team! Elevate Your
      Business!</h1>
    </div>
    <ClientLogohead/>
    <div className="container">
    <Divider className="divider-staff"/>
    </div>
   
   
    <h2 className='staff_title' >How Comprehensive Staffing Solutions helps your
    business flourish?</h2>
    <p className='staff_des1'>Access to Top Talent: Gain access to our extensive network of skilled professionals across various industries and disciplines.</p>
    <p className='staff_des'>Expert Matching: Our rigorous screening and vetting process ensures that we match you with candidates who not only have the right skills but also fit seamlessly into your company culture.</p>
    <p className='staff_des'>Streamlined Hiring Processes: Save time and resources with our efficient and hassle-free hiring processes, allowing you to focus on your core business priorities.</p>
   <h2  className='staff_title1' >
   Here’s how we help you recruit the best talent!
   </h2>
      <div className='staff_bg'>
        <div className="container">
          <Row>
            <Col sm={9}>
            <img src={ST} alt="Short-Term Staffing" className='staff_img_top' />
            <div className='staff_card'>
            <h2>Short-Term Staffing</h2>
            <p>Providing flexible staffing solutions to meet short-term needs, cover seasonal fluctuations, or address temporary project demands. Access skilled professionals without long-term commitment.</p>
            <Link to = '/our-service/staffing/short-term-staffing'> <button className='staff_button'>For More Info
            <span className='button-icon'><ArrowCircleRightIcon/></span>
            </button></Link>
            </div>
            </Col>
            <Col sm={3}> 
            </Col>
          </Row>
        </div>
        <div className="container">
          <Row>
            <Col sm={1}>
            
            </Col>
            <Col sm={11}> 
            <img src={LT} alt="Long-Term Staffing" className='staff_img1' />
            
            <div className="staff_card_right">
              <h2>Long-Term-Staffing</h2>
              <p>Expertly matching candidates with permanent positions within client organizations. Streamlining the hiring process to find the ideal fit for long-term success.</p>
              <Link to = '/our-service/staffing/long-term-staffing'> <button className='staff_button'>For More Info
            <span className='button-icon'><ArrowCircleRightIcon/></span>
            </button></Link>
              
            </div>
           
            </Col>
          </Row>
        </div> 
        <div className="container">
          <Row>
            <Col sm={9}>
            <img src={TH} alt="Temporary Hiring" className='staff_img' />
            <div className='staff_card'>
            <h2>Temp-to-Hire</h2>
            <p>Offering a trial period where clients can assess candidates in real-world work environments before making a permanent hiring decision. Minimize risks and ensure compatibility.</p>
            <Link to = '/our-service/staffing/temp-to-hire'> <button className='staff_button'>For More Info
            <span className='button-icon'><ArrowCircleRightIcon/></span>
            </button></Link>
            </div>
            </Col>
            <Col sm={3}> 
            </Col>
          </Row>
        </div>
        <div className="container">
          <Row>
            <Col sm={1}>
            
            </Col>
            <Col sm={11}> 
            <img src={DH} alt="Direct Hiring" className='staff_img1' />
            
            <div className="staff_card_right">
              <h2>Direct Hire</h2>
              <p>Identifying and recruiting top talent for direct placement within client companies. Streamlining the hiring process for permanent positions without the interim period of temporary employment.</p>
              <Link to = '/our-service/staffing/directhire'> <button className='staff_button'>For More Info
            <span className='button-icon'><ArrowCircleRightIcon/></span>
            </button></Link>
            </div>
           
            </Col>
          </Row>
        </div> 
        <div className="container">
          <Row>
            <Col sm={9}>
            <img src={FH} alt="Fresh Hiring" className='staff_img' />
            <div className='staff_card'>
            <h2>Fresher's Hiring</h2>
            <p>Tap into a pool of enthusiastic fresh graduates ready to bring new perspectives and energy to your organization. We identify and place promising newcomers to help you build a strong, dynamic team.</p>
            <Link to = '/our-service/staffing/freshhire'> <button className='staff_button'>For More Info
            <span className='button-icon'><ArrowCircleRightIcon/></span>
            </button></Link>
           
            </div>
            </Col>
            <Col sm={3}> 
            </Col>
          </Row>
        </div>
        <div className="container">
          <Row>
            <Col sm={1}>
            
            </Col>
            <Col sm={11}> 
            <img src={LH} alt="Lateral Hiring" className='staff_img1' />
            
            <div className="staff_card_right">
              <h2>Lateral Hiring</h2>
              <p>Expertly matching candidates with permanent positions within client organizations. Streamlining the hiring process to find the ideal fit for long-term success.</p>
              <Link to = '/our-service/staffing/lateral-hiring'> <button className='staff_button'>For More Info
            <span className='button-icon'><ArrowCircleRightIcon/></span>
            </button></Link>
            </div>
           
            </Col>
          </Row>
        </div> 
        <div className="container">
          <Row>
            <Col sm={9}>
            <img src={EH} alt="Executive Hiring" className='staff_img' />
            <div className='staff_card'>
            <h2>Executive Hiring</h2>
            <p>Providing flexible staffing solutions to meet short-term needs, cover seasonal fluctuations, or address temporary project demands. Access skilled professionals without long-term commitment.</p>
            
            <Link to='/our-service/staffing/executive-hiring'><button className='staff_button'>For More Info
            <span className='button-icon'><ArrowCircleRightIcon/></span>
            </button></Link>
            
            </div>
            </Col>
            <Col sm={3}> 
            </Col>
          </Row>
        </div>
        <div className="container">
          <Row>
            <Col sm={1}>
            
            </Col>
            <Col sm={11}> 
            <img src={CS} alt="Contractual Staffing" className='staff_img_bottom' />
            
            <div className="staff_card_right">
              <h2>Contractual Staffing</h2>
              <p>Contractual staffing solutions are designed to offer you the flexibility to scale your workforce based on the demands of your business. Whether you need expertise for a short-term project, a long-term assignment, or anything in between, we have the right talent to match your requirements.</p>
             <Link to='/our-service/staffing/contractual'><button className='staff_button'>For More Info
            <span className='button-icon'><ArrowCircleRightIcon/></span>
            </button></Link>
              
            </div>
           
            </Col>
          </Row>
        </div>     
        </div>
            <div className='staff_title'>
              <h2>What makes us stand apart?</h2>
            </div>
         <section className='staff_wapp'>
         <div className="black staff-grid">
          <img src={rating} alt="Industry Expertise Icon" width={60} height={60} />
          <h5>Industry Expertise</h5>
          <p>With years of experience in the staffing industry, RIO understands the nuances of different sectors and can provide you with tailored staffing solutions to meet your organization's needs.</p>
          </div>
          <div className="black staff-grid">
          <img src={rating} alt="Personalized Approach Icon" width={60} height={60} />
          <h5>Personalized Approach</h5>
          <p>We believe in building long-term partnerships with our clients and take the time to understand their unique requirements to deliver personalized staffing solutions that align with their goals.</p>
          </div>
          <div className="black staff-grid">
          <img src={badge} alt="Quality Assurance Icon" width={60} height={60} />
          <h5>Quality Assurance</h5>
          <p>Our commitment to quality is unwavering. RIO's talent acquisition team adheres to the highest standards of professionalism and integrity in everything we do, ensuring that you receive the best possible service.</p>
          </div>
          <div className="black staff-grid">
          <img src={smiley} alt="Customer Satisfaction Icon" width={60} height={60} />
          <h5>Customer Satisfaction</h5>
          <p>Our track record of satisfied clients speaks volumes about the quality of our service. Join the ranks of businesses that have experienced success with RIO, a leading job recruitment agency, and IT recruitment agency.</p>
          </div>
         </section>

           <HomeContact/>
         
       
       
   </div>
    
    
  )
}

export default Staffing