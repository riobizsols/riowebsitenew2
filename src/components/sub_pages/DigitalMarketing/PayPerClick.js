import React from 'react'
import '../../../css/contentMarketing.css'
import '../../../css/payperclick.css'
import { BiCheck } from "react-icons/bi";
import ClientLogohead from '../../Home/ClientLogohead';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Payperaccordion from '../../Accordion/Payperaccordion';
import ContactFrom from '../../Services/ContactFrom';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';


function PayPerClick() {

    const ppc = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599930/rio_main_website/uunhdvmfqvttohdguixm.png"
    const high = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599915/rio_main_website/wpr3dalihevt0aaea7ed.png"
    const target = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599941/rio_main_website/z4jq79gy8amwadphkdht.png"
    const cost = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599902/rio_main_website/jlivfxhzuenngkaocfi8.png"
    const measurable = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599928/rio_main_website/fedjzdl1abyhmq2woxln.jpg"
    const brand = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599896/rio_main_website/uimy3nm5qx8zoj17rvjs.png"
    const flexinility = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599913/rio_main_website/o0mk2lfz76rcevsympub.png"
    const trust = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599903/rio_main_website/eufcxjpzfzx1ybmmeq0k.png"
    const payper = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599929/rio_main_website/uqsewe0wqttsmddl7xkc.png"
    const social = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599939/rio_main_website/nryjjmptbqidqblle8id.jpg"
    const accordionItems = [
        { label: "Expert Management", content: "Our team of certified PPC specialists has years of experience in managing successful campaigns across various industries." },
        { label: "Customized Strategies", content: "We tailor our PPC strategies to fit your unique business goals and target audience, ensuring optimal performance and results." },
        { label: "Transparent Reporting", content: "Stay informed with detailed reports and insights into your campaign’s performance, making it easy to track your ROI." },
        { label: "Continuous Optimization", content: "We continuously monitor and adjust your campaigns to improve performance and maximize your ad spend." },
        
      ];

  return (
    <div>
        <Helmet>
        <title>PPC Marketing Agency - Rio Bizsols Pvt Ltd        </title>
        <meta name="description" content="Discover top Google Ads management services. Rio Bizsols Pvt Ltd offers expert PPC advertising solutions for optimal ROI and growth." />
        <meta name="keywords" content="PPC Marketing Agency, pay per click advertising companies, ppc advertising agencies, google advertising company, Google Ads Companies,Google Ads Agency" />
      </Helmet>
        <div className='content_bg'>
            
            <div className="pay_container">
                <img src={ppc} alt="Drive_Target" className='pay_banner_img'/>
                    <div className="content_text_column">
                        <h5 className='pay_subtitle'>Drive Targeted Traffic, Maximize Your ROI</h5>
                        <h1 className="pay_banner_title">
                          Gain High-Level Brand Exposure and Boost Conversions
                        </h1>
                        <p className='pay_banner_des'>Boost your sales with PPC services that guarantee a 25% increase in ROI. Let’s turn clicks into customers and drive your business success with our proven PPC strategies. Experience the power of our full-service solutions, backed by an award-winning team, and cutting-edge technology.</p>
                        <Link to='/contact'  style={{textDecoration:'none', color:'White'}}>

                        <button className='content_button'>Let's connect <BiCheck className='content_icon1'/></button>
                    
                    </Link></div>
            </div>
                 
        </div>

        <ClientLogohead/>
        <div className='container'>
        <hr className='b-line' />
        </div>
        <h2 className='pay_title1'>Why PPC is important for Modern Business?</h2>
        <p className='pay_txt_description'>Investing in PPC is not just an option but a necessity for businesses looking to thrive in today's digital age. Standing out from the competition and reaching your target audience effectively is more crucial than ever. Here’s why PPC (Pay-Per-Click) advertising is an indispensable tool today</p>
        <div className='pay_icon_container'>
           <div className="pay_icon_column">
                <img src={high} alt="Immediate" className='pay_icon_img' />
                    <div className="pay_text_column">
                        <h3 className='pay_text_title'>Immediate Visibility</h3>
                        <p className='pay_text_des'>PPC advertising ensures your business appears at the top of search engine results pages and social media platforms, instantly boosting your visibility. Unlike organic search efforts, which can take time to build, PPC provides immediate exposure to your target audience.</p>
                    </div>
           </div>
           <div className="pay_icon_column">
                <img src={target} alt="Targeted" className='pay_icon_img' />
                    <div className="pay_text_column">
                        <h3 className='pay_text_title'>Targeted Reach</h3>
                        <p  className='pay_text_des'>With PPC, you can target your ads to specific demographics, locations, devices, and even times of the day. This precise targeting helps you connect with potential customers who are most likely to be interested in your products or services, increasing the chances of conversion.</p>
                    </div>
           </div>
        </div>

        <div className='pay_icon_container1'>
           <div className="pay_icon_column">
                <img src={cost} alt="cost_effective" className='pay_icon_img' />
                    <div className="pay_text_column">
                        <h3 className='pay_text_title'>Cost-Effective Advertising</h3>
                        <p className='pay_text_des'>PPC allows you to set your budget and only pay when someone clicks on your ad. This means you’re spending money on engaged users who are actively interested in what you offer, making your advertising budget more efficient and effective.</p>
                    </div>
           </div>
           <div className="pay_icon_column">
                <img src={measurable} alt="Measurable" className='pay_icon_img' />
                    <div className="pay_text_column">
                        <h3 className='pay_text_title'>Measurable Results</h3>
                        <p  className='pay_text_des'>One of the key advantages of PPC is the ability to track and measure every aspect of your campaign. From impressions and clicks to conversions and ROI, you get detailed insights that help you understand what works and where to optimize.</p>
                    </div>
           </div>
        </div>
        <div className='pay_grid3'>
            <div className="pay_grid3_column">
                <img src={brand} alt="brand" className='pay_icon_img1'/>
            <h3 className='pay_text_title'>Enhanced Brand Recognition</h3>
            <p className='pay_text_des'>Consistent PPC campaigns keep your brand top-of-mind for your audience. Even if users don’t click on your ads initially, repeated exposure increases brand awareness and can influence their decisions down the line.</p>
            </div>
            
            <div className="pay_grid3_column">
                <img src={flexinility} alt="flexinility" className='pay_icon_img1'/>
            <h3 className='pay_text_title'>Adaptability and Flexibility</h3>
            <p className='pay_text_des'>PPC campaigns are highly adaptable and can be adjusted in real time to respond to market changes, emerging trends, and performance data. This flexibility ensures your campaigns are always optimized for maximum impact.</p>
            </div>
            <div className="pay_grid3_column">
                <img src={trust} alt="trust" className='pay_icon_img1'/>
            <h3 className='pay_text_title'>Competitive Advantage</h3>
            <p className='pay_text_des'>Many businesses are already leveraging PPC to gain an edge in their industry. By incorporating PPC into your marketing strategy, you can compete effectively, capture market share, and ensure your business remains relevant in an increasingly competitive environment.</p>
            </div>
        </div>
        <div className='pay_service_bg'>
        <h2 className='pay_grid2_title'>PPC Services</h2>
            <div className='pay_grid2'>
                <img src={payper} alt="payper" className='pay_grid2_img' />
                <div className='pay_column'>
                
                <div className='pay_icon_ser'>
                <IoIosCheckmarkCircleOutline className='pay_icon'/>
                <div className='pay_column'>
                    <h3 className='pay_icon_title'>Google Ads</h3>
                    <p className='pay_icon_des'>Leverage the power of the world’s largest search engine to reach potential customers exactly when they are searching for your products or services.</p>
                    </div>
               </div>
               <div className='pay_icon_ser'>
                <IoIosCheckmarkCircleOutline className='pay_icon'/>
                <div className='pay_column'>
                    <h3 className='pay_icon_title'>Bing Ads</h3>
                    <p className='pay_icon_des'>Tap into a significant audience with Bing Ads and expand your reach beyond Google.</p>
                    </div>
               </div>
               <div className='pay_icon_ser'>
                <IoIosCheckmarkCircleOutline className='pay_icon'/>
                <div className='pay_column'>
                    <h3 className='pay_icon_title'>Social Media Advertising</h3>
                    <p className='pay_icon_des'>Drive engagement and conversions with highly targeted ads on platforms like Facebook, Instagram, LinkedIn, and Twitter.</p>
                    </div>
               </div>
               <div className='pay_icon_ser'>
                <IoIosCheckmarkCircleOutline className='pay_icon'/>
                <div className='pay_column'>
                    <h3 className='pay_icon_title'>Remarketing Campaigns</h3>
                    <p className='pay_icon_des'>Re-engage visitors who have previously interacted with your website and convert them into loyal customers.</p>
                    </div>
               </div>
               <div className='pay_icon_ser'>
                <IoIosCheckmarkCircleOutline className='pay_icon'/>
                <div className='pay_column'>
                    <h3 className='pay_icon_title'>Display Advertising</h3>
                    <p className='pay_icon_des'>Increase brand awareness with visually compelling ads across a vast network of websites.</p>
                    </div>
               </div>
                
                </div>
            </div>
        </div>
        <h2 className='pay_title1'>Why Choose Us?</h2>
        <div className='pay_grid_choose'>
           <img src={social} alt="social" 
           className='pay_choose_img'/>
             
             <Payperaccordion items={accordionItems} />
        </div>
        <h2 className='pay_title2'>Let’s Discuss Your Project</h2>
        <p className='pay_txt_description'>Ready to take your content marketing to the next level? Partner with RIO and watch your brand thrive. Contact us today for a free consultation and discover how we can help you achieve your marketing goals.</p>
        <ContactFrom/>
    </div>
  )
}

export default PayPerClick