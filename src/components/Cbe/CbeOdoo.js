import React, { useEffect } from 'react'
import odoo from '../../assets/images/ERP-Odoo.jpg'
import '../../css/odoo.css'
import ClientLogohead from '../Home/ClientLogohead'
import { Helmet } from 'react-helmet-async';
import webicon from '../../assets/images/Website-2.png'
import sale from '../../assets/images/sale.png'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUncharted } from '@fortawesome/free-brands-svg-icons'; 
import fin from '../../assets/images/fin.png';
import inv from '../../assets/images/invman.png'
import human from '../../assets/images/human.png'
import market from '../../assets/images/market.png'
import odooSer from '../../assets/images/service_odoo.png'
import * as visitorTracking from '../../services/visitorTracking';
import productivity from '../../assets/images/productivity.png'
import customization from '../../assets/images/customization.png'
import choose from '../../assets/images/odoo_choose.png'
import HomeContact from '../Home/HomeContact'
import ideaicon from '../../assets/images/idea.png'
import user from '../../assets/images/user-check.png'
import hand from '../../assets/images/hand-holding-coin.png'
import arrow from '../../assets/images/expand-arrows.png'
import circle from '../../assets/images/check-circle.png'
import {Link} from 'react-router-dom';

function CbeOdoo() {
  useEffect(() => {
    visitorTracking.trackServiceInterest('Odoo - Coimbatore');
  }, []);
  const user ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599948/rio_main_website/wgnykhxd2dztgueh08lp.png"
  const hand ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599915/rio_main_website/clqe3eyxaorbxo2hszif.png"
  const circle ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599897/rio_main_website/jjdmireepl5cyywwfyag.png"
  const arrow ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599911/rio_main_website/q5augdkkxrjx8otaynd6.png"
  const ideaicon ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599918/rio_main_website/ogryddf0orxgey0tiovl.png"
  const customization ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599903/rio_main_website/rjfu578ubxwlgzrcco0d.png"
  const productivity ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599931/rio_main_website/wqxcsiymlvfan06g2roq.png"
  const odoo ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599909/rio_main_website/ypqdd6xn1xqasvne2rrw.jpg"
  const webicon="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599953/rio_main_website/whm0ukmx16lrtdepjs5i.png"
  const sale ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599934/rio_main_website/esw0gahbycgvs4fahwb3.png"
  const market ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599927/rio_main_website/i0fnr7ovyhihadufvenl.png"
  const inv ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599920/rio_main_website/tpncngxvezya5zvib0vj.png"
  const human ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599917/rio_main_website/sycs17n6dcuez2fvrgvr.png"
  const fin ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599913/rio_main_website/whs4qd0frmu8rgtcqfeq.png"
  const choose ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599928/rio_main_website/j8is6x7s8ugghihxsroi.png"
  const odooSer ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599937/rio_main_website/hq2eg54jyouckdvd6kz8.png"
  return (
    <div>
      <Helmet>
        <title>Trusted Odoo ERP Services in Coimbatore </title>
        <meta name="description" content="Achieve efficiency with trusted Odoo ERP services in Coimbatore. Tailored for your growth!" />
        <meta name="keywords" content="Odoo erp sevices in coimbatore, odoo frame work" />
      </Helmet>
        <div className="odoo-banner ">
            <img src={odoo} alt="odoo" className='odoo-img' />
            <h1 className="odoo_banner_title">Elevate your Business with Odoo ERP</h1>

        </div>
        <ClientLogohead/>
        <hr className='b-line' />
        <div className="container">
            <h2 className="odoo_service_title" >
        Why Choose Odoo ERP?
        </h2>
        </div>
            <section className='odoo_wapp'>
            <div className="black staff-grid">
          <img src={ideaicon} alt="idea" />
          <h2>Comprehensive Solution</h2>
          <p>Odoo ERP provides an all-in-one platform that consolidates all your business functions into a single, easy-to-use interface. Manage your operations seamlessly with applications tailored to every aspect of your business.</p>
          </div>
          <div className="black staff-grid">
          <FontAwesomeIcon icon={faUncharted}  className='font_icon' />
          
          <h2>Scalable & Customizable</h2>
          <p>Whether you’re a small startup or a large enterprise, Odoo grows with your business. Customize the platform with over 30 main applications and 16,000+ third-party apps available in the Odoo App Store.</p>
          </div>

            </section>

            <section className='odoo_wapp'>
            <div className="black odoo-grid">
              <img src={user} alt="user" />
          <h2>User-Friendly Interface</h2>
          <p>Odoo’s intuitive design ensures a smooth learning curve and quick adoption by your team. Say goodbye to complex, outdated systems and hello to a modern, user-centric interface.</p>
          </div>
          <div className="black odoo-grid">
          <img src={hand} alt="hand" />
          <h2>Cost-Effective</h2>
          <p>Enjoy a powerful ERP system without breaking the bank. Odoo’s modular pricing structure means you only pay for what you need, ensuring maximum return on investment.</p>
          </div>

            </section>
            <section className='odoo_wapp'>
            <div className="black odoo-grid">
          <img src={arrow} alt="arrow" />
          <h2>Open Source Flexibility</h2>
          <p>As an open-source platform, Odoo offers unparalleled flexibility and innovation. Benefit from a community of developers and contributors who continuously improve the software.</p>
          </div>
          <div className="black odoo-grid">
          <img src={circle} alt="circle" />
          <h2>Enhanced Decision Making</h2>
          <p>With real-time data analytics and reporting tools, Odoo ERP provides valuable insights into your business operations. Make informed decisions quickly and confidently to drive growth and stay ahead of the competition.</p>
          </div>

            </section>

        <div className='odoo_ser'>
            <h2 className='odoo_title'>Core Features of Odoo ERP</h2>
            
           <div className="odoo_container">
           <div className="row">
            <div className='col-lg-4 col-md-6'>
             
             <div className="odoo_card">
              <img src={webicon} alt="webicon" />
              <h2 className="odoo_card_title">Website</h2>
              <p>Create stunning websites with Odoo’s drag-and-drop website builder. Customize your site, manage SEO, and track visitor data effortlessly.</p>
              <Link to='/our-service/odoo/website'><button className='odoo_card_button'> <FaRegArrowAltCircleRight  className='odoo_card_icon'/>Read More</button>
              </Link>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
         
             <div className="odoo_card">
              <img src={sale} alt="sale" />
              <h2 className="odoo_card_title">Sales Management</h2>
              <p>Optimize sales process with integrated CRM, sales orders, and invoicing. Enhance customer relationships and improve sales growth.</p>
              <Link to='/our-service/odoo/sale-management'><button  className='odoo_card_button'> <FaRegArrowAltCircleRight  className='odoo_card_icon'/>Read More</button></Link>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
         
             <div className="odoo_card">
              <img src={fin} alt="fin" />
              <h2 className="odoo_card_title">Finance Management</h2>
              <p>Keep a check on your finances with comprehensive accounting features including analytics, automated bank synchronization, and ledgers. Ensure accurate financial reporting and compliance.</p>
              <Link to="/our-service/odoo/finance-management">
              <button> <FaRegArrowAltCircleRight  className='odoo_card_icon'/>Read More</button></Link>
            </div>
          </div>

          
          
          <div className='col-lg-4 col-md-6'>
             
             <div className="odoo_card">
              <img src={inv} alt="inv" />
              <h2 className="odoo_card_title">Inventory & Manufacturing</h2>
              <p>Track inventory movement, manage your stock levels, and streamline the supply chain operations with ease. Keep track of the entire production process from planning to execution with powerful manufacturing tools.</p>
              <Link to='/our-service/odoo/inventory-manfacturing'>              <button> <FaRegArrowAltCircleRight  className='odoo_card_icon'/>Read More</button>
              </Link>
            </div>
          </div>
            
          <div className='col-lg-4 col-md-6'>
         
             <div className="odoo_card">
              <img src={human} alt="human" />
              <h2 className="odoo_card_title">Human Resources
              </h2>
              <p>Efficiently handle recruitment, employee records, payroll, and performance appraisals. Simplify HR management in your organization for enhanced employee satisfaction.</p>
              <Link to="/our-service/odoo/human-resource"><button  className='odoo_card_button'> <FaRegArrowAltCircleRight  className='odoo_card_icon'/>Read More</button>
              </Link>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
         
             <div className="odoo_card">
              <img src={market} alt="market" />
              <h2 className="odoo_card_title">Marketing</h2>
              <p>Boost marketing efforts with integrated tools for social media campaigns, email marketing, and marketing automation. Track campaign performances and optimize strategies easily.</p>
              <Link to="/our-service/odoo/marketing"><button  className='odoo_card_button'> <FaRegArrowAltCircleRight  className='odoo_card_icon'/>Read More</button>
              </Link>
            </div>
          </div>
       
        <div className='col-lg-4 col-md-6'>
             
             <div className="odoo_card">
              <img src={odooSer} alt="odooser" />
              <h2 className="odoo_card_title">Services</h2>
              <p>Manage your service operations with features for project management, timesheets, and billing. Ensure efficient service delivery and customer satisfaction.</p>
              <Link to="/our-service/odoo/services"><button  className='odoo_card_button'> <FaRegArrowAltCircleRight  className='odoo_card_icon'/>Read More</button>
              </Link>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
         
             <div className="odoo_card">
              <img src={productivity} alt="productivity" />
              <h2 className="odoo_card_title">Productivity</h2>
              <p>Increase your team’s productivity with collaboration tools, task management, and real-time communication. Streamline workflows and improve project management.</p>
              <Link to="/our-service/odoo/productivity" style={{marginTop:-30}}><button  className='odoo_card_button'> <FaRegArrowAltCircleRight  className='odoo_card_icon'/>Read More</button>
              </Link>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
         
             <div className="odoo_card">
              <img src={customization} alt="customization" />
              <h2 className="odoo_card_title">Customization</h2>
              <p>Tailor Odoo to your specific business needs with extensive customization options. Leverage over 30 main and 16,000+ third-party apps in the Odoo App Store.</p>
              <Link to="/our-service/odoo/customization"><button className='odoo_card_button' > <FaRegArrowAltCircleRight  className='odoo_card_icon'/>Read More</button></Link>
            </div>
          </div>
          </div>
           </div>

      
     </div>
        <div className="odoo_container">
        <div className="container_odoo_choose">
          <img src={choose} alt="choose"  />
          <div >
                    <h2>Why Choose Us?</h2>
                     <p>We are providing certified <strong>Odoo ERP services in Coimbatore</strong> with years of
experience in implementing and customizing Odoo solutions for businesses of all
sizes. Our dedicated team is committed to helping you achieve your business
goals with cutting-edge technology and personalized support.
</p> 

<p>Streamline Your Operations with the Power of <strong>Odoo framework</strong> today!</p> 
<Link to='/contact'  style={{textDecoration:'none', color:'White'}}>
<button> <FaRegArrowAltCircleRight className='odoo_card_icon'/> Contact Us </button></Link>
                </div>
         </div>
        </div>
        <HomeContact/>
        </div>
    
  )
}

export default CbeOdoo;