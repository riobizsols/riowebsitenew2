import React from 'react'
import '../WebDevelopment/WebUIUX.css'
import { Helmet } from 'react-helmet-async';
import ClientLogohead from '../../Home/ClientLogohead'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Link } from 'react-router-dom'
import Accordion_web from '../../Accordion/AccordionWeb';
import ContactFrom from '../../Services/ContactFrom'
import Slider from 'react-slick';

const WebUIUX = () => {

  const w_s_banner = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599952/rio_main_website/cwlxbfxzvn34wryynyln.jpg"
  const ui_ux_2 = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599947/rio_main_website/xtwihrjb7p1wb95mnz7b.svg"
  const ui_ux_1 = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599954/rio_main_website/vfp3yh1myj9ycdpixa7s.jpg"
  const web_design  = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599950/rio_main_website/engkjst8tbjq755btyst.png"
  const respons_design  = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599933/rio_main_website/bm22vofvvti0iocsxwet.png"
  const visual  = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599905/rio_main_website/hp8cpnrlszgelvdfbnwf.png"
  const user_research = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599932/rio_main_website/d6omb3nsypdom7930ixq.png"
  const wireframing = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599938/rio_main_website/armypjv5vyxb9vjvxxgd.png"
  const usability = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599947/rio_main_website/i77budygkpo6ohccmbwa.png"
  const consumer_centric = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599899/rio_main_website/eaxjqtl7x3nxd4utk0qm.png"
  const rating = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599913/rio_main_website/vqmqm1u1ecnnvxlbbrlo.png"
  const training = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599945/rio_main_website/ikdvtybokoicv6x8kzvb.png"
  //const  = ""
  //const  = ""

    const accordionItems = [
        { label: "First Impressions Matter", content: "Your website is often the first point of contact between your brand and potential customers. A modern, well-designed website creates a positive first impression, establishing credibility and trust from the outset." },
        { label: "Enhanced User Experience", content: "A website that is easy to navigate, visually appealing, and fast-loading keeps users engaged. Good UX/UI design ensures that visitors can find what they need quickly and effortlessly, reducing bounce rates and increasing the likelihood of conversions." },
        { label: "Competitive Advantage", content: "In a crowded marketplace, a superior website design can set you apart from the competition. Investing in UX/UI design demonstrates a commitment to quality and user satisfaction, which can be a decisive factor for customers choosing between similar products or services." },
        { label: "Mobile Optimization", content: "With more users accessing websites via mobile devices, having a responsive design is crucial. UX/UI services ensure that your site performs well across all devices, providing a seamless experience for all users." },
        { label: "SEO Benefits", content: "A well-designed website is also optimized for search engines. Good UX/UI practices, such as fast loading times, mobile-friendliness, and clear navigation, contribute to better search engine rankings, driving more organic traffic to your site." },
        { label: "Customer Retention and Loyalty", content: "A positive user experience fosters customer satisfaction and loyalty. When users have a great experience on your site, they are more likely to return and recommend your services to others, leading to increased customer retention and word-of-mouth referrals." },
      ];

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
        <title>Best UI/UX Design & Web Development Services - RioBizSols
        </title>
        <meta name="description" content="Discover expert UI/UX design and web development with RioBizSols. We offer the best services for web apps and websites. Contact us now!" />
        <meta name="keywords" content="best ui ux design companies in usa, ui ux design services usa, ui ux design agency in usa" />
      </Helmet>
       <div className='web-banner'>
            <img className='web-img' src={w_s_banner} alt="w_s_banner" />
            <div className='web-banner-wm'>Web-(UI/UX)</div>
            
        </div>
        <div className="web_main_content">
          <div className="web_main_intro">
           <div className="container_web_main">
          <div className="w_m_con">
          <h1 className='w_m_h'>Crafting Exceptional Digital Experiences</h1>
          <p className='w_m_p'>Your website is the first interaction potential customers have with your brand. At Rio, we specialize in creating stunning, user-centric web designs that not only capture your brand’s essence but also provide an exceptional user experience.</p>
          <div ></div>
          <Link to='/contact'>
        <button className="get-started">LET'S CONNECT US! <ArrowCircleRightIcon/></button></Link>
          </div>
          <div className="w_m_img">
          <img className='web_main_img' src={ui_ux_2} alt="ui_ux_2"/>
          </div>
         </div>
          </div>
         <ClientLogohead/>
            <hr />
          <div className="stand-h">
              Why UX/UI web design is important for your business?
             </div>
           <div className="digital-service-bg" style={{marginTop:'0'}}>
             <div className="container_digital_ser1" style={{justifyContent:'center', alignItems:'center'}}>
              <div className="text-column">
                <img src={ui_ux_1} alt="ui_ux_1" className="digital-ser-img" /> 
               </div>
               <div>
               <section className='digital_ser_wapp' style={{marginTop:'0'}}>
               <div className="text-column">
                <h2 className='digital_ser_wapp_title'>Why invest in UI/UX Web Design Services?</h2>
                <p className='digit-ser-para1'>Having a well-designed website is more critical than ever in today’s evolving digital landscape. Here's why UX/UI web design services are essential.</p>
                <Accordion_web items={accordionItems} />
                </div>
               </section>
             </div>
           </div>
      </div>

        <h2 className='pay_title1'>UI/UX Web Design Services Section</h2>
        <p className='pay_txt_description'>At Rio, we turn visions into reality, creating digital experiences that leave a lasting impression. We aim to build something extraordinary together.</p>
        <hr />
        <div className="ui_ux_web">
          <h3 style={{color:'#1B75BB', textDecoration:'underline'}}>User Interface (UI) Design</h3>
          <p>We create visually appealing and intuitive interfaces that engage users from the moment they land on your site. Our designs are tailored to reflect your brand’s identity, ensuring a cohesive look and feel across all digital touchpoints.</p>
        </div>
        <div className='pay_grid3'>
            <div className="pay_grid3_column">
                <img src={web_design} alt="web_design" className='pay_icon_img1'/>
            <h3 className='pay_text_title'>Custom Design Solutions</h3>
            <p className='pay_text_des'>Bespoke designs that align with your brand’s vision and goals.</p>
            </div>
            
            <div className="pay_grid3_column">
                <img src={respons_design} alt="respons_design" className='pay_icon_img1'/>
            <h3 className='pay_text_title'>Responsive Design</h3>
            <p className='pay_text_des'>Seamless user experiences across all devices – desktops, tablets, and mobiles.</p>
            </div>
            <div className="pay_grid3_column">
                <img src={visual} alt="visual" className='pay_icon_img1'/>
            <h3 className='pay_text_title'>Visual Consistency</h3>
            <p className='pay_text_des'>Cohesive design elements that enhance brand recognition.</p>
            </div>
        </div>
        <div className="ui_ux_web">
          <h3 style={{color:'#1B75BB', textDecoration:'underline'}}>User Experience (UX) Design</h3>
          <p>We prioritize usability and user satisfaction, crafting experiences that are not only beautiful but also easy to navigate. Our UX designs are data-driven and user-focused, ensuring that your website meets the needs and expectations of your audience.</p>
        </div>
        <div className='pay_grid3'>
            <div className="pay_grid3_column">
                <img src={user_research} alt="user_research" className='pay_icon_img1'/>
            <h3 className='pay_text_title'>User Research</h3>
            <p className='pay_text_des'>In-depth analysis to understand your audience and their behaviors.</p>
            </div>
            
            <div className="pay_grid3_column">
                <img src={wireframing} alt="wireframing" className='pay_icon_img1'/>
            <h3 className='pay_text_title'>Wireframing & Prototyping</h3>
            <p className='pay_text_des'>Blueprinting the user journey for optimal engagement and conversion.</p>
            </div>
            <div className="pay_grid3_column">
                <img src={usability} alt="usability" className='pay_icon_img1'/>
            <h3 className='pay_text_title'>Usability Testing</h3>
            <p className='pay_text_des'>Ensuring a seamless and intuitive user experience through rigorous testing.</p>
            </div>
        </div>

      <div className="brand_container1" style={{margin:'3rem 0 0'}}>
      <div className="web_column">
      <h2 className='web_title' style={{color:'#1B75BB'}}>Why choose us Section?</h2>
      <p  className='web_para'>From expert design and crafting compelling content to seamless launch, everything is handled by us for you.</p>
      </div>
        <div className='web-slider_slick_container'>
      <Slider {...settings}>
         <div className='web-slider_box'>
        <img className='web-slider_box_icon'  src={rating} alt="rating"/>
          <p className='web-slider_box_icon_title'>Expertise & Experience</p>
          <p className='web-slider_box_icon_p'>With years of experience in web design and UI/UX, our team possesses the skills and knowledge to bring your vision to life. We stay updated with the latest design trends and technologies to provide cutting-edge solutions.
          </p>
        </div>
        <div className='web-slider_box' >
        <img className='web-slider_box_icon' src={consumer_centric} alt="consumer_centric"/>
          <p className='web-slider_box_icon_title'>Customer-Centric Approach</p>
          <p className='web-slider_box_icon_p'>At Rio, our clients are at the heart of everything we do. We collaborate closely with you to understand your needs, objectives, and preferences, delivering results that exceed your expectations.</p>
        </div>
        <div className='web-slider_box'>
        <img className='web-slider_box_icon' src={training} alt="training"/>
        <p className='web-slider_box_icon_title'>Proven Track Record</p>
        <p className='web-slider_box_icon_p'>We have successfully transformed digital experiences for numerous clients across various industries. Our portfolio showcases a diverse range of projects, reflecting our versatility and commitment to excellence</p>
        </div>
      </Slider>
        </div>   
       </div>
       <div className="contact-con">
        <div className="contact-h">Let’s discuss your project Section</div>
        <div className="contact-p">Ready to elevate your online presence with exceptional web design? Contact Rio today and let’s create a website that not only looks amazing but also delivers an outstanding user experience.</div>
      </div>
      <ContactFrom/>
      </div>
    </div>
  )
}

export default WebUIUX