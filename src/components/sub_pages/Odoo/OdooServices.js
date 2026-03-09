import React from 'react'
import '../../../css/salemanagement.css'
import odooservice from '../../../assets/images/odooservice.png'
import ClientLogohead from '../../Home/ClientLogohead'
import appointment from '../../../assets/images/appoinment.jpg'
import planning from '../../../assets/images/planning.jpg'
import timesheet from '../../../assets/images/timesheets.jpg'
import field from '../../../assets/images/field.jpg'
import ContactFrom from '../../Services/ContactFrom'
import { Helmet } from 'react-helmet';

function OdooServices() {
  const odooservice ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599928/rio_main_website/azjotiuwds78rwqbymnw.png"
  const appointment ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599894/rio_main_website/ez1gk38wyllqhab1kmtq.jpg"
  const planning ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599930/rio_main_website/hue110lifki7067t8jai.jpg"
  const timesheet="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599912/rio_main_website/yw1hw9g0xtyhx14d4zqs.jpg"
  const field ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599944/rio_main_website/omtkhw08au8xl8pqagnf.jpg"
  return (
    <div>
        <Helmet>
        <title>Custom Odoo ERP Solutions - Rio Bizsols Pvt Ltd</title>
        <meta name="description" content="Develop customized Odoo ERP solutions with Rio Bizsols Pvt Ltd. Enhance efficiency and productivity with our specialized services.
" />
        <meta name="keywords" content="" />
      </Helmet>
       <div className="sale_container_bg">
      <div className="sale_banner">
      <img src={odooservice} alt="odooservice" className='sale_banner_img'/>
      <div className="sale_text_col">
      <h1 className='sale_banner_title'>Experience the Future of
      Business with RIO</h1>
      <h3 className='sale_banner_subtitle'>Your Partner in Cutting-Edge Odoo ERP Solutions.</h3>
                   <p>As a premier Odoo ERP development company, RIO specializes in crafting robust and bespoke business solutions tailored to our client's unique needs. Our seasoned team of Odoo developers leverages the power of Odoo’s modular architecture to deliver customized ERP solutions that seamlessly integrate across all business functions.</p> 
                   <p>Trust us to optimize your business processes, enhance productivity, and propel your organization to new heights with our state-of-the-art Odoo ERP implementation.</p>    
        </div>
        </div>

      </div>
      <ClientLogohead/>
      <div className='container'>
        <hr/>
      </div>
      <div className="container">
        <div className="sale_banner1">
        <img src={appointment} alt="appointment"  className='sale_image' />
        <div className="sale_text_col1">
          <h2>Appointments</h2>
          <p>With our advanced solutions, you can optimize appointment booking. reduce administrative overhead, and drive business growth. By leveraging the powerful features of Odoo, we provide tailored solutions that empower you to manage appointments seamlessly. Online booking, calendar integration, resource management, automated reminders, multi-location support, staff scheduling, client database, etc.. are all key features of our Odoo appointment management module</p>
        </div> 
        </div>
        </div>
        <div className='container'>
        <hr/>
      </div>
      <div className="container">
        <div className="sale_banner1">
        <img src={planning} alt="planning"  className='sale_image' />
        <div className="sale_text_col1">
          <h2>Planning</h2>
          <p>With RIO's Odoo planning solutions, you can streamline your project management processes, enhance collaboration, and improve productivity. Our advanced solutions help you optimize resource allocation, track project progress, and deliver successful outcomes for your projects.</p>
          <p>Our planning modules assist with project and task management. Resource Allocation, Time Tracking, Risk Management, Budgeting, and Document Management.</p>
        </div> 
        </div>
        </div>
        <div className='container'>
        <hr/>
      </div>
      <div className="container">
        <div className="sale_banner1">
        <img src={timesheet} alt="timesheet"  className='sale_image' />
        <div className="sale_text_col1">
          <h2>Timesheets</h2>
          <p>With our advanced solutions, you can accurately track employee hours, optimize resource allocation, and drive project success. Leveraging the powerful features of Odoo, we provide tailored solutions that empower you to manage timesheets effectively.</p>
          <p>Our planning modules assist with project and task management. Resource Allocation, Time Tracking, Risk Management, Budgeting, and Document Management.</p>
        </div> 
        </div>
        </div>  
        <div className='container'>
        <hr/>
      </div>
      <div className="container">
        <div className="sale_banner1">
        <img src={field} alt="field"  className='sale_image' />
        <div className="sale_text_col1">
          <h2>Field Services</h2>
          <p>Partner with RIO for Odoo field service management solutions to optimize your field operations, improve service efficiency, and enhance customer satisfaction. Our tailored solutions streamline processes, increase productivity, and drive business growth.</p>
          
        </div> 
        </div>
        </div>  
        <div className="web_bg">
            <h2 className='web_bg_title'>With a track record of successful
            implementations and satisfied clients</h2>
            <p className='web_bg_para'>RIO is trusted by businesses worldwide to deliver exceptional Odoo solutions.

Don't just take our word for it—hear directly from our satisfied clients.</p>
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


export default OdooServices