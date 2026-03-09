import React from 'react';
import '../../../css/freshhire.css'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Link } from 'react-router-dom';
import Image from '../../../assets/images/fresh1img.jpeg'; 
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'; 
import logo from '../../../assets/images/logo.png'
import { Helmet } from 'react-helmet';
import ContactFrom from '../../Services/ContactFrom';


const Freshhire = () => {
  const Image ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599913/rio_main_website/hzzawezti5aq4hu8lvcv.jpg"
  const logo ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599933/rio_main_website/wx9qqfbghlhzhykmqx6v.png"
  return (
    <div>
       <Helmet>
        <title>Fresher's Hiring Services | Recruit Top Talent
        </title>
        <meta name="description" content="Access fresher's hiring services with Rio Bizsols Pvt Ltd. Recruit top fresh talent quickly and efficiently for entry-level positions in your organization." />
        <meta name="keywords" content="" />
      </Helmet>
      <section className='fresh-section'>
        <div className='fresh-text'>
          <h5>Building Bright Futures</h5>
          <h1>Empowering Fresh Talent</h1>
          <p style={{marginBottom:40}}>
            At Rio, we value fresh perspectives and new ideas. 
            Our Freshers Hiring Service connects you with bright young minds eager to make a difference. 
            We tailor our approach to your unique hiring needs, whether you're a startup or a multinational corporation.
          </p>

          <Link to='/contact'>
          <button className="get-started">LET'S CONNECT US! <ArrowCircleRightIcon/></button></Link>
        </div>
        <div className="fresh-image">
          <img src={Image} alt="Fresh Hiring" className="animated-image" /> 
        </div>
      </section>

      <div>
        <h3 className='freshtxt' style={{marginBottom:10, marginTop:40}}>Services We Offer</h3>
        <h2 className='fretxt' style={{marginBottom:30}}>Freshers Hiring Services</h2>
      </div>

      <section className='grid-section'>
                <div className="grid-item">
                    <h2>Campus Recruitment Drives</h2>
                   <p>
                     We arrange and oversee campus recruitments, bringing top graduates from leading institutions to your doorstep. 
                     Our team manages all aspects, from coordinating with educational institutions to conducting interviews and assessments.
                   </p>
                </div>
                
                <div className="grid-item">
                    <h2>Internship Programs</h2>
                    <p>
                    Looking to bring in fresh talent for short-term projects? 
                    Our internship programs offer an ideal opportunity to assess potential future employees while benefitting from their fresh perspectives and innovative ideas.
                    </p>
                </div>
                
                <div className="grid-item">
                    <h2>Graduate Placement Programs</h2>
                    <p>
                      Our placement programs are designed to identify and recruit top graduates for full-time positions within your organization. 
                      We focus on finding candidates who are not just academically proficient but also fit well with your company culture.
                    </p>
                </div>
                
                <div className="grid-item">
                  
                    <h2>Training & Development</h2>
                    <p>
                     We provide training and development programs to support new graduates in their transition to the corporate environment. 
                     These programs are tailored to improve their skills and equip them for the demands of the workplace.
                    </p>
                </div>

                <div className="logoitem">
                    <img src={logo} alt="Company Logo" />
                </div>
            </section>

            <section class="fresher-hiring">
    <div>
        <h2 class="fretxt" style={{marginBottom:40}}>Why Choose Rio For Fresher’s Hiring?</h2>
    </div>
    <div class="mindmap">
        <div class="branch">
            <h2>Comprehensive Screening Process</h2>
            <p>Our rigorous screening process ensures that only the most capable and driven candidates are presented to you. 
               We evaluate candidates on various parameters, 
               including academic performance, technical skills, soft skills, and cultural fit.
            </p>
        </div>
        <div class="branch">
            <h2>Wide Talent Pool</h2>
            <p>We have access to a wide pool of recent graduates from various disciplines, 
               thanks to our partnerships with top universities and colleges, providing diverse candidates suited to your needs.
            </p>
        </div>
        <div class="branch">
            <h2>Customized Recruitment Solutions</h2>
            <p>We offer bespoke hiring solutions that align with your organizational goals. 
               From mass recruitment drives to niche skill hiring,
               our flexible approach ensures you get the right talent at the right time.
            </p>
        </div>
        <div class="branch">
            <h2>End-to-End Recruitment Support</h2>
            <p>Our services continue beyond providing candidates. 
               We offer end-to-end recruitment support, including onboarding assistance, 
               to ensure a seamless transition for new hires into your organization.
            </p>
        </div>
    </div>
</section>

    <div className="contact-con">
        <div className="contact-h">Let’s discuss your project Section</div>
        {/* <div className="contact-p">Ready to elevate your online presence with exceptional web design? Contact Rio today and let’s create a website that not only looks amazing but also delivers an outstanding user experience.</div> */}
      </div>
      <ContactFrom/>
    </div>
  );
}

export default Freshhire;
