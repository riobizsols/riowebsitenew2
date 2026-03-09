import React from 'react'
import '../css/Footer.css';
import {Link} from 'react-router-dom'
import FooterLogo from '../assets/images/RIO-lOGO-1.png';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import US from '../assets/images/US.jpg';
import India from '../assets/images/India.jpg';
import { FaQuora } from "react-icons/fa6";

 function Footerbottom() {
  return (
    <div>
    <div>
        <div className='footer'>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                <img src={FooterLogo} alt='RioBizSols Logo' className='footer_title'/>
                
            <div className='social_media'>
            
          <a href='https://www.facebook.com/riobizsols/' target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'#FFFF'}}><FacebookRoundedIcon color='#fff' className='social_icon' sx={{ fontSize: 30 }}/></a>
          <a href='https://www.linkedin.com/company/rio-business-solutions-usa/' target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'#FFFF'}}><LinkedInIcon color='#fff' sx={{ fontSize: 30 }}  className='social_icon'/></a>
            <a href='https://www.youtube.com/channel/UC37z3CVHMraqRnrGrlucZ0g' target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'#FFFF'}}><YouTubeIcon sx={{ fontSize: 30 }} className='social_icon'/></a>
            <a href='https://www.instagram.com/rio_cbe/' target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'#FFFF'}}><InstagramIcon sx={{ fontSize: 30 }} className='social_icon'/></a>
         </div>
                </div>
                {/* Services column removed as per request */}
                <div className="col-lg-3 col-md-6">
                <h5 className='footer_title1'>Products</h5>
             <ul className='footer_menu'>
               <Link to='/products/rio-alm' style={{textDecoration:'none', color:'#BDBBBB'}}><li>RIO ALM</li></Link>
               <Link to='/products/medical-equipment-maintenance' style={{textDecoration:'none', color:'#BDBBBB'}}><li>RIO MEMS (Medical Equipment Maintenance)</li></Link>
               <Link to='/products/aissist' style={{textDecoration:'none', color:'#BDBBBB'}}><li>AIssist – LinkedIn Assistant</li></Link>
               <Link to='/products/rio-alm/features' style={{textDecoration:'none', color:'#BDBBBB'}}><li>RIO ALM Features</li></Link>
               <Link to='/products/rio-alm/industries' style={{textDecoration:'none', color:'#BDBBBB'}}><li>RIO ALM Industries</li></Link>
               <Link to='/products/rio-alm/deployment' style={{textDecoration:'none', color:'#BDBBBB'}}><li>RIO ALM Deployment</li></Link>
               <Link to='/products/rio-alm/contact' style={{textDecoration:'none', color:'#BDBBBB'}}><li>RIO ALM Demo Request</li></Link>
               <Link to='/products/medical-equipment-maintenance/pricing' style={{textDecoration:'none', color:'#BDBBBB'}}><li>RIO MEMS Pricing</li></Link>
             </ul>
                </div>
                <div className="col-lg-3 col-md-6">
                <h5 className='footer_title2'>Let's Connect</h5>
                <ul >
            
                 <li className='footer_menu2'>
                     <WifiCalling3Icon className='footer_icon'/>
                     
        +91 88849 10777
      </li>
                    <li className='footer_menu2'>
                     <span><WifiCalling3Icon className='footer_icon'/>
                     
        +1 760 284 6711
      </span></li>
                        <li className='footer_menu2'>
                         <AttachEmailIcon className='footer_icon'/>
                         info@riobizsols.com</li>

                         </ul>

                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-custom col-12 col-md-6">

                </div>
                <div className="col-custom col-12 col-md-6">
                    <h1 className='foot-loc'>Our Location</h1>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4">
                <p className='copyright'>© Copyright 2026 By <b>RIO BizSols PVT LTD</b></p>
                <Link to='/privacy-policy' style={{textDecoration:'none', color:'#BDBBBB'}}><p>Privacy Policy</p></Link>
                </div>
                
                <div className="col-12 col-md-4">
                <img src={US} alt="US" className='footer_location_img1'/>
                <h5 className='location_title'>USA Office</h5>
                  <p className='location_title'>180 Steuart St, #192750 <br/>SanFrancisco, CA 94119, USA</p>
                </div>
                <div className="col-12 col-md-4">
                <img src={India} alt="India Office Location" className='footer_location_img2'/>
                <h5 className='location_title1'>INDIA Office</h5>
           <p className='location_title1'>103/1, Karunanidhi Nagar,<br/> Ramanathapuram PO, Sungam,<br/> Coimbatore – 641045, India</p>
       
                </div>
                
                
            </div>
        </div>
    </div>

   
    </div>
   
  </div>  
    
    
   
  )
}

export default Footerbottom
