import React from 'react'
import uxui from '../../../assets/images/Ui-Ux-1.png'
import ClientLogohead from '../../Home/ClientLogohead'
import { BiCheck } from "react-icons/bi";
import uidesign from '../../../assets/images/UI.png'
import ux from '../../../assets/images/UX.png'
import prototype from '../../../assets/images/Prototyping.png'
import user from '../../../assets/images/User-Research.png'
import usability from '../../../assets/images/Usability-Testing.png'
import Innovative from '../../../assets/images/Innovative-Design-Approach.png'
import Collaborative from '../../../assets/images/Collaborative-Process.png'
import UserCentered from '../../../assets/images/User-Centered-Design.png'
import proven from '../../../assets/images/Proven-Track-Record.png'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import discover from '../../../assets/images/Discovery-Research-1.jpg'
import wireframe from '../../../assets/images/Wireframing-Prototyping-1.jpg'
import design from '../../../assets/images/Design-Development.jpg'
import testing from '../../../assets/images/Testing-Iteration.jpg'
import launch from '../../../assets/images/Launch-Support-1.jpg'
import ContactFrom from '../../Services/ContactFrom';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Uiux = () => {
  const uxui ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599946/rio_main_website/nyigo2vegwv7akrtvwhu.png"
  const uidesign ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599946/rio_main_website/a4cxhjbevcns7gtwq56m.png"
  const ux ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599949/rio_main_website/j3lbz1jnhal29bmvx41y.png"
  const prototype ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599931/rio_main_website/r2cfdxoc7mtoqp3mjaxd.png"
  const user ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599948/rio_main_website/xtiscn8snttsofhlbvuw.png"
  const usability ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599947/rio_main_website/t4gnijb7hnrf3lsb6ntv.png"
  const Innovative ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599918/rio_main_website/q8ttua7whiqbbfjajuy6.png"
  const UserCentered="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599948/rio_main_website/yuhsuhpuydagai9gx8ou.png"
  const Collaborative="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599898/rio_main_website/g09btusuupsignfmng70.png"
  const proven="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599931/rio_main_website/czzkwootl93mkvsslslu.png"
  const discover ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599907/rio_main_website/wsmykoehb9lxgji5inep.jpg"
  const wireframe ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599955/rio_main_website/f95zoleieym5zk7ucotj.jpg"
  const design ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599905/rio_main_website/d3xiyei40v3bgp9ryg3x.jpg"
  const testing="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599943/rio_main_website/mgehpzce8g1trxzu6vr1.jpg"
  const launch ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599924/rio_main_website/ohymkodeipty8kidvzve.jpg"
  
  return (
    <div>
      <Helmet>
        <title>Top UI/UX Design Agency | RioBizSols 
        </title>
        <meta name="description" content="Find the best UI/UX design companies with RioBizSols. We offer top-notch UI/UX design services to enhance user experience." />
        <meta name="keywords" content="best ui ux design companies, ui ux design services, ui ux design agency" />
      </Helmet>
        <div className='sale_container_bg'>
            <div className="sale_banner">
            <img src={uxui} alt="uxui" className='sale_banner_img1' />

            <div className="sale_text_col">
            <h1 className='sale_banner_title'>Innovative UI/UX Designs that Captivate and Convert</h1>
            
            <p>Transform Your Vision into a Stunning Reality with RIO's UI/UX Design Services! We specialize in crafting intuitive, visually appealing, and user-centric digital experiences. Our team of seasoned UI/UX designers is dedicated to transforming your ideas into captivating interfaces that look great and function flawlessly.</p> 
            <Link to='/contact'  style={{textDecoration:'none', color:'White'}}>

            <button className='brand_button'>Contact us<BiCheck className='ipr_icon1'/>

</button>
</Link>
            
            </div>
            </div>
        </div>
        <ClientLogohead/>
        <hr className='b-line' />
        <div className="brand-ser-bg">
      <h2 className='brand_ser_title'>Services We Offer</h2>
         

         <div className="brand_grid3">
         <div className='brand_grid3_bg'>
          
         
          <img src={uidesign} alt="uidesign" style={{marginTop:40, marginBottom: 40}}/>
          
          
          <h2>UI Design</h2>
          <p>Crafting visually stunning and engaging interfaces that capture users' attention and reflect your brand identity.</p>
          
          
          </div>
          
          <div className='brand_grid3_bg'>
          <img src={ux} alt="ux" style={{marginTop:40, marginBottom: 40}}/>
          <h2>UX Design</h2>
          <p>Designing seamless and intuitive user experiences through comprehensive user journey mapping and interaction design.</p>
          </div>
          <div className='brand_grid3_bg'>
          <img src={prototype} alt="pro" style={{marginTop:40, marginBottom: 40}}/>
          <h2>Prototyping</h2>
          <p>Develop interactive prototypes to visualize your ideas and gather crucial feedback early in development.</p>
          </div>
         </div>
         <div className="brand_grid2">
         <div className='brand_grid3_bg'>
         <img src={user} alt="user" style={{marginTop:40, marginBottom: 40}}/>
          <h2>User Research</h2>
          <p>Conducting in-depth analysis of user behavior to inform design decisions and enhance overall usability.</p>
          </div>
          
          <div className='brand_grid3_bg'>
          <img src={usability} alt="usability" style={{marginTop:40, marginBottom: 40}}/>
          <h2>Usability Testing</h2>
          <p>Performing rigorous testing to identify and fix usability issues, ensuring a smooth and enjoyable user experience.</p>
          </div>
          
         </div>
    </div>
    <div className="wave-container1">
    <div className='wave-head'><h2 className='sale_banner_title' >Why Choose Us?</h2>
    
    </div>
   
      <div className="wave-content">
        <div className="wave-img">
          <div className="wave-imgs-content">
             <img src={Innovative} alt="innovative" /> 
            <h4>Innovative Design <br/>Approach</h4>
            <p>We stay ahead of the curve by integrating the latest design <br/>trends and technologies to deliver modern, cutting-edge solutions.</p>
          </div>
          <div className="wave-imgs-content">
              <img src={UserCentered} alt="Usercentered" /> 
             <h4>User-Centered <br/>Design</h4>
             <p>Our designs are not just about <br/>aesthetics. We focus on creating interfaces that provide a seamless <br/> and enjoyable user experience.</p>
          </div>
          <div className="wave-imgs-content">
             <img src={Collaborative} alt="collaorative" />
             <h4>Collaborative <br/>Process</h4>
             <p>We work closely with you at every <br/>stage of the project, ensuring your vision  and goals are met.</p>
          </div>
          <div className="wave-imgs-content">
             <img src={proven} alt="proven" />
             <h4>Proven Track <br/> Record</h4>
             <p>With a portfolio of successful projects across various industries, we have the expertise to handle diverse design challenges.</p>
          </div>

         
          
        </div>
      </div>
    
      
  </div>

  <h2  className='staff_title1' >
          Our Process
   </h2>
      <div className='staff_bg'>
        <div className="container">
          <Row>
            <Col sm={9}>
            <img src={discover} alt="discover"  className='staff_img_top' />
            <div className='staff_card'>
            <h2>Discovery & Research</h2>
            <p>We dive deep into understanding your goals, audience, and competition to lay a strong foundation.</p>
            {/* <button className='staff_button'>For More Info
            <span className='button-icon'><ArrowCircleRightIcon/></span>
            </button> */}
            </div>
            </Col>
            <Col sm={3}> 
            </Col>
          </Row>
        </div>
        <div className="container">
          <Row>
            <Col sm={1}>
            
            </Col>
            <Col sm={11}> 
            <img src={wireframe} alt="wireframe"  className='staff_img1' />
            
            <div className="staff_card_right">
              <h2>Wireframing & Prototyping</h2>
              <p>We create detailed blueprints and interactive models to visualize your app’s structure and flow.</p>
              {/* <button className='staff_button'>For More Info
            <span className='button-icon'><ArrowCircleRightIcon/></span>
            </button> */}
            </div>
           
            </Col>
          </Row>
        </div> 
        <div className="container">
          <Row>
            <Col sm={9}>
            <img src={design} alt="staffimage"  className='staff_img' />
            <div className='staff_card'>
            <h2>Design & Development</h2>
            <p>Our team crafts visually stunning, functional designs and brings them to life through development.</p>
            {/* <button className='staff_button'>For More Info
            <span className='button-icon'><ArrowCircleRightIcon/></span>
            </button> */}
            </div>
            </Col>
            <Col sm={3}> 
            </Col>
          </Row>
        </div>
        <div className="container">
          <Row>
            <Col sm={1}>
            
            </Col>
            <Col sm={11}> 
             <img src={testing} alt="testing"  className='staff_img1' /> 
            
            <div className="staff_card_right">
              <h2>Testing & Iteration</h2>
              <p>We conduct thorough testing and iterative refinements to ensure a flawless user experience.</p>
              {/* <button className='staff_button'>For More Info
            <span className='button-icon'><ArrowCircleRightIcon/></span>
            </button> */}
            </div>
           
            </Col>
          </Row>
        </div> 
        <div className="container">
          <Row>
            <Col sm={9}>
            <img src={launch} alt="launch"  className='staff_img'  style={{marginBottom:130}}/>
            <div className='staff_card'  style={{marginTop:-290}}>
            <h2>Launch & Support</h2>
            <p>We assist with a smooth launch and provide ongoing support to ensure your app's continued success.</p>
            {/* <button className='staff_button'>For More Info
            <span className='button-icon'><ArrowCircleRightIcon/></span>
            </button> */}
            </div>
            </Col>
            <Col sm={3}> 
            </Col>
          </Row>
        </div>
       
       
            
        </div>

        <h3 className='pay_title2' style={{fontSize:43, }}>Ready To Take Your Digital Product To The Next
        Level?</h3>
            <p className='pay_txt_description' style={{fontSize:22}}>Ready to take your digital product to the next
            level?
</p>
        <ContactFrom/>

    </div>
  )
}

export default Uiux