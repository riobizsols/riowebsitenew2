import React from 'react'
import '../../../css/branding.css'
import { BiCheck } from "react-icons/bi";
import ClientLogohead from '../../Home/ClientLogohead';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import HomeContact from '../../Home/HomeContact';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


function Branding() {

  const branding = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599896/rio_main_website/itsumadfkkrwhvhv6w5n.png"
  const project = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599931/rio_main_website/xue92y3sas0rlgtevfny.png"
  const email = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599908/rio_main_website/geixz3red6pfnvcwjjjk.png"
  const analyse = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599891/rio_main_website/tok2wvjemusod1x2katu.png"
  const bullhorn = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599897/rio_main_website/cmi6xuygldirve8gkf0s.png"
  const brandman = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599896/rio_main_website/rxbxexfqihbukh2y24em.png"
  const brand2 = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599896/rio_main_website/acphphpurcnjukiyhvtm.png"
  const brand = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599896/rio_main_website/rs7l8ehcix58vfesrumb.png"
  const brandmessage = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599896/rio_main_website/foujcqcp9z6usvqfsizk.png"
  const vid = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599932/rio_main_website/vkreg9rijpqe4dbkmfww.png"

  
    // Slider settings for infinite loop
    const settings = {
      dots: true,
      infinite: true,  // Enables infinite looping
      speed: 500,
      slidesToShow: 2,  // Number of slides to show at once
      slidesToScroll: 2,
      autoplay: true,   // Enables automatic sliding
      autoplaySpeed: 2000, // Speed for auto sliding
      pauseOnHover: true,
     
    };
  
  return (
    <div>
      <Helmet>
        <title>Grow Your Business with Rio Bizsols Pvt Ltd
        </title>
        <meta name="description" content="Partner with Rio Bizsols Pvt Ltd for expert branding strategies. Build a strong brand presence and foster customer loyalty with our services.
" />
        <meta name="keywords" content="branding marketing, branding agency, branding company, brand strategy, top marketing agencies, brand awareness,
        branding consultant" />
      </Helmet>
      <div className="brand_bg">
        <div className="brand_container">
        <img src={branding} alt="branding"  />
        <div className="brand_text_column">
        <h1 className='brand_title'>
        Why Settle for the Ordinary When You Can Be Extraordinary?
        </h1>
        <p className='brand_para'>Elevate your business with a brand that speaks volumes.</p>

<p  className='brand_para'>Partner with RIO and watch your business grow.</p>
<Link to='/contact'  style={{textDecoration:'none', color:'White'}}>
<button className='brand_button'>Let's connect <BiCheck className='ipr_icon1'/>
</button>
</Link>
        </div>
          </div>  
      
      </div>
      <ClientLogohead/>
      <div className="container">
      <hr className='b-line' />
      </div>
      <div className="brand_container1">
      <div className="brand_column">
      <h2 className='brand_title'>Why Branding<br/>
      Matters?</h2>
      <p  className='brand_para'>In today's competitive market, a compelling brand is essential for success. A strong brand :</p>
      </div>
      
        <div className='slider_slick_container'>
      
      <Slider {...settings}>
        
       
         <div className='slider_box1'>
        <div className='slider_box_icon'> <img src={project} alt="project" className='slider_box_icon_img'/> </div>
         
          <h3 className='slider_box_icon_title'>Drives Engagement</h3>
          <p className='slider_box_icon_p'>Creates an emotional connection with your audience, leading to increased interaction and sales.</p>
        </div>
        <div className='slider_box2'>
        <div className='slider_box_icon'> <img src={email} alt="email" className='slider_box_icon_img'/> </div>
          <h3 className='slider_box_icon_title'>Supports <br/>Marketing Efforts</h3>
          <p className='slider_box_icon_p'>Enhances the effectiveness of your marketing campaigns across all channels.</p>
        </div>
        <div className='slider_box3'>
        <div className='slider_box_icon'> <img src={analyse} alt="analyse" className='slider_box_icon_img'/> </div>
        <h3 className='slider_box_icon_title'>Establishes Trust</h3>
        <p className='slider_box_icon_p'>Conveys professionalism and reliability, encouraging customer loyalty.</p>
        </div>
        <div className='slider_box4'>
        <div className='slider_box_icon'> <img src={bullhorn} alt="bullhorn" className='slider_box_icon_img'/> </div>
          <h3 className='slider_box_icon_title'>Builds Recognition</h3>
          <p className='slider_box_icon_p'>It helps customers easily identify and remember your business.</p>
        </div>
        
      </Slider>
    </div>   
      </div>
      <div className="brand-ser-bg">
      <h3 className='brand_ser_title'>Services We Offer</h3>
        <p className='brand_ser_para'>Your brand is more than just a logo or a tagline; it’s the essence of your business identity. Our comprehensive branding services are designed to create a strong, memorable brand that resonates with your target audience and sets you apart from the competition.</p>  

         <div className="brand_grid3">
         <div className='brand_grid3_bg'>
          
         
          <img src={brand} alt="brand" className='brand_grid3_img'/>
          
          
          <h2>Brand Strategy
          Development</h2>
          <p>We conduct thorough market research and audience analysis to create a compelling brand positioning and messaging strategy that aligns with your business goals.</p>
          
          
          </div>
          
          <div className='brand_grid3_bg'>
          <img src={brand2} alt="brand" className='brand_grid3_img'/>
          <h2>Visual Identity <br/> Design</h2>
          <p>Our team designs a distinctive logo, selects an appropriate color palette, and develops comprehensive brand guidelines to ensure a cohesive and impactful visual identity.</p>
          </div>
          <div className='brand_grid3_bg'>
          <img src={brandmessage} alt="brandmess" className='brand_grid3_img'/>
          <h2>Brand <br/>Messaging</h2>
          <p>We craft taglines, slogans, and key messages that resonate with your target audience, establishing a consistent tone of voice and compelling narrative for your brand.</p>
          </div>
         </div>
         <div className="brand_grid2">
         <div className='brand_grid3_bg'>
          <img src={vid} alt="vid" className='brand_grid3_img'/>
          <h2>Rebranding</h2>
          <p>We perform a detailed brand audit and strategy overhaul, updating visual and messaging elements to revitalize your brand and better reflect your evolving business identity.</p>
          </div>
          
          <div className='brand_grid3_bg'>
          <img src={brandman} alt="brandman" className='brand_grid3_img'/>
          <h2>Brand Management</h2>
          <p>We ensure your brand is consistently applied across all platforms, providing ongoing support and performance tracking to maintain its relevance and effectiveness.</p>
          </div>
          
         </div>
    </div>
    <div className='container'>
      <h2 className='brand_title1'>What We Do?</h2>
      <p className='brand_para1'>We create brands that command attention! We craft a powerful yet simple plan for your brand that makes waves in the market. Our plan includes -</p>
    </div>
    <div className="container">
      <div className="brand_icon_container">
      <FaRegArrowAltCircleUp className='brand_icon'/>
       <div className="brand_cloumn">
      
      <h3 className='brand_icon_title'>Discovery</h3>
      <p className='brand_icon_para'>A good brand identity has to be aligned well with the brand’s objective and target audience. Our discovery phase involves identifying, deconstructing & simplifying your brand's purpose so that the end product not only looks good but also works well.</p>
       </div>
      </div>

      <div className="brand_icon_container">
      <FaRegArrowAltCircleUp className='brand_icon' size={40} style={{marginTop:10}}/> 
       <div className="brand_cloumn">
      
      <h3 className='brand_icon_title' >Strategy</h3>
      <p className='brand_icon_para'>Then comes the strategy phase, where we align the best experts to craft an outstanding strategy. Here’s where we define the target audience, your brand’s mission, and vision.</p>
       </div>
      </div>
      <div className="brand_icon_container">
      <FaRegArrowAltCircleUp className='brand_icon'/>
       <div className="brand_cloumn">
      
      <h3 className='brand_icon_title'>Creation</h3>
      <p className='brand_icon_para'>With the blueprint in hand, our experts start executing the plan. Right from rolling out your new brand across all platforms, ensuring consistency and impact to monitoring the performance, and providing ongoing support to keep it relevant and effective, the phase includes all.</p>
       </div>

      </div>
      <hr className='hr_color'/>
      
      
    </div>
   <HomeContact/>
    </div>
  )
}

export default Branding