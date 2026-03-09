import React from 'react'
import '../WebDevelopment/WebMainten.css'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'
import ClientLogohead from '../../Home/ClientLogohead'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Slider from 'react-slick';
import ContactFrom from '../../Services/ContactFrom'


const WebMainten = () => {

  const w_s_banner = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599952/rio_main_website/cwlxbfxzvn34wryynyln.jpg"
  const w_s_img = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599952/rio_main_website/lycrbw3amyhg71bvu7zu.png"
  const customer_service = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599903/rio_main_website/irwstqof0k0graehffqq.png"
  const share = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599937/rio_main_website/yzbbibgmcsssj2umkgel.png"
  const time_mony = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599943/rio_main_website/jofgppm6z2ddbtphdp39.png"
  const perform = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599904/rio_main_website/mnxbgqyualfr5dlnihaw.png"
  const content = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1733163584/writing_zyjerb.png"
  const seo = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599924/rio_main_website/shj3zoabrp7ccon0mosk.png"
  const install = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599919/rio_main_website/xzoxgdkeda95i0yth1a4.png"
  const tailored = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599952/rio_main_website/meiesqjm03cpono8kkmy.png"
  const imple = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599918/rio_main_website/vehlzqivcepv4jjwyrmi.png"
  const out = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599929/rio_main_website/rbqbhnmuwdhvgwzqixxj.png"
  const ourteams = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599929/rio_main_website/yohvomyvgyvhwjhcgcn2.png"
  const people = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599929/rio_main_website/n4tozb4pxbah0gih8n7k.png"
  const Creativity = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599902/rio_main_website/h1tnh5ik8nnkrfldouon.png"
  const security = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599935/rio_main_website/h7e3dlddmnzytlrfcpxx.png"
  const seoicon = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599936/rio_main_website/fnng9ocmpgphe6df20ml.png"
  const support = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599929/rio_main_website/zna2bg4bgjtilvdnkmt7.png"

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
    <div style={{backgroundColor:' rgb(215 215 215 / 43%)'}}>
      <Helmet>
        <title>Website Maintenance Services | RioBizSols
        </title>
        <meta name="description" content="RioBizSols offers reliable website maintenance services. Trust us for WordPress website upkeep and expert support from leading maintenance companies." />
        <meta name="keywords" content="website maintenance, website maintenance packages, website maintenance services, wordpress website maintenance, website maintenance companies" />
      </Helmet>
        <div className='web-banner'>
            <img className='web-img' src={w_s_banner} alt="w_s_banner" />
            <div className='web-banner-wm'>Web-Maintenance</div>
        </div>
        <div className="web_main_content">
          <div className="web_main_intro">
        <div className="container_web_main">
          <div className="w_m_img">
          <img className='web_main_img' src={w_s_img} alt="w_s_img"/>
          </div>
          <div className="w_m_con">
          <h1 className='w_m_h'>Keep Your Website Running Smoothly</h1>
          <p className='w_m_p'>Your Website Deserves the Best Care! That’s why we offer comprehensive web maintenance services to ensure your website remains secure, updated, and optimized at all times. With RIO, you can rest assured that your website is always in good hands, allowing you to focus on what you do best – running your business.</p>
          <div ></div>
          <Link to='/contact'>
        <button className="get-started">LET'S CONNECT US! <ArrowCircleRightIcon/></button></Link>
          </div>
         </div>
          </div>
          <ClientLogohead/>
          <hr />
          <div className="container">
            <h2 className="odoo_service_title" style={{color:'#27589E', margin:'40px 0'}}>Web Maintainance Services</h2>
         </div>
            <section className='odoo_wapp'>
            <div className="black staff-grid">
               <img src={customer_service} alt="customer_service" />
               <h2>Regular Updates</h2>
               <p>We regularly update your website’s core software and plugins to the latest versions, ensuring compatibility, enhanced features, and protection against vulnerabilities. This keeps your site running smoothly and securely.</p>
               </div>
            <div className="black staff-grid">
               <img src={share} alt='share'/>
               <h2>Backup Solutions</h2>
               <p>Our backup solutions involve creating daily, weekly, or monthly backups of your entire website, including its data and content. This ensures that you can quickly restore your site to its previous state in the event of data loss, server issues, or cyberattacks.</p>
            </div>
          </section>
            <section className='odoo_wapp'>
            <div className="black staff-grid">
               <img src={time_mony} alt="time_mony" />
               <h2>Security Monitoring</h2>
               <p>We provide continuous security monitoring to detect and address potential threats, such as malware, hacking attempts, and other vulnerabilities. Regular security audits and the application of necessary patches help protect your website and sensitive customer data.</p>
            </div>
            <div className="black staff-grid">
               <img src={perform} alt='perform'/>
               <h2>Performance Optimization</h2>
               <p>Our performance optimization services focus on improving your website’s load times and overall speed. We achieve this through techniques such as image optimization, code minification, and server performance tuning, which enhances the user experience and boosts search engine rankings.</p>
            </div>
          </section>
            <section className='odoo_wapp'>
            <div className="black staff-grid">
               <img src={content} style={{width:'64px'}} alt="content" />
               <h2>Content Management</h2>
               <p>We assist you in updating and managing your website’s content, ensuring it remains fresh, engaging, and relevant to your audience. This includes adding new pages, blog posts, images, and other multimedia, and optimizing existing content for better readability and SEO.</p>
            </div>
            <div className="black staff-grid">
               <img src={seo} style={{width:'64px'}} alt='seo'/>
               <h2>SEO Maintenance</h2>
               <p>Our SEO maintenance services include regular audits to identify areas for improvement, and updating meta tags, keywords, and content to align with the latest search engine algorithms. This helps maintain and improve your website’s visibility and ranking on search engines, driving more organic traffic to your site.</p>
            </div>
          </section>

          <div className="work_wm">
            <div className="work_header">How It Works!</div>
            <div className="work_boxs">
              <div className="work_box1">
                <img src={install} alt="install" />
                <h3>Initial Assessment</h3>
                <p>We start with a thorough review of your current website to identify any issues and areas for improvement.</p>
              </div>
              <div className="work_box2">
                <img src={tailored} alt="tailored" />
                <h3>Tailored Plan</h3>
                <p>Based on our assessment, we create a customized maintenance plan that suits your specific needs.</p>
              </div>
              <div className="work_box1">
                <img src={imple} alt="imple" />
                <h3>Implementation</h3>
                <p>Our team gets to work, implementing updates, backups, security measures, and optimizations.</p>
              </div>
              <div className="work_box2">
                <img src={out} alt="out" />
                <h3>Ongoing Support</h3>
                <p>We provide continuous monitoring, and regular updates, and are always available to support you with any issues or changes.</p>
              </div>
            </div>
          </div>

          <div className="brand_container1">
      <div className="web_column">
      <h2 className='web_title' style={{color:'#27589E'}}>Why Choose RIO for Web Maintenance?</h2>
      <p className='web_para'>Your Website Deserves the Best Care! That’s why we offer comprehensive web maintenance services to ensure your website remains secure, updated, and optimized at all times. With RIO, you can rest assured that your website is always in good hands, allowing you to focus on what you do best – running your business.</p>
      <div className="Our-Creative-Team">
          Our Maintenance Team
          <a href="https://www.linkedin.com/company/rio-business-solutions-usa/people/">
          <img src={ourteams} alt="ourteams" />
          </a>
          </div>
      </div>
        <div className='web-slider_slick_container'>
      <Slider {...settings}>
         <div className='web-slider_box'>
        <img className='web-slider_box_icon' src={people} alt="people"/>
          <p className='web-slider_box_icon_title'>Expert Team</p>
          <p className='web-slider_box_icon_p'>Our skilled professionals have years of experience in web development and maintenance, ensuring your site is in capable hands.</p>
        </div>
        <div className='web-slider_box' style={{height:'400px' , overflowY:'visible'}}>
        <img className='web-slider_box_icon' src={seoicon} alt="seoicon"/>
          <p className='web-slider_box_icon_title'>Proactive Monitoring</p>
          <p className='web-slider_box_icon_p'>We constantly monitor your site to detect and resolve issues before they impact your business.</p>
        </div>
        <div className='web-slider_box'>
        <img className='web-slider_box_icon' src={Creativity} alt="Creativity"/>
        <p className='web-slider_box_icon_title'>Customized Solutions</p>
        <p className='web-slider_box_icon_p'>We tailor our maintenance plans to meet your website's and business goals' specific needs.</p>
        </div>
        <div className='web-slider_box'>
        <img className='web-slider_box_icon' src={security} alt="security"/>
          <p className='web-slider_box_icon_title'>Security First</p>
          <p className='web-slider_box_icon_p'>Protect your site from threats with our robust security measures, including regular updates and security patches.</p>
        </div>
        <div className='web-slider_box'>
        <img className='web-slider_box_icon' src={support} alt="support"/>
          <p className='web-slider_box_icon_title'>24/7 Support</p>
          <p className='web-slider_box_icon_p'>Our team is available around the clock to address any issues and keep your website running smoothly.</p>
        </div>
      </Slider>
    </div>   
      </div>

      <div className="contact-con">
        <div className="contact-h">
        Talk To Expert
        </div>
        <div className="contact-p">Ready to take the stress out of website maintenance? Contact RIO today to learn more about our services and how we can help keep your website in top shape.</div>
      </div>
      <div className="wm_contact">
      <ContactFrom/>
      </div>
        </div>
    </div>
  )
}

export default WebMainten