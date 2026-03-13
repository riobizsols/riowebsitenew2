import React from 'react'
import '../../../css/socialmedia.css'
import { BiCheck } from "react-icons/bi";
import ClientLogohead from '../../Home/ClientLogohead';
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Payperaccordion from '../../Accordion/Payperaccordion';
import ContactFrom from '../../Services/ContactFrom';
import { Helmet } from 'react-helmet-async';


function SocialMediaMarketing() {

  const social = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599940/rio_main_website/i5vutwfrlumox7u0t5ib.png"
  const build = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599896/rio_main_website/uimy3nm5qx8zoj17rvjs.png"
  const coustomer = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599903/rio_main_website/kart2lwa4irjqe9jzvgn.png"
  const sales = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599934/rio_main_website/tummvgmhvi0pupgrmmuf.png"
  const vision = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599949/rio_main_website/hlspskijf0actwrfzcxt.png"
  const manufact = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599927/rio_main_website/gcowkh4hyjtdqou7sih7.png"
  const seo = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599935/rio_main_website/qiuubcgrg3djtiy50sld.png"
  const choose = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599938/rio_main_website/htqa97hznyzd40otoqi0.png"

  const accordionItems = [
    { label: "Tailored Strategies", content: "We don’t believe in one-size-fits-all approaches. Our experts craft custom strategies tailored to your brand’s unique voice, audience, and goals." },
    { label: "Creative Content", content: "Break through the noise with our creative content solutions. From eye-catching visuals to compelling copy, we’ll help your brand shine." },
    { label: "Community Building", content: "Engage and nurture your online community with our community-building strategies. We’ll foster genuine interactions that keep your audience coming back for more." },
    { label: "Data-Driven Insights", content: "We don’t guess—we analyze. Our data-driven approach ensures that every decision is backed by insights, maximizing your ROI." },
    
  ];
  return (
  <div>
      <Helmet>
        <title>Boost Social Media Engagement - Rio Bizsols Pvt Ltd
        </title>
        <meta name="description" content="Elevate your brand with Rio Bizsols Pvt Ltd's social media optimization services. Enhance visibility and engagement on all platforms." />
        <meta name="keywords" content="social media engagement,social media optimization, smo social media optimization, social media as marketing strategy,social media strategy" />
      </Helmet>
    
      <div className='sm_banner_bg'>
        <div className='sm_container'>
            <div className='sm_text_column'>
                <h1 className="sm_banner_title">
                Efficiency at Your Fingertips: Scheduled Social Media Posts
                        </h1>
                       <p className='sm_banner_descr'>To connect with your target audience effectively, you require efficient tools. With RIO, you gain access to all the essentials for scheduling social media posts and streamlining the management of your social media strategy.</p>
                        <Link to='/contact'  style={{textDecoration:'none', color:'White'}}>

                       <button className='sm_button'>Let's connect <BiCheck className='sm_icon1'/></button>
</Link> 
            </div>
            <img src={social} alt="social" className='sm_banner_img' />
        </div>
    </div>
    <ClientLogohead/>
        <div className='container'>
        <hr className='b-line' />
        </div>
    <h2 className='sm_title'>
        Why Social Media Engagement is important?
        </h2>
        <p className='sm_txt_description'>Engaging on social media is more than just posting updates—it's a powerful tool for business growth. Here’s why social media engagement is crucial</p>

        <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 ">
              <div className='sm_card'>
          <img src={build} alt="builds_brand" className='sm_card_img'/>
              
                <div className='info'>
                 
               <h2 className='sm_title_head'>Builds Brand <br/>Awareness</h2>
               
                   
                    <p className='sm_descrip_para'>Consistent engagement helps your brand stay top-of-mind. The more your audience interacts with your content, the more they remember and recognize your brand.
                    </p>
                      <Divider style={{ background: 'white', width:310}}/>
                     
                     
                </div>


             </div>
              </div>
              <div className="col-lg-4 col-md-6 ">
              
             <div className='sm_card'>
          <img src={coustomer} alt="enhances_customer" className='sm_card_img'/>
              
                <div className='info'>
                 
               <h2 className='sm_title_head'>Enhances Customer <br/>Loyalty</h2>
               
                   
                    <p className='sm_descrip_para'>Engaging with your audience fosters a sense of community and trust. Responding to comments, messages, and feedback shows that you value your customers, which can lead to increased loyalty and repeat business.
                    </p>
                      <Divider style={{ background: 'white', width:310}}/>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 ">
              <div className='sm_card'>
          <img src={sales} alt="drives_traffic" className='sm_card_img' />
              
                <div className='info'>
                 
               <h2 className='sm_title_head'>Drives Traffic and <br/>Sales</h2>
               
                   
                    <p className='sm_descrip_para'>Engaging content encourages clicks and visits to your website or online store. By guiding your audience through a journey, from awareness to action, you can drive significant traffic and boost sales.
                    </p>
                      <Divider style={{ background: 'white', width:310}}/>
                     
                     
                </div>


             </div>

              </div>
              <div className="col-lg-4 col-md-6 ">
              <div className='sm_card'>
          <img src={vision} alt="provides_valuable" className='sm_card_img' />
              
                <div className='info'>
                 
               <h2 className='sm_title_head'>Provides Valuable <br/>Insights</h2>
               
                   
                    <p className='sm_descrip_para'>Social media interactions offer a wealth of data about your audience’s preferences and behavior. Analyzing this data can help you refine your marketing strategies and better meet your customers’ needs.
                    </p>
                      <Divider style={{ background: 'white', width:310}}/>
                     
                     
                </div>


             </div>

              </div>
              <div className="col-lg-4 col-md-6 ">
              <div className='sm_card'>
          <img src={manufact} alt="improves_customer" className='sm_card_img' />
              
                <div className='info'>
                 
               <h2 className='sm_title_head'>Improves Customer <br/>Service</h2>
               
                   
                    <p className='sm_descrip_para'>Social media is a direct line to your customers. Timely responses to inquiries and issues can enhance your customer service reputation, leading to satisfied customers who are likely to recommend your brand.
                    </p>
                      <Divider style={{ background: 'white', width:310}}/>
                     
                     
                </div>


             </div>

              </div>
              <div className="col-lg-4 col-md-6 ">
              <div className='sm_card'>
          <img src={seo} alt="strengthens_seo" className='sm_card_img' />
              
                <div className='info'>
                 
               <h2 className='sm_title_head'>Strengthens SEO</h2>
               
                   
                    <p className='sm_descrip_para'>Active engagement on social media can improve your search engine rankings. Search engines recognize popular and relevant content, which can lead to higher visibility for your brand.
                    </p>
                      <Divider style={{ background: 'white', width:310}}/>
                     
                     
                </div>


             </div>

              </div>
                 <h2 className='sm_title'>Services We Offer</h2>
                  <Tabs
  defaultActiveKey="contentcreation"
  id="justify-tab-example"
  className="custom-tabs mb-3"
  justify
>
  <Tab eventKey="contentcreation" title={<span className="tab-title">Content <br/> Creation</span>}>
  <span className='tab-para'> Let us bring your brand to life with stunning visuals and captivating copy that stops scrollers in their tracks.</span>
  </Tab>
  <Tab eventKey="CommunityManagement" title={<span className="tab-title">Community Management</span>}>
  <span className='tab-para'>  Build relationships and foster loyalty with our community management services. We’ll handle everything from customer inquiries to reputation management </span>
  </Tab>
  <Tab eventKey="Social Media Advertising" title={<span className="tab-title">Social Media Advertising</span>}>
  <span className='tab-para'> Reach new heights with targeted social media advertising campaigns that drive results and maximize your budget.</span>
  </Tab>
  <Tab eventKey="contact" title={<span className="tab-title">Analytics and <br/>Reporting</span>}>
  <span className='tab-para'> Track your progress and measure your success with our comprehensive analytics and reporting tools. Know what’s working, what’s not, and how to improve.</span>
  </Tab>
</Tabs> 

                  </div>
                 </div>
              <div className='sm_choose_bg'>
                <h2 className='sm_choose_title'>Why Choose Us?</h2>
                 <p className='sm_choose_para'>At RIO, we understand the power of social media. It's not just about posting content; it's about creating meaningful connections with your audience. Here's why our services stand out.</p>  
              <div className="sm_container">
              <img src={choose} alt="choose" className='sm_choose_img'/>
              <div className='sm_text_column'>
             <div className='sm_accordion'>
             <Payperaccordion items={accordionItems} />
             </div>
              

              </div>
              </div>
              </div>
              <h2 className='pay_title2'>Let’s Discuss Your Project</h2>
        <p className='pay_txt_description'>Ready to take your content marketing to the next level? Partner with RIO and watch your brand thrive. Contact us today for a free consultation and discover how we can help you achieve your marketing goals.</p>
       <ContactFrom/>
            </div>
         
  )
}

export default SocialMediaMarketing