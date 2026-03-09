import React from 'react'
import '../../../css/salemanagement.css'
import inventory from '../../../assets/images/inventory.png'
import ClientLogohead from '../../Home/ClientLogohead'
import inveAcc from '../../../assets/images/inven_acc.jpg'
import inveMan from '../../../assets/images/inven-manu.jpg'
import inveMaintance from '../../../assets/images/inve_maintan.jpg'
import inveQua from '../../../assets/images/inve_qua.jpg'
// import account from '../../../assets/images/accounting.jpg'
// import invoice from '../../../assets/images/invoicing.jpg'
// import expense from '../../../assets/images/expense.jpg'
import ContactFrom from '../../Services/ContactFrom'
import { Helmet } from 'react-helmet';

function InventoryManufacturing() {
  const inventory="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599919/rio_main_website/mhtaftqff7w7zoubxnso.png"
  const inveAcc="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599919/rio_main_website/gcpinuoui6r6bvwbpc6u.jpg"
  const inveMan="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599919/rio_main_website/bdwgtt2rua9yuveezidn.jpg"
  const inveMaintance="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599919/rio_main_website/pn2nyerrgfvcprrdrljw.jpg"
  const inveQua="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599919/rio_main_website/qxl8py0g7ajdll9s45pr.jpg"
  return (
    <div>
        <Helmet>
        <title>Odoo ERP Inventory & Manufacturing - Rio Bizsols Pvt Ltd</title>
        <meta name="description" content="Optimize inventory and manufacturing processes with Rio Bizsols Pvt Ltd's Odoo ERP solutions. Improve efficiency and productivity in production." />
        <meta name="keywords" content="" />
      </Helmet>
       <div className="sale_container_bg">
      <div className="sale_banner">
      <img src={inventory} alt="inventory" className='sale_banner_img'/>
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
        <img src={inveAcc} alt="inveacc"  className='sale_image' />
        <div className="sale_text_col1">
          <h2>Accounting</h2>
          <p>Transform your inventory processes with a powerful, flexible, and intuitive system using RIO's Odoo Inventory Management solutions. Optimize stock levels, improve accuracy, and enhance efficiency with our advanced solutions tailored to your business. Our advanced Odoo inventory management solutions are designed to optimize your inventory processes, enhance accuracy, and improve efficiency.</p>
          <p>Leveraging the powerful features of Odoo, we provide tailored solutions that empower you to manage your inventory effectively, streamline operations, and meet customer demands.</p>
        </div> 
        </div>
        </div>
        <div className='container'>
        <hr/>
      </div>
      <div className="container">
        <div className="sale_banner1">
        <img src={inveMan} alt="inveman"  className='sale_image' />
        <div className="sale_text_col1">
          <h2>Manufacturing</h2>
          <p>Enhance operational efficiency, improve product quality, and drive business growth with our advanced manufacturing solutions tailored to your business.</p>
          <p>Leveraging the robust features of Odoo, we provide tailored solutions that empower you to manage all aspects of your manufacturing operations effectively.</p>
          <p>Be it BoMs (Bill of Materials), work orders, inventory integration, maintaining full traceability or performing detailed cost analysis, everything is taken care of by us.</p>
        </div> 
        </div>
        </div>
        <div className='container'>
        <hr/>
      </div>
      <div className="container">
        <div className="sale_banner1">
        <img src={inveMaintance} alt="invemaintance"  className='sale_image' />
        <div className="sale_text_col1">
          <h2>Maintenance</h2>
          <p>Optimize your maintenance processes, enhance equipment reliability, and reduce downtime with RIO’s Odoo maintenance solution. With our advanced solutions, you can ensure the longevity of your assets, improve operational efficiency, and drive business growth.</p>
          
        </div> 
        </div>
        </div>  
        <div className='container'>
        <hr/>
      </div>
      <div className="container">
        <div className="sale_banner1">
        <img src={inveQua} alt="invequa"  className='sale_image' />
        <div className="sale_text_col1">
          <h2>Quality</h2>
          <p>Ensure product excellence, compliance, and continuous improvement! With our advanced solutions, you can enhance quality control, streamline processes, and achieve higher customer satisfaction. Leveraging the robust features of Odoo, we provide tailored solutions that empower you to manage all aspects of quality control and assurance effectively.</p>
          
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


export default InventoryManufacturing