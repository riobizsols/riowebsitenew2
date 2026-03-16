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
                <div className="col-lg-4 col-md-6">
                <img src={FooterLogo} alt='RioBizSols Logo' className='footer_title'/>
                <div className='social_media'>
          <a href='https://www.facebook.com/riobizsols/' target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'#FFFF'}}><FacebookRoundedIcon color='#fff' className='social_icon' sx={{ fontSize: 30 }}/></a>
          <a href='https://www.linkedin.com/company/rio-business-solutions-usa/' target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'#FFFF'}}><LinkedInIcon color='#fff' sx={{ fontSize: 30 }}  className='social_icon'/></a>
            <a href='https://www.youtube.com/channel/UC37z3CVHMraqRnrGrlucZ0g' target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'#FFFF'}}><YouTubeIcon sx={{ fontSize: 30 }} className='social_icon'/></a>
            <a href='https://www.instagram.com/rio_cbe/' target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'#FFFF'}}><InstagramIcon sx={{ fontSize: 30 }} className='social_icon'/></a>
         </div>
                </div>
                <div className="col-lg-8 col-md-6 footer-right-group">
                <div className="footer-right-col">
                <h5 className='footer_title1'>Products</h5>
             <ul className='footer_menu'>
               <li><Link to='/products/rio-alm' style={{textDecoration:'none', color:'#BDBBBB'}}>RIO ALM</Link></li>
               <li><Link to='/products/medical-equipment-maintenance' style={{textDecoration:'none', color:'#BDBBBB'}}>RIO MEMS (Medical Equipment Maintenance)</Link></li>
               <li><Link to='/products/aissist' style={{textDecoration:'none', color:'#BDBBBB'}}>AIssist – LinkedIn Assistant</Link></li>
               <li><Link to='/products/rio-alm/features' style={{textDecoration:'none', color:'#BDBBBB'}}>RIO ALM Features</Link></li>
               <li><Link to='/products/rio-alm/industries' style={{textDecoration:'none', color:'#BDBBBB'}}>RIO ALM Industries</Link></li>
               <li><Link to='/products/rio-alm/deployment' style={{textDecoration:'none', color:'#BDBBBB'}}>RIO ALM Deployment</Link></li>
               <li><Link to='/products/rio-alm/contact' style={{textDecoration:'none', color:'#BDBBBB'}}>RIO ALM Demo Request</Link></li>
               <li><Link to='/products/medical-equipment-maintenance/pricing' style={{textDecoration:'none', color:'#BDBBBB'}}>RIO MEMS Pricing</Link></li>
             </ul>
                </div>
                <div className="footer-right-col">
                <h5 className='footer_title2'>Let's Connect</h5>
                <ul className='footer_connect_list'>
                  <li className='footer_menu2'>
                    <WifiCalling3Icon className='footer_icon' />
                    <span>+91 88849 10777</span>
                  </li>
                  <li className='footer_menu2'>
                    <AttachEmailIcon className='footer_icon' />
                    <span>info@riobizsols.com</span>
                  </li>
                </ul>
                </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-12">
                <Link to='/privacy-policy' style={{textDecoration:'none', color:'#BDBBBB'}}><p className='footer-privacy'>Privacy Policy</p></Link>
                <p className='copyright'>© Copyright 2024 By <b>RIO BizSols PVT LTD</b></p>
                </div>
                <div className="col-lg-8 col-12 footer-locations-wrap">
                    <div className="footer-locations-inner">
                    <h1 className='foot-loc'>Our Locations</h1>
                    <div className="row footer-locations-row">
                        <div className="col-md-6 text-center">
                        <img src={US} alt="US" className='footer_location_img1'/>
                        <h5 className='location_title'>USA Office</h5>
                        <p className='location_title'>180 Steuart St,<br/>#192750 SanFrancisco,<br/>CA 94119, USA</p>
                        </div>
                        <div className="col-md-6 text-center">
                        <img src={India} alt="India Office Location" className='footer_location_img2'/>
                        <h5 className='location_title1'>INDIA Office</h5>
                        <p className='location_title1'>103/1, Karunanidhi Nagar,<br/>Ramanathapuram PO, Sungam,<br/>Coimbatore – 641045, India</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

   
    </div>
   
  </div>  
    
    
   
  )
}

export default Footerbottom
