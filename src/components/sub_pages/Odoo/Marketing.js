import React from 'react'
import '../../../css/salemanagement.css'
import marketing from '../../../assets/images/market_odoo.png'
import ClientLogohead from '../../Home/ClientLogohead'
import ma from '../../../assets/images/marketautomation.jpg'
import email from '../../../assets/images/email_odoo.jpg'
import soical from '../../../assets/images/social_odoo.jpg'
import sms from '../../../assets/images/sms.jpg'
// import account from '../../../assets/images/accounting.jpg'
// import invoice from '../../../assets/images/invoicing.jpg'
// import expense from '../../../assets/images/expense.jpg'
import ContactFrom from '../../Services/ContactFrom'
import { Helmet } from 'react-helmet-async';

function Marketing() {
  const marketing="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599940/rio_main_website/ua6m5pylnmrkuyssghza.jpg"
  const ma ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599927/rio_main_website/wv0ypi43mwysfd7wq3me.jpg"
  const email="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599908/rio_main_website/ff8t9mawqfvbkcd6gnx9.jpg"
  const soical="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599939/rio_main_website/tap9bsf3cv0oy9xkjzb8.jpg"
  const sms="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599939/rio_main_website/u17qqweomhz5x9kvoetp.jpg"
  return (
    <div>
         <Helmet>
        <title>Odoo ERP Marketing Solutions - Rio Bizsols Pvt Ltd
        </title>
        <meta name="description" content="Enhance marketing strategies with Rio Bizsols Pvt Ltd's Odoo ERP solutions. Manage campaigns, analytics, and customer interactions effectively." />
        <meta name="keywords" content="" />
      </Helmet>
       <div className="sale_container_bg">
      <div className="sale_banner">
      <img src={marketing} alt="marketing" className='sale_banner_img'/>
      <div className="sale_text_col">
      <h1 className='sale_banner_title'>Experience the Future of
      Business with RIO</h1>
      <h3 className='sale_banner_subtitle'>Your Partner in Cutting-Edge Odoo ERP Solutions.</h3>
                   <p>As a premier Odoo ERP development company, RIO offers comprehensive Odoo marketing solutions designed to streamline your marketing efforts, enhance customer engagement, and drive business growth. Leveraging the powerful features of Odoo, we provide tailored solutions that empower your marketing team to manage all aspects of your marketing strategy effectively.</p>     
        </div>
        </div>

      </div>
      <ClientLogohead/>
      <div className='container'>
        <hr/>
      </div>
      <div className="container">
        <div className="sale_banner1">
        <img src={ma} alt="marketing"  className='sale_image' />
        <div className="sale_text_col1">
          <h2>Marketing
          Automation</h2>
          <p>Utilize marketing automation to streamline repetitive tasks, such as email follow-ups, lead scoring, and campaign management. Develop automated workflows to interact with your audience based on their behavior and engagement.</p>
          <p>By implementing marketing automation, you can create personalized and timely communications that enhance customer engagement and increase conversion rates. It's important to monitor and analyze the performance of these automated campaigns to improve your marketing strategies.</p>
        </div> 
        </div>
        </div>
        <div className='container'>
        <hr/>
      </div>
      <div className="container">
        <div className="sale_banner1">
        <img src={email} alt="emailmarket"  className='sale_image' />
        <div className="sale_text_col1">
          <h2>Email Marketing</h2>
          <p>With Odoo's intuitive drag-and-drop editor, you can efficiently create and manage highly personalized email campaigns tailored to specific audience segments. This allows you to craft messages that resonate with your recipients, increasing the likelihood of engagement. Furthermore, you can closely monitor campaign performance metrics to gain insights and make data-driven decisions to optimize your email marketing strategy for better results.</p>
        </div> 
        </div>
        </div>
        <div className='container'>
        <hr/>
      </div>
      <div className="container">
        <div className="sale_banner1">
        <img src={soical} alt="soical"  className='sale_image' />
        <div className="sale_text_col1">
          <h2>Social Marketing</h2>
          <p>Manage all your social media activities effortlessly with our Social Media Management tool. Schedule posts in advance, publish content across multiple platforms, and monitor engagement from a single, user-friendly interface. Stay connected with your audience, track important social media metrics, and gain valuable insights to analyze the impact of your social campaigns.</p>
          
        </div> 
        </div>
        </div>  
        <div className='container'>
        <hr/>
      </div>
      <div className="container">
        <div className="sale_banner1">
        <img src={sms} alt="smsmarketing"  className='sale_image' />
        <div className="sale_text_col1">
          <h2>SMS Marketing</h2>
          <p>Utilize RIO's Odoo SMS marketing solution to send targeted messages directly to your customers' mobile phones. Employ SMS for promotions, reminders, and personalized offers to boost engagement and conversion rates. Integrate automated SMS campaigns into your multi-channel strategy for seamless communication.</p>
          
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


export default Marketing