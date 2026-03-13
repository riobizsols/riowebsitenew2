import React from 'react'
import '../../../css/salemanagement.css'
import hr from '../../../assets/images/hr.png'
import ClientLogohead from '../../Home/ClientLogohead'
import emp from '../../../assets/images/emp.jpg'
import Appraisals from '../../../assets/images/Appraisals.jpg'
import Timeoff from '../../../assets/images/Timeoff.jpg'
import Content from '../../../assets/images/content_hr.jpg'

import ContactFrom from '../../Services/ContactFrom'
import { Helmet } from 'react-helmet-async';

function HumanResource() {
  const hr ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599917/rio_main_website/w6frbucrhefrjbnneyp1.png"
  const emp="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599908/rio_main_website/wsdc38wuguxghrbrpwh4.jpg"
  const Appraisals="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599894/rio_main_website/nb1domnhlupquxch2qcp.jpg"
  const Timeoff="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599943/rio_main_website/cutcsikjbxbjsocviegc.jpg"
  const Content="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599900/rio_main_website/kpfqeznlvfz2ernzb8xn.jpg"
  return (
    <div>
         <Helmet>
        <title>Odoo ERP Human Resources - Rio Bizsols Pvt Ltd
        </title>
        <meta name="description" content="Optimize HR processes with Rio Bizsols Pvt Ltd's Odoo ERP solutions. Manage payroll, recruitment, and employee data efficiently." />
        <meta name="keywords" content="" />
      </Helmet>
       <div className="sale_container_bg">
      <div className="sale_banner">
      <img src={hr} alt="hr" className='sale_banner_img'/>
      <div className="sale_text_col">
      <h1 className='sale_banner_title'>Experience the Future of
      Business with RIO</h1>
      <h3 className='sale_banner_subtitle'>Your Partner in Cutting-Edge Odoo ERP Solutions.</h3>
                   <p>As a premier Odoo ERP development company, RIO offers comprehensive Odoo staffing solutions designed to streamline your recruitment and staffing processes, enhance efficiency, and ensure you attract and retain the best talent.</p>     
        </div>
        </div>

      </div>
      <ClientLogohead/>
      <div className='container'>
        <hr/>
      </div>
      <div className="container">
        <div className="sale_banner1">
        <img src={emp} alt="emp"  className='sale_image' />
        <div className="sale_text_col1">
          <h2>Employee</h2>
          <p>Effective employee management is crucial for fostering a productive and engaged workforce. Our Odoo employee management solutions provide a centralized platform to manage employee information, track performance, and support career development.</p>
          <p>Maintaining employee databases, creating their profiles, maintaining essential documents, etc., are all exclusive features of our Odoo employee management solutions that you will be enjoying with RIO.</p>
        </div> 
        </div>
        </div>
        <div className='container'>
        <hr/>
      </div>
      <div className="container">
        <div className="sale_banner1">
        <img src={Appraisals} alt="appraisals"  className='sale_image' />
        <div className="sale_text_col1">
          <h2>Appraisals</h2>
          <p>Regular employee appraisals are essential for assessing performance, providing feedback, and supporting career growth. Our Odoo appraisal solutions simplify the appraisal process and help you build a culture of continuous improvement.</p>
          <p>Right from setting up and managing appraisal cycles, evaluating goals, and tracking them to reviewing performances, and maintaining reports & analytics, with RIO’s Odoo appraisal solution you don't have to worry about anything.</p>
        </div> 
        </div>
        </div>
        <div className='container'>
        <hr/>
      </div>
      <div className="container">
        <div className="sale_banner1">
        <img src={Timeoff} alt="timeoff"  className='sale_image' />
        <div className="sale_text_col1">
          <h2>Time off</h2>
          <p>Our Odoo time off management solutions simplify the process of requesting, approving, and tracking leave. Efficient time-off management is essential for maintaining workforce productivity and ensuring employee well-being.</p>
          <p>Be it defining leave policies, automating approval workflows, or tracking and managing the leave balance of each employee, with RIO, you can simplify all of these.</p>
          
        </div> 
        </div>
        </div>  
        <div className='container'>
        <hr/>
      </div>
      <div className="container">
        <div className="sale_banner1">
        <img src={Content} alt="content"  className='sale_image' />
        <div className="sale_text_col1">
          <h2>Content</h2>
          <p>With a track record of successful implementations and satisfied clients, RIO is trusted by businesses worldwide to deliver exceptional Odoo solutions.
          Don't just take our word for it—hear directly from our satisfied clients.</p>
          
        </div> 
        </div>
        </div>  
        
        <div>
            <h3 className='web_contact_title'>Ready to transform your business with RIO's
            Odoo development services?</h3>
            <p className='web_contact_para'>Contact us today for a free consultation and discover how we can help you achieve your business goals.

</p>
            <ContactFrom/>
        </div>      
    </div>
  )
}


export default HumanResource