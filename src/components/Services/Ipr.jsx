import React, { useEffect } from 'react'
import IPR from '../../assets/images/IPR1.jpg'
import '../../css/Ipr.css'
import LazyImage from '../LazyImage';
import { Helmet } from 'react-helmet';
import { BiCheck } from "react-icons/bi";
import ClientLogohead from '../Home/ClientLogohead';
import { Divider } from '@mui/material';
import iprser from '../../assets/images/iprser.jpg'
import ipr from '../../assets/images/ipr_1.png'
import guarantee from '../../assets/images/guarantee.png'
import customer from '../../assets/images/customer.png'
import globe from '../../assets/images/globe.png'
import efficiency from '../../assets/images/efficiency.png'
import parentser from '../../assets/images/patent_ser.png'
import trademark from '../../assets/images/trademark.png'
import copyright from '../../assets/images/copyright.png'
import trade from '../../assets/images/trade.png'
import choose from '../../assets/images/iprchoose.png'
import HomeContact from '../Home/HomeContact';
import {Link} from 'react-router-dom';
import * as visitorTracking from '../../services/visitorTracking';

function Ipr() {
    const guarantee ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599914/rio_main_website/ul8cvelysvblm5ythm6d.png"
    const globe ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599914/rio_main_website/lyoy6b3svzex610pegab.png"
    const efficiency ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599908/rio_main_website/s1prob6dpmhthr5rqehb.png"
    
    useEffect(() => {
      visitorTracking.trackServiceInterest('IPR');
    }, []);
    const customer ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599903/rio_main_website/kimi6krekhbi9jsdk5ko.png"
    const IPR ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599921/rio_main_website/rgwpvhh91ae9a3yhvbpo.png"
    const trademark ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599945/rio_main_website/wnlhgbcvyv62vo1jbya7.png"
    const trade ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599945/rio_main_website/kvrazaltgvcprmamewwz.png"
    const ipr ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599921/rio_main_website/v3tllmzmekvmtqpdbreq.png"
    const choose ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599893/rio_main_website/pocl8dnm0u6c6fcmwa2m.webp"
    const copyright ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599901/rio_main_website/df6kig2gw6sar0rmgscs.png"
    const parentser ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599929/rio_main_website/eghltsb273irnjqmj03s.png"
    return (
    <div>
        <Helmet>
        <title>Intellectual Property Rights Services | Patent, Trademark & Copyright Protection | RioBizSols</title>
        <meta name="description" content="RioBizSols provides comprehensive intellectual property services including patent registration, trademark protection, copyright, and trade secret safeguarding." />
        <meta name="keywords" content="intellectual property rights, patent services, trademark registration, copyright protection, trade secrets, IPR services, intellectual property protection" />
        <meta name="author" content="RioBizSols" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Intellectual Property Rights Services | Patent, Trademark & Copyright Protection" />
        <meta property="og:description" content="Expert IPR services for patents, trademarks, copyrights, and trade secrets protection." />
        <meta property="og:url" content="https://riobizsols.com/our-service/intellectual-property-rights" />
        <meta property="og:site_name" content="RioBizSols" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Intellectual Property Rights Services" />
        <meta name="twitter:description" content="Protect your innovations and creativity with professional IPR services from RioBizSols." />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://riobizsols.com/our-service/intellectual-property-rights" />
        
        {/* Schema.org Service Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "RioBizSols Intellectual Property Rights Services",
            "description": "Professional IPR and intellectual property protection services",
            "provider": {
              "@type": "Organization",
              "name": "RioBizSols"
            },
            "areaServed": ["IN", "US", "GB"],
            "serviceType": [
              "Patent Services",
              "Trademark Registration",
              "Copyright Protection",
              "Trade Secret Safeguarding",
              "IP Consulting"
            ]
          })}
        </script>
      </Helmet>
        <div className="ipr-banner">
            <LazyImage src={IPR} alt="IPR Services" className='ipr-img' width={1200} height={500}/>
            <h3 className="ipr_banner_sub_title">Protect Your Intellectual Property with Confidence</h3>
            <h1 className="ipr_banner_title">Safeguard your Innovations & Creativity</h1>
            <Link to='/contact'  style={{textDecoration:'none', color:'White'}}>
            <buttom className="ipr_buttom">Let's Contact <BiCheck className='ipr_icon1'/></buttom></Link>
        </div>
        <ClientLogohead/>
        
        <div className="container">
        <hr className='b-line' />
        <div>
           <h2  className="ipr_service_title">Why Choose the IP Rights Services</h2> 
           <p  className="ipr_service_para">At RIO, we understand the value of your ideas, innovations, and creative works. Our mission is to provide you with comprehensive intellectual property (IP) solutions that safeguard your rights and maximize the value of your intangible assets. Discover how Intellectual Property Rights Services are important for your business</p>
        </div>
        </div>
        <div className="container_ipr">
            <LazyImage src={ipr} alt="IPR Protection"  className='ipr_ser_img' width={600} height={400}/>
            <div className="container">
              <div className="container_ipr1">
                <LazyImage src={guarantee} alt="Guarantee"  className='ipr_icon' width={100} height={100}/>

                <div className="ipr_text_column">
              
               <h1>Expert Guidance</h1>
            <p >
             Experienced IP attorneys and professionals specializing in various aspects of intellectual property law hold deep understanding of the legal landscape, and provide strategic guidance tailored to unique business needs and goals.
            </p>
               <hr/>    
            
          </div>
            </div>   
             <div className="container_ipr1">
                <LazyImage src={customer} alt="Customer Focused"  className='ipr_icon' width={100} height={100}/>

                <div className="ipr_text_column">
           <div className="container">
           <h1>Customized Solutions</h1>
            <p>
            Every client and every IP portfolio is unique. That's why a personalized approach to every case is important to address specific challenges and objectives.
            </p>
             <hr/> 
           </div>
            
          </div>
            </div> 
             <div className="container_ipr1">
                <LazyImage src={efficiency} alt="Efficiency"  className='ipr_icon' width={100} height={100}/>

                <div className="ipr_text_column">
            <h1>Comprehensive Services</h1>
            <p>
            From patent and trademark registration to IP enforcement and litigation support, a full range of IP Rights services is meant to meet all intellectual property needs.
            </p>
            <hr/> 
          </div>
            </div> 
            <div className="container_ipr1">
                <LazyImage src={globe} alt="Global"  className='ipr_icon' width={100} height={100}/>

                <div className="ipr_text_column">
            <h1>Global Reach</h1>
            <p>
            In today's interconnected world, protecting your IP rights across borders is essential. IPR service providers have global network of partners and associates, and can help you secure protection for your intellectual property assets in multiple jurisdictions around the world.
            </p>
           <hr/> 
            
          </div>
            </div> 
            </div>
        </div>
        <div className="container">
            <h2 className='ipr_service'>
            IPR Services
            </h2> 
        </div>
        <div className="container">
            <div className="container_ipr">
                <div className="ipr_text">
                    <h2>Patent Services</h2>
                    <p>Protect your innovations and inventions with our comprehensive patent services. Our team of experienced patent attorneys specializes in drafting, filing, and prosecuting patent applications across various industries. From conducting prior art searches to managing patent portfolios, we provide strategic guidance every step of the way to ensure your inventions receive the protection they deserve.</p>
                </div>
                 <LazyImage src={parentser} alt="Patent Services" className='ipr_text_img' width={300} height={200}/>  
            </div>

        </div>

        <div className="container">
            <div className="container_ipr_ser">
                
                <LazyImage src={trademark} alt="Trademark" className='ipr_text_img' width={300} height={200} />
                <div className="ipr_text">
                    <h2>Trademark Services</h2>
                    <p>Safeguard your brand identity and reputation with our comprehensive trademark services. Whether you're launching a new brand or protecting an existing one, our team of trademark experts is here to help you navigate the intricacies of trademark law and registration.</p>
                </div>
            </div>

        </div> 

        <div className="container">
            <div className="container_ipr_ser">
                
               
                <div className="ipr_text">
                    <h2>Copyright Services</h2>
                    <p>Preserve your creative works and artistic expressions with our comprehensive copyright services. Whether you're a writer, artist, musician, or software developer, we can help you protect your original works and enforce your copyright rights.</p>
                </div>
                <LazyImage src={copyright } alt="Copyright" className='ipr_text_img' width={300} height={200} />
            </div>

        </div>
        
        <div className="container">
            <div className="container_ipr_ser">
                
            <LazyImage src={trade} alt="Trade Secret" className='ipr_text_img' width={300} height={200} />
                <div className="ipr_text">
                    <h2>Trade Secret Protection</h2>
                    <p>Protect your valuable business information and confidential know-how with our trade secret protection services. Our team helps clients identify, safeguard, and enforce their trade secrets to maintain their competitive advantage and business success.</p>
                </div>
                
            </div>

        </div>
<div className='ipr-choose'>
    <LazyImage src={choose} alt="Why Choose RIO IPR"  className='ipr-choose-img' width={600} height={400}/>
    <h2 className='ipr_choose_title'>Why Choose RIO?</h2>
    <p className='ipr_choose_para'>IP Rights Services is dedicated to helping individuals and businesses protect and maximize the value of their intellectual property assets. With our expertise, commitment to excellence, and client-focused approach, we've earned a reputation as a trusted partner in IP protection and enforcement. Whether you're an individual inventor, a startup, or a multinational corporation, our team of experts is here to help you navigate the complex world of IP rights with ease and confidence.</p>
</div>
<HomeContact/>

    </div>
  )
}

export default Ipr