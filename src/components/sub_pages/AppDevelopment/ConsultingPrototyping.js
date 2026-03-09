import React from 'react'
import { BiCheck } from "react-icons/bi";
import appcons from '../../../assets/images/App-cons.png'
import strategic from '../../../assets/images/strategic.png'
import ClientLogohead from '../../Home/ClientLogohead';
import '../../../css/Consulting.css'
import technology from '../../../assets/images/Technology.png'
import ma from '../../../assets/images/market-analysis.png'
import wirefram from '../../../assets/images/wireframing.png'
import usertest from '../../../assets/images/user-te.png'
import inter from '../../../assets/images/inter.png'
import exper from '../../../assets/images/expertise.jpg'
import customized from '../../../assets/images/customized.jpg'
import endtoend from '../../../assets/images/endtoend.jpg'
import inital from '../../../assets/images/Initial-Consultation.jpg'
import research from '../../../assets/images/Research-Analysis.jpg'
import design from '../../../assets/images/Design-Prototyping.jpg'
import feedback from '../../../assets/images/Feedback-Refinement-251x300.jpg'
import finial from '../../../assets/images/Final-Delivery-1-251x300.jpg'
import ongoing from '../../../assets/images/Ongoing-Support-Collaboration-1-251x300.jpg'
import ContactFrom from '../../Services/ContactFrom';
import { Helmet } from 'react-helmet';


const ConsultingPrototyping = () => {
  const appcons="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599893/rio_main_website/lmp1nacwylmhjo75cowg.png"
  const technology="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599942/rio_main_website/fy456jypchv22hcfzwx9.png"
  const strategic ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599941/rio_main_website/esquqlzeuxt0gjyjnu8f.png"
  const inter="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599919/rio_main_website/oimzdrgjhygj1adxvv0c.png"
  const usertest ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599948/rio_main_website/ygqao46rmntysh4kogmb.png"
  const wirefram ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599955/rio_main_website/i79qslvk7wel6vsiexs7.png"
  const ma="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599927/rio_main_website/sygdhwukhzsgcswnlcny.png"
 const exper="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599911/rio_main_website/qqmmoallftrqeuzoyfek.jpg"
 const customized ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599904/rio_main_website/wu16ffue8j3sa8gcatfd.jpg"
 const endtoend="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599909/rio_main_website/mcphv4nzqdtc5kmpwagp.jpg" 
 const inital ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599918/rio_main_website/yeen0mitay7gqmgdchee.jpg"
const finial="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599913/rio_main_website/ssjpurgikmvbctzdkkya.jpg"
 const design ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599905/rio_main_website/dhzp3wjv0nooctwq5hqq.jpg"
 const research="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599933/rio_main_website/xajzwsd9yx8t2owrizsv.jpg"
 const feedback ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599912/rio_main_website/iqbcfhhy7sec4lw1sgyh.jpg"
 const ongoing ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599928/rio_main_website/wmii1yuqobpm2vmqnciw.jpg"
 return (
    <div>
      <Helmet>
        <title>Top IT Consulting & Prototyping | RioBizSols
        </title>
        <meta name="description" content="RioBizSols is a leading prototyping company offering expert IT consulting services. Partner with top technology consulting companies for your software needs." />
        <meta name="keywords" content="prototyping company, it consulting companies, software consulting companies, it consulting services companies, technology consulting companies" />
      </Helmet>
        <div className='sale_container_bg'>
            <div className="sale_banner">
            <img src={appcons} alt="appcons" className='sale_banner_img' />

            <div className="sale_text_col">
            <h1 className='sale_banner_title'>RIO Consulting &
            Prototyping</h1>
            
            <p>RIO - Your Partner in Innovative App Development! We specialize in transforming your visionary ideas into practical, user-friendly applications. Whether you’re a startup or an established enterprise, our consulting and prototyping services are designed to help you navigate the complex landscape of app development with ease and confidence.</p> 
            <button className='brand_button'>Contact us<BiCheck className='ipr_icon1'/>

</button>
            
            </div>
            </div>
        </div>
        <ClientLogohead/>
        <div className="mid-content" style={{backgroundColor:'#EFEFEF'}}>
          <div className="app-head-line">
          Services We Offer
          </div>
          <h2 style={{textAlign:'center'}} >
          Consulting </h2>
         
            <div className='consult-grid-container'>
            <div class="item">
              <img src={strategic} alt="strategic" class='item-consult-img' />
              <h2>Strategic Planning</h2>
              <p>We help you define your app’s objectives and create a strategic roadmap to achieve them.</p>
            </div>
  <div class="item">
  <img src={ma} alt="ma" class='item-consult-img' />

    <h2>
    Market Analysis
    </h2>
    <p>Gain insights into your target audience, competitors, and market trends to make informed decisions.</p>
  </div>
  <div class="item">
    <img src={technology} alt="technology"  class='item-consult-img'/>
    <h2>Technology Guidance</h2>
    <p>
    Receive expert advice on the best technologies and frameworks to use for your project.
    </p>
  </div>

            </div>
            <h2 style={{textAlign:'center', marginBottom:50}}>Prototyping</h2>
            <div className='consult-grid-container'>
            <div class="item">
              <img src={wirefram} alt="wirefram" class='item-consult-img' />
              <h2>Wireframing</h2>
              <p>Visualize the structure and layout of your app with detailed wireframes.</p>
            </div>
  <div class="item">
  <img src={inter} alt="inter" class='item-consult-img' />

    <h2>
    Interactive Prototypes
    </h2>
    <p>Experience a working model of your app, allowing you to test and refine functionalities before development.</p>
  </div>
  <div class="item">
    <img src={usertest} alt="usertest"  class='item-consult-img'/>
    <h2>User Testing</h2>
    <p>
    Gather feedback from real users to ensure your app meets their needs and expectations.
    </p>
  </div>

            </div>
          </div>

          <div className="mid-content">
<div className="app-head-line">Why Choose Us?
          </div>
          <h5 style={{textAlign:'center'}}>By choosing RIO, you're not just getting an app; you're gaining a dedicated partner committed to your success.</h5>
</div>

<div className='consult-grid-container1'>
  <div>
    <img src={exper} alt="exper" className='consult-img-container'/>
    <h2 className='consult-title'>Expertise & Experience</h2>
    <p className='consult-para'>With years of experience in the industry, our team of experts brings a wealth of knowledge and technical prowess to every project. We stay ahead of the latest trends and technologies to provide you with cutting-edge solutions.</p>
  </div>
  <div >
    <img src={customized} alt="customized" className='consult-img-container'/>
    <h2 className='consult-title'>Customized Solutions</h2>
    <p className='consult-para'>We understand that every business is unique. That's why we tailor our services to meet your specific needs and goals, ensuring that your app not only functions flawlessly but also stands out in the competitive market.</p>
  </div>
  <div>
  <img src={endtoend} alt="endtoend" className='consult-img-container'/>
    <h2 className='consult-title'>End-to-End Support</h2>
    <p className='consult-para'>From the initial concept to the final launch. we're with you every step of the way. Our comprehensive services cover every aspect of app development, providing you with a seamless and stress-free experience.</p>
  </div>
  </div>
  <div className="mid-content" style={{backgroundColor:'#EFEFEF', marginBottom:30}}>
  <div className="app-head-line">
  Our Process
          </div>
          <p className='consult-process'>Our meticulous approach ensures that your project receives the attention and dedication it deserves, resulting in a successful and impactful app that exceeds your expectations.</p>

          <div className='consult-grid-container2'>
              <img src={inital} alt="inital" className='consult-process-img'/>
              <div className='consult-process-title'>
              <h2 className='consult_process_head'>Initial Consultation</h2>
              <p>We believe in laying a strong foundation for success from the very beginning. Our process kicks off with an in-depth consultation session where we take the time to listen to your ideas, goals, and expectations. We ask probing questions to ensure we grasp the essence of your project and understand your vision comprehensively.</p>
              </div>
              
              </div> 

              <div className='consult-grid-container2'>
              <img src={research} alt="research" className='consult-process-img'/>
              <div className='consult-process-title'>
              <h2 className='consult_process_head'>Research & Analysis</h2>
              <p>Once we have a solid understanding of your objectives, we embark on a journey of meticulous research and analysis. This phase involves studying your target market, analyzing competitor apps, and identifying emerging trends in your industry. Our goal is to gather valuable insights that will inform our strategic decisions moving forward.</p>
              </div>
              
              </div> 

              <div className='consult-grid-container2'>
              <img src={design} alt="design" className='consult-process-img'/>
              <div className='consult-process-title'>
              <h2 className='consult_process_head'>
              Design & Prototyping</h2>
              <p>With insights gleaned from our research, we transition into the design and prototyping stage. Here, our talented team of designers and developers collaborate closely to craft detailed wireframes and interactive prototypes that encapsulate your vision. These prototypes serve as tangible representations of your app, allowing you to visualize its structure, flow, and functionality.</p>
              </div>
              
              </div> 
              <div className='consult-grid-container2'>
              <img src={feedback} alt="feedback" className='consult-process-img'/>
              <div className='consult-process-title'>
              <h2 className='consult_process_head'>Feedback & Refinement</h2>
              <p>Feedback is integral to our process. We believe in the power of iteration and refinement to achieve excellence. Once the initial prototypes are ready, we invite you to test them thoroughly. We facilitate user testing sessions to gather valuable feedback from real users, enabling us to identify pain points, gather suggestions, and iterate on the design accordingly. This iterative process continues until we achieve a prototype that meets your expectations and delights your users.</p>
              </div>
              
              </div> 
              <div className='consult-grid-container2'>
              <img src={finial} alt="finial" className='consult-process-img'/>
              <div className='consult-process-title'>
              <h2 className='consult_process_head'>Final Delivery</h2>
              <p>We move into the final delivery phase with the prototype refined and approved. Here, we provide you with a comprehensive plan outlining the next steps for development. We discuss timelines, milestones, and deliverables, ensuring complete transparency and alignment throughout the process. Our goal is to empower you with the knowledge and resources needed to bring your app to life successfully.</p>
              </div>
              
              </div> 
              <div className='consult-grid-container2'>
              <img src={ongoing} alt="ongoing" className='consult-process-img'/>
              <div className='consult-process-title'>
              <h2 className='consult_process_head'>Ongoing Support &
              Collaboration</h2>
              <p>Our relationship doesn't end with the delivery of the final prototype. We believe in fostering long-term partnerships built on trust, collaboration, and mutual success. Even after your app is launched, we remain committed to providing ongoing support and guidance. Whether you need assistance with maintenance, updates, or scaling, you can count on us to be by your side every step of the way.</p>
              </div>
              
              </div>   
            </div>
            <h3 className='pay_title2' style={{fontSize:43,}}>Ready To Bring Your App Idea To Life?</h3>
            <p className='pay_txt_description' style={{fontSize:22}}>Contact us today for a free consultation. Let's create something amazing together!
</p>
        <ContactFrom/>

    </div>
  )
}

export default ConsultingPrototyping