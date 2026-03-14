import React from 'react'
import {Link} from 'react-router-dom'
import LazyImage from '../LazyImage';
import '../../css/Homebanner.css';
import banner1 from '../../assets/images/homebanner.png'
import bannerhome from '../../assets/images/banner-home.png'
import banner from '../../assets/images/Banner.png';
import CheckIcon from '@mui/icons-material/Check';
import story from '../../assets/images/r3-img-1.webp';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


function Homebanner() {
  const imageUrl = "//res.cloudinary.com/dhzg3dnfc/image/upload/v1732599895/rio_main_website/u9grcwa3mm6fz6e816nn.png"; // Cloudinary image URL
  return (
    <div className="banner-wrapper">
      <div className="banner">
    <div className='container'>
    <div className='row'>
        <div className="col-lg-7 col-12 homebanner-text-col">
                <h1 className='homebanner-title'>End-to-End Business Solutions Provider</h1>
                <p className='homebanner-des'>Let us help you succeed with tailored solutions, every step of the way. 
                Together, we turn your business goals into reality.</p>
                <Link to='/contact'>
        <button className="get-started">LET'S CONNECT <ArrowCircleRightIcon/></button></Link>
          </div>
            <div className="col-lg-5 col-12 homebanner-img-col">
              <LazyImage src={imageUrl} alt="RIOBizSols Business Solutions" className='homebanner-img' width={600} height={400}/> 
            </div>
           
      
      </div>
   
    </div>
   
   </div>

   <div className="banner-mob">
    <div className='container'>
    <div className='row'>
        <div className="col-lg-6">
        <LazyImage src={bannerhome} alt="RIOBizSols Solutions" className='homebanner-img' width={400} height={300}/> 
               
          </div>
            <div className="col-lg-6">
            <h1 className='homebanner-title'>End-to-End Business Solutions Provider</h1>
                <p className='homebanner-des'>Let us help you succeed with tailored solutions, every step of the way. 
                Together, we turn your business goals into reality.</p>
                <Link to="/contact" style={{textDecoration:'none', color:'White'}}> <button className='banner-button'>Let's Connect
   <span className='button-icon'><ArrowCircleRightIcon/></span>  
 </button></Link>
            </div>
           
      
      </div>
   
    </div>
   

   </div>

   </div>
   
   
 
    
  )
}

export default Homebanner