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
import * as visitorTracking from '../../services/visitorTracking';
import CS from '../../assets/images/Contractual Staffing.jpg'
import rating from '../../assets/images/flaticon-rating.png'
import smiley from '../../assets/images/smiley.png'
import badge from '../../assets/images/badge.png'
import logo from '../../assets/images/riologo.png'
import { FaRegHandPointer } from "react-icons/fa6";
import { Helmet } from 'react-helmet-async';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import {Link} from 'react-router-dom'; 
import HomeContact from '../Home/HomeContact';
function CbeStaffing() {
  const logo ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599933/rio_main_website/wx9qqfbghlhzhykmqx6v.png"
  const  staffing ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599934/rio_main_website/bgu2wjroejobbkdvaa4h.jpg"
  const ST ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599938/rio_main_website/vzkvc8o2xmdo8iqpesii.jpg"
  const LT ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599943/rio_main_website/tizzlgzdnpqeimqj4ibi.png"
  const TH ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599942/rio_main_website/avnq97aksw5dnjt1ivk2.jpg"
  const DH ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599907/rio_main_website/boqqmtydjrmj2esomj4q.jpg"
  const FH ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599914/rio_main_website/ceszaokyrw4zoukoy1cy.jpg"
  const LH ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599924/rio_main_website/c58eunlepdqzhub53ily.jpg"
  const EH ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599910/rio_main_website/xspwcxsvmuyxa8s2ujlz.jpg"
  const CS ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599901/rio_main_website/fumg3wvzh7rooy6dowis.jpg"
  const smiley ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599939/rio_main_website/vagdtdemcgb8emutozma.png"
 const badge ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599895/rio_main_website/v1wgugjpp5slfrfpjl0m.png"
  
  useEffect(() => {
    visitorTracking.trackServiceInterest('Staffing - Coimbatore');
  }, []);
  const rating = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599932/rio_main_website/eop7qupgfzv0enckm8qa.png"
  return (
    <div>
       <Helmet>
        <title>Top IT Staffing Companies in Coimbatore – RioBizSols  </title>
        <meta name="description" content="Discover trusted IT staffing companies in Coimbatore for tailored recruitment solutions. Get started now!" />
        <meta name="keywords" content="it staffing companies in coimbatore, recruitment companies in coimbatore, staffing companies coimbatore, us staffing companies in coimbatore" />
      </Helmet>
    <div className='staff'>
      <img src={staffing} alt="Coimbatore staffing services"  className='staffing-img'/>
      <h1 className='staff_banner_title'> Build Your Dream Team! Elevate Your
      Business!</h1>
    </div>
    <ClientLogohead/>
    <div className="container">
    <Divider className="divider-staff"/>
    </div>
   
   
    <h2 className='staff_title' >How Comprehensive Staffing Solutions helps your
    business flourish?</h2>
    <p className='staff_des1'>Access to Top Talent: Gain access to our extensive network of skilled professionals across various industries and disciplines through our renowned Staffing company in Coimbatore.</p>
    <p className='staff_des'>Expert Matching: Our rigorous screening and vetting process ensures that we match you with candidates who not only have the right skills but also fit seamlessly into your company culture, making us one of the top IT staffing 
    companies in Coimbatore.</p>
    <p className='staff_des'>Save time and resources with our efficient and
hassle-free hiring processes, allowing you to focus on your core business
priorities. Our recruitment company in Coimbatore specialize in making your
hiringjourney smooth and effective.
</p>
   <h2  className='staff_title1' >
   Here’s how we help you recruit the best talent!
   </h2>
      <div className='staff_bg'>
        <div className="container">
          <Row>
            <Col sm={9}>
            <img src={ST} alt="st"  className='staff_img_top' />
            <div className='staff_card'>
           <h2>Short-Term Staffing</h2>
            <p>Providing flexible staffing solutions to meet short-term
needs, cover seasonal fluctuations, or address temporary project demands.
Access skilled professionals without long-term commitment through our expert 
<strong> recruitment company in Coimbatore.</strong></p>
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
            <img src={LT} alt="lt"  className='staff_img1' />
            
            <div className="staff_card_right">
              <h2>Long-Term-Staffing</h2>
              <p> Expertly matching candidates with permanent positions
within client organizations. Streamlining the hiring process to find the ideal fit for
long-term success, we are one of the premier <strong>US staffing companies in
Coimbatore.</strong></p>
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
            <img src={TH} alt="th"  className='staff_img' />
            <div className='staff_card'>
            <h2>Temp-to-Hire</h2>
            <p>Offering a trial period where clients can assess candidates in
real-world work environments before making a permanent hiring decision.
Minimize risks and ensure compatibility with our temp-to-hire services.</p>
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
            <img src={DH} alt="dh"  className='staff_img1' />
            
            <div className="staff_card_right">
              <h2>Direct Hire</h2>
              <p>Identifying and recruiting top talent for direct placement within client
companies. Streamlining the hiring process for permanent positions without the
interim period of temporary employment. Trust our <strong>recruitment company in
Coimbatore </strong>to find your next star employee</p>
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
            <img src={FH} alt="fh"  className='staff_img' />
            <div className='staff_card'>
            <h2>Fresher's Hiring</h2>
            <p>Tap into a pool of enthusiastic fresh graduates ready to bring
new perspectives and energy to your organization. We identify and place
promising newcomers to help you build a strong, dynamic team. Our 
<strong> Coimbatore job placement agency</strong> is dedicated to sourcing the best young
talent</p>
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
            <img src={LH} alt="lh"  className='staff_img1' />
            
            <div className="staff_card_right">
              <h2>Lateral Hiring</h2>
              <p>Enhance your team with experienced professionals who bring
specialized skills and knowledge to your organization. Our lateral hiring services
ensure you get candidates who can make an immediate impact, making us a
leading <strong>job recruitment agency in Coimbatore</strong></p>
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
            <img src={EH} alt="eh"  className='staff_img' />
            <div className='staff_card'>
            <h2>Executive Hiring</h2>
            <p> Secure top-tier leadership talent with our executive hiring
services. We identify and recruit senior-level executives who align with your
strategic vision and can drive your organization forward, reinforcing our
reputation as one of the best <strong>recruitment companies in Coimbatore</strong></p>
            
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
            <img src={CS} alt="cs"  className='staff_img_bottom' />
            
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
              <h1>What makes us stand apart?</h1>
            </div>
         <section className='staff_wapp'>
         <div className="black staff-grid">
          <img src={rating} alt="rating" />
          <h5>Industry Expertise</h5>
          <p>With years of experience in the staffing industry, RIO understands the nuances of different sectors and can provide you with tailored staffing solutions to meet your organization's needs.</p>
          </div>
          <div className="black staff-grid">
          <img src={rating} alt="rating" />
          <h5>Personalized Approach</h5>
          <p>We believe in building long-term partnerships with our clients and take the time to understand their unique requirements to deliver personalized staffing solutions that align with their goals.</p>
          </div>


         </section>
         <div  className='staff_logo'><img src={logo} alt="logo"/></div>
         
         <section className='staff_wapp1'>
         <div className="black staff-grid">
          <img src={badge} alt="badge" />
          <h5>Quality Assurance</h5>
          <p>With years of experience in the staffing industry, RIO understands the nuances of different sectors and can provide you with tailored staffing solutions to meet your organization's needs.</p>
          </div>
          <div className="black staff-grid">
          <img src={smiley} alt="smiley" />
          <h5>Customer Satisfaction</h5>
          <p>We believe in building long-term partnerships with our clients and take the time to understand their unique requirements to deliver personalized staffing solutions that align with their goals.</p>
          </div>


         </section>
         <HomeContact/>
   </div>
    
    
  )
}

export default CbeStaffing