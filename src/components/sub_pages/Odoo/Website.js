import React from 'react'
import '../../../css/website.css'
import odooweb from '../../../assets/images/websiteodoo.png'
import ClientLogohead from '../../Home/ClientLogohead'
import odoowebdev from '../../../assets/images/odoweb_dev.png'
import ecommerce from '../../../assets/images/ecommerce.png'
import logo from '../../../assets/images/riologo.png'
import blog from '../../../assets/images/blog.png'
import live from '../../../assets/images/Live-Chat.png'
import ContactFrom from '../../Services/ContactFrom'
import { Helmet } from 'react-helmet-async';

function Website() {
    const odooweb="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599953/rio_main_website/swbeof4f19rwhpbbr4k8.png"
    const odoowebdev="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599928/rio_main_website/m4cliid7bj5sx10flesg.png"
    const ecommerce ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599907/rio_main_website/j4phpnxn1yc5u6d3jqzp.png"
    const blog="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599896/rio_main_website/hhcuszkfwubseugvuzx4.png"
    const live="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599925/rio_main_website/xmxc0efqo0x5r9gdquhk.png"
    const logo ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599933/rio_main_website/wx9qqfbghlhzhykmqx6v.png"

    return (
    <div>
       <Helmet>
        <title>Custom Odoo ERP Website Development - Rio Bizsols Pvt Ltd</title>
        <meta name="description" content="Develop a customized Odoo ERP website with Rio Bizsols Pvt Ltd. Improve functionality and business processes with our expert development services." />
        <meta name="keywords" content="" />
      </Helmet>
        <div className="web_container_bg">
            <div className="web_banner">
                <img src={odooweb} alt="odooweb" className='web_banner_img'/>
                <div className="web_text_col">
                    <h1 className='web_banner_title'>Experience the Future of
                    Business with RIO</h1>
                   <h3 className='web_banner_subtitle'>Your Partner in Cutting-Edge Odoo
                   ERP Solutions.</h3>
                   <p>As a premier Odoo ERP development company, RIO specializes in crafting robust and bespoke business solutions tailored to our client's unique needs. Our seasoned team of Odoo developers leverages the power of Odoo’s modular architecture to deliver customized ERP solutions that seamlessly integrate across all business functions.</p>
                   <p>Trust us to optimize your business processes, enhance productivity, and propel your organization to new heights with our state-of-the-art Odoo ERP implementation.</p>
                </div>
            </div>
        </div>
        <ClientLogohead/>
        <div className="web_service">
            <h2>Odoo Services</h2>
            <section className='web_wapp'>
            <div className="black web-grid">
                <img src={odoowebdev} alt="odoowebdev" />
                <h4 className='web-grid-title'>Odoo Website Development</h4>
          <p className='web-grid-description'>Partner with RIO for your Odoo website development needs and transform your online presence with a website that truly reflects your brand and engages your audience. As experts in Odoo website development, we specialize in creating stunning, user-friendly websites customized to reflect your brand’s identity and values. Our vision is to help you captivate your online presence and engage effectively with your audience.</p>
                </div>
                <div className="black web-grid">
                <img src={ecommerce} alt="ecommerce" />
                <h4 className='web-grid-title'>E-Commerce Integration</h4>
          <p className='web-grid-description'>Take your eCommerce platform to the next level. RIO offers top-notch Odoo eCommerce integration services, designed to streamline your online store operations and enhance your business growth. By leveraging the powerful capabilities of Odoo, we ensure a seamless integration that provides a comprehensive, user-friendly, and efficient eCommerce solution tailored to your business needs.</p>
                </div>
            </section>
            <img src={logo} alt='logo' className='seo_center_logo'/>
            <section className='web_wapp'>
            <div className="black web-grid">
                <img src={blog} alt="blog" />
                <h4 className='web-grid-title'>Blog</h4>
          <p className='web-grid-description'>RIO offers exceptional Odoo blog services designed to enhance your online presence and engage your audience effectively. Leveraging the robust features of Odoo, we create, manage, and optimize blogs that reflect your brand’s voice and attract the right audience—partner with us to elevate your content strategy and achieve your business goals.</p>
                </div>
                <div className="black web-grid">
                <img src={live} alt="live" />
                <h4 className='web-grid-title'>Live Chat</h4>
          <p className='web-grid-description'>With RIO’s Odoo Live Chat development, you can take your customer support to the next level. Our advanced live chat solutions enhance engagement, increase customer satisfaction, and drive business growth. Our cutting-edge services help you connect with your website visitors in real time and deliver exceptional customer support. Our expert team leverages the advanced features of Odoo to create customized live chat solutions tailored to your business needs.</p>
          
                </div>
            </section>

        </div>
        <div className="web_bg">
            <h2 className='web_bg_title'>With a track record of successful
            implementations and satisfied clients</h2>
            <p className='web_bg_para'>RIO is trusted by businesses worldwide to deliver exceptional Odoo solutions. Don't just take our word for it—hear directly from our satisfied clients.</p>
        </div>
        <div>
            <h3 className='web_contact_title'>Ready to transform your business with RIO's
            Odoo development services?</h3>
            <p className='web_contact_para'>Contact us today for a free consultation and discover how we can help you achieve your business goals.</p>
            <ContactFrom/>
        </div>
    </div>
  )
}

export default Website  