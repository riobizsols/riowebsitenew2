import React from 'react'
import ios from '../../../assets/images/App.png'
import crossapp from '../../../assets/images/app_development.png'
import { BiCheck } from "react-icons/bi";
import ClientLogohead from '../../Home/ClientLogohead'
import costEffect from '../../../assets/images/Cost-Efficiency.png'
import ftm from "../../../assets/images/Faster-Time-to-Market.png"
import Wider from "../../../assets/images/Wider-Reach.png"
import cue from "../../../assets/images/Consistent-User-Experience.png"
import Xamarin from '../../../assets/images/Xamarin.jpg'
import ecommerce from '../../../assets/images/ecommerce.png'
import logo from '../../../assets/images/riologo.png'
import flutter from '../../../assets/images/Flutter.jpg'
import react from '../../../assets/images/React.jpg'
import ionic from '../../../assets/images/Ionic.jpg'
import ThreeDCarousel from './slider1';
import ContactFrom from '../../Services/ContactFrom';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';



const CrossPlatformAppDevelopment = () => {
  const crossapp = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599892/rio_main_website/eo2ady6n82p03ekukrfr.png" 
  const costEffect ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599902/rio_main_website/cd7vqrxlyy8qbmcznzxj.png"
  const ftm ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599912/rio_main_website/pfnucyakcoxfg3tb8bzs.png"
  const Wider ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599954/rio_main_website/l5xdkufdkkfbroiqpnnt.png"
  const cue ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599899/rio_main_website/bqzg4jc08ivwoo1zknxx.png"
  const flutter ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599913/rio_main_website/qptylceyufa7ilm3drpv.jpg"
  const react="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599932/rio_main_website/v4eem5abqaczjae7op0f.jpg"
  const Xamarin ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599955/rio_main_website/v1tthwmmsymonp0y14bg.jpg"
  const ionic ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599920/rio_main_website/lpjdheuzgg9r1js9jdal.jpg"
  return (
    <div>
      <Helmet>
        <title>Cross-Platform App Development | RioBizSols 
        </title>
        <meta name="description" content=" RioBizSols offers top cross-platform app development services. Discover the best cross-platform development company for your app needs." />
        <meta name="keywords" content="cross-platform app development services, cross platform desktop app development, cross platform development company" />
      </Helmet>
        <div className='sale_container_bg'>
            <div className="sale_banner">
            <img src={crossapp} alt="crossapp" className='sale_banner_img'/>

            <div className="sale_text_col">
            <h1 className='sale_banner_title' style={{color:'#27589E'}}>Build Once, Run
            Anywhere</h1>
            
            <p>Efficient, Cost-Effective, and Scalable is what you will get with RIO’s Cross-Platform App Development service - a comprehensive solution that helps you create powerful apps without much hassle. And with just a single codebase, reach more users on iOS, Android and beyond. </p> 
            <Link to='/contact'  style={{textDecoration:'none', color:'White'}}>

            <button className='brand_button'>Contact us<BiCheck className='ipr_icon1'/>

</button></Link>
            </div>
            </div>
        </div>
        <ClientLogohead/>
        <div className="wave-container1">
    <div className='wave-head'><h2 className='sale_banner_title' style={{color:'#3EAAFF'}}>Why invest in Cross-Platform App<br/>
    Development?</h2>
    <p>Cross-platform app development allows you to create applications that work seamlessly across various operating systems such as iOS, Android, and Windows, using a single codebase. This approach not just saves time and resources but also ensures a consistent user experience across different devices.</p>
    </div>
   
      <div className="wave-content">
        <div className="wave-img">
          <div className="wave-imgs-content">
            <img src={costEffect} alt="costeffect" />
            <h4>Cost Efficiency</h4>
            <p>Develop one app for all platforms, significantly reducing development and maintenance costs.</p>
          </div>
          <div className="wave-imgs-content">
             <img src={ftm} alt="ftm" />
             <h4>Faster Time to Market</h4>
             <p>Accelerate your app launch by leveraging shared codebases and streamlined workflows.</p>
          </div>
          <div className="wave-imgs-content">
             <img src={Wider} alt="wider" />
             <h4>Wider Reach</h4>
             <p>Target a broader audience by making your app available on multiple platforms simultaneously.</p>
          </div>
          <div className="wave-imgs-content">
             <img src={cue} alt="cue" />
             <h4>Consistent User Experience</h4>
             <p>Ensure a uniform look and feel across all devices, enhancing user satisfaction and retention</p>
          </div>
          
        </div>
      </div>
      
  </div>

  <div className="mid-content">
          <div className="app-head-line">
          Technologies We Use
          </div>
          <p className="head-con">
          Harness the power of the latest technologies to build robust, scalable, and high-performance cross-platform apps. </p>
          </div>
          <section className='web_wapp'>
            <div className="black web-grid">
                <img src={flutter} alt="flutter" />
                <h4 className='web-grid-title'>Flutter</h4>
          <p className='web-grid-description'>Google's UI toolkit for crafting natively compiled applications for mobile, web, and desktop from a single codebase.</p>
          
                </div>
                <div className="black web-grid">
                <img src={react} alt="react" />
                <h4 className='web-grid-title'>React Native</h4>
          <p className='web-grid-description'>Developed by Facebook, this framework enables you to build mobile apps using JavaScript and React.</p>
          
                </div>
            </section>
            <img src={logo} alt='logo' className='seo_center_logo'/>
            <section className='web_wapp'>
            <div className="black web-grid">
                <img src={Xamarin} alt="xamarin" />
                <h4 className='web-grid-title'>Xamarin</h4>
          <p className='web-grid-description'>A Microsoft framework that uses .NET and C# to deliver native performance and user experiences.</p>
          
                </div>
                <div className="black web-grid">
                <img src={ionic} alt="ionic" />
                <h4 className='web-grid-title'>Ionic</h4>
          <p className='web-grid-description'>A comprehensive library of mobile-optimized UI components, gestures, and tools for building high-quality mobile, desktop, and Progressive Web Apps.</p>
          
                </div>
            </section>
            <hr/>
            <div className='wave-head'><h2 className='sale_banner_title' style={{color:'#27589E', textAlign:'center'}}>
            Why Choose Us?
            </h2>
      
      <p className='ios-choose-para'>By choosing RIO, You're not just getting an app; you're gaining an understanding of how effortless is the process of developing a cross-platform application. With us, Nothing is hidden as our process is crystal clear. Here’s how we work

</p>
          </div>
          
         
          <ThreeDCarousel/>
          <h3 className='ios_title2' style={{fontSize:43}}>Ready to bring your app idea to life?</h3>
            <p className='pay_txt_description' style={{fontSize:22}}>Contact us today for a free consultation and discover how we can help you achieve your business goals.

</p>
        <ContactFrom />

    </div>
  )
}

export default CrossPlatformAppDevelopment