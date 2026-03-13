import React from 'react'
import '../WebDevelopment/WebAnalytics.css'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom'
import ClientLogohead from '../../Home/ClientLogohead'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ContactFrom from '../../Services/ContactFrom'

const WebAnalytics = () => {

  const w_s_banner = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599952/rio_main_website/cwlxbfxzvn34wryynyln.jpg"
  const remove_bg = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599933/rio_main_website/qntivzornwgctrkitth0.png"
  const seo = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599936/rio_main_website/fnng9ocmpgphe6df20ml.png"
  const web_design = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1733163584/writing_zyjerb.png"
  const data = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599904/rio_main_website/mnxbgqyualfr5dlnihaw.png"
  const web_analytics = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599949/rio_main_website/bbamzg0oijsjeklhlxtl.png"
  const software_develop = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599940/rio_main_website/fymxgslqcf3ydt7dyryw.png"
  const expert_team = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599912/rio_main_website/fevsvxm4rjkrmfeoqniy.png"
  const custom_solu = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599904/rio_main_website/wnwbdy4b1oth18ipq6xb.png"
  const cutting_edge = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599904/rio_main_website/bmxnxqmzz1pfftao7e9p.png"
  const webdevelop = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599951/rio_main_website/ocwq0kievfnsgh5ob1c2.png"
  const dedicate_support = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599905/rio_main_website/mybzuqscbiisjo4wujsk.png"

  return (
    <div style={{backgroundColor:' rgb(215 215 215 / 43%)'}}>
      <Helmet>
        <title>Top Web Analytics Company | RioBizSols
        </title>
        <meta name="description" content="RioBizSols is a leading web analytics agency offering Google Analytics consulting services. Optimize your data with the best websites for analytics." />
        <meta name="keywords" content="website analytics company, web analytics agency, best websites for data analytics, google analytics consulting services" />
      </Helmet>
        <div className='web-banner'>
            <img className='web-img' src={w_s_banner} alt="w_s_banner" />
            <div className='web-banner-wm'>Web-Analytics</div>
        </div>
        
        <div className="web_main_content">
          <div className="web_main_intro">
        <div className="container_web_main">
          <div className="w_m_img">
          <img className='web_main_img' src={remove_bg} alt="remove_bg"/>
          </div>
          <div className="w_m_con">
          <h1 className='w_m_h'>Transform Data into Actionable Insights!</h1>
          <p className='w_m_p'>Unlock the power of data with RIO! Transform your business with expert web analytics services. We specialize in delivering comprehensive web analytics solutions designed to help businesses thrive in the digital age. Our team of experts leverages cutting-edge technology and data-driven insights to enhance your online performance, drive growth, and maximize RIO.</p>
          <div ></div>
          <Link to='/contact'>
        <button className="get-started">LET'S CONNECT US! <ArrowCircleRightIcon/></button></Link>
          </div>
         </div>
          </div>
          <ClientLogohead/>
          <hr />
          <div className="container">
            <h2 className="odoo_service_title" style={{color:'#27589E', margin:'40px 0'}}>We Provide Best Services</h2>
         </div>
            <section className='odoo_wapp'>
            <div className="black staff-grid">
               <img src={seo} style={{width:"64px"}} alt="seo" />
               <h2>Advanced Website Analytics</h2>
               <p>Gain deep insights into your website's performance with our advanced analytics services. We provide detailed reports and actionable recommendations to optimize user experience, increase engagement, and boost conversions</p>
               </div>
            <div className="black staff-grid">
               <img src={web_design} style={{width:"64px"}} alt='web_design'/>
               <h2>Custom Dashboard Development</h2>
               <p>Visualize your data like never before. Our custom dashboards are tailored to your specific needs, allowing you to track key metrics in real time and make informed decisions quickly and efficiently.</p>
            </div>
          </section>
            <section className='odoo_wapp'>
            <div className="black staff-grid">
               <img src={data} alt="data" />
               <h2>Conversion Rate Optimization (CRO)</h2>
               <p>Turn visitors into customers with our CRO strategies. We analyze user behavior, test various elements, and implement proven techniques to improve your website's conversion rates and enhance overall performance.</p>
            </div>
            <div className="black staff-grid">
               <img src={web_analytics} alt='web_analytics'/>
               <h2>SEO and Content Analytics</h2>
               <p>Understand how your content performs and ranks in search engines. Our SEO and content analytics services help you identify opportunities, refine your strategy, and stay ahead of the competition.</p>
            </div>
          </section>
            <section className='odoo_wapp'>
            <div className="black staff-grid">
               <img src={software_develop} style={{width:'64px'}} alt="software_develop" />
               <h2>E-commerce Analytics</h2>
               <p>Maximize your online store's potential with our e-commerce analytics services. From tracking sales and customer behavior to optimizing product listings and marketing campaigns, we provide the insights you need to drive revenue growth.</p>
            </div>
          </section>
               
  <div className="wave-container" style={{margin:'5rem 0'}}>
    <div className='wave-head-wa'>Why Choose RIO for Web Analytics?</div>
    <hr />
      <div className="wave-content" >
        <div className="wave-img">
          <div className="wave-imgs-content">
            <img src={expert_team} alt="expert_team" />
            <h4>Expert Team</h4>
            <p>Our seasoned analysts and data scientists bring years of experience and industry knowledge to every project.</p>
          </div>
          <div className="wave-imgs-content">
             <img src={custom_solu} alt="custom_solu" />
             <h4>Customized Solutions</h4>
             <p>We tailor our services to meet the unique needs of your business, ensuring maximum impact and relevance</p>
          </div>
          <div className="wave-imgs-content">
             <img src={cutting_edge} alt="cutting_edge" />
             <h4>Cutting-Edge Tools</h4>
             <p>We use the latest analytics tools and technologies to provide accurate, actionable insights.</p>
          </div>
          <div className="wave-imgs-content">
             <img src={webdevelop} alt="webdevelop" />
             <h4>Proven Results</h4>
             <p>Our data-driven approach has helped countless businesses improve their online performance and achieve their goals.</p>
          </div>
          <div className="wave-imgs-content">
             <img src={dedicate_support} alt="dedicate_support" />
             <h4>Dedicated Support</h4>
             <p>We're here to support you every step of the way, from initial setup to ongoing optimization.</p>
          </div>
        </div>
      </div>
  </div>    

      <div className="contact-con">
        <div className="contact-h">
        Let’s Discuss Your Project
        </div>
        <div className="contact-p">Ready to take your business to the next level?
        Contact RIO Analytics experts for a free consultation and discover how our web analytics services can transform your online presence.</div>
      </div>
      <div className="wm_contact">
      <ContactFrom/>
      </div>
        </div>
    </div>
  )
}

export default WebAnalytics