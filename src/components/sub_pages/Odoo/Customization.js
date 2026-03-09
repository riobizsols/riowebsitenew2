import React from 'react'
import '../../../css/salemanagement.css'
import customization from '../../../assets/images/customization_odoo.png'
import ClientLogohead from '../../Home/ClientLogohead'
import Studio from '../../../assets/images/customization_studio.jpg'
import ContactFrom from '../../Services/ContactFrom'
import { Helmet } from 'react-helmet';


function Customization() {
  const customization ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599903/rio_main_website/y5baovnasbdjg6pfzzgs.png"
  const Studio ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599904/rio_main_website/ayjmbfbig3d21ujlh4zn.jpg"
  return (
    <div>
      <Helmet>
        <title>Odoo ERP Customization - Rio Bizsols Pvt Ltd
        </title>
        <meta name="description" content="Customize Odoo ERP to fit your business needs with Rio Bizsols Pvt Ltd. Tailored solutions for optimal efficiency and growth." />
        <meta name="keywords" content="" />
      </Helmet>
       <div className="sale_container_bg">
      <div className="sale_banner">
      <img src={customization} alt="customization" className='sale_banner_img' />
      <div className="sale_text_col">
      <h1 className='sale_banner_title'>Experience the Future of
      Business with RIO</h1>
      <h3 className='sale_banner_subtitle'>Your Partner in Cutting-Edge Odoo ERP Solutions.</h3>
                   <p>As a premier Odoo ERP development company, RIO specializes in crafting robust and bespoke business solutions tailored to our client's unique needs. Trust us to optimize your business processes, enhance productivity, and propel your organization to new heights with our state-of-the-art Odoo ERP implementation.</p>     
        </div>
        </div>

      </div>
      <ClientLogohead/>
      <div className='container'>
        <hr/>
      </div>
      <div className="container">
        <div className="sale_banner1">
        <img src={Studio} alt="Studio"  className='sale_image' style={{width:600, height:400}}/>
        <div className="sale_text_col1" style={{marginTop:-80}}>
          <h2>Studio</h2>
          <p>RIO provides a wide range of Odoo Studio customization solutions allowing your organization to customize your Odoo applications to perfectly align with your unique business needs. With Odoo Studio, you can modify, extend, and customize your Odoo applications without the need for coding. By partnering with RIO, you can unleash the full potential of your Odoo applications, personalize your system to fit your specific business requirements, enhance productivity, and stimulate business growth.</p>
          <p>Whether communicating with colleagues using real-time messaging or organizing conversations and ensuring relevant information is easily accessible to team members using group chats and channels or sharing files, documents, and attachments within chat conversations, everything is done effortlessly with RIO</p>
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

export default Customization