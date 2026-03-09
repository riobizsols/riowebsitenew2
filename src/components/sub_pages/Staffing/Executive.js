import React from 'react';
import '../../../css/executive.css';
import exeimg from '../../../assets/images/exeimg1.png'; 
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import logo from '../../../assets/images/logo.png';
import Payperaccordionexec from '../../sub_pages/Staffing/Payperaccordionexec';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import exeimg3 from '../../../assets/images/exeimg3.png';
import exe1img from '../../../assets/images/exe1img.gif';
import exe2img from '../../../assets/images/exe2img.gif';
import exe3img from '../../../assets/images/exe3img.gif';
import exe4img from '../../../assets/images/exe4img.gif';
import { Link } from 'react-router-dom';
import ContactFrom from '../../Services/ContactFrom';
import { Helmet } from 'react-helmet';

const Executive = () => {
    const exeimg ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599911/rio_main_website/l9kpslwjjhidivobvq9n.png"
    const exeimg3 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599911/rio_main_website/ypr9lqf378gtkfmwfxk9.png"
    const exe1img ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599910/rio_main_website/ynin0yx6ekwhuqqnzlp1.gif"
    const exe2img ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599910/rio_main_website/kgwuiwzyackwira4ml1o.gif"
    const exe3img ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599910/rio_main_website/zkslmdtzvnp5rmoin3o9.gif"
    const exe4img ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599910/rio_main_website/xyzu4aouv6agbmmfiptj.gif"
    const logo ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599933/rio_main_website/wx9qqfbghlhzhykmqx6v.png"
    const accordionItems = [
        { label: "Expertise and Experience", content: "Our team of seasoned recruiters brings decades of experience in identifying and attracting high-caliber executive talent. We specialize in understanding your unique needs and finding the perfect fit for your organization." },
        { label: "Comprehensive Network", content: "With an extensive network of industry leaders, we have access to a deep pool of exceptional candidates. Our connections enable us to find executives who not only meet your technical requirements but also align with your company culture and values." },
        { label: "Tailored Solutions", content: "We recognize that each organization is unique. Our approach is highly customized, ensuring that we thoroughly understand your strategic goals and organizational dynamics before presenting candidates. This personalized touch ensures a perfect match every time." },
        { label: "Confidentiality and Discretion", content: "We handle every search with the utmost confidentiality and discretion. Your privacy and the integrity of the hiring process are paramount, ensuring a seamless and secure recruitment experience." },
        { label: "Speed and Efficiency", content: "In the fast-paced business world, timing is everything. Our streamlined processes and proactive approach enable us to deliver top candidates quickly and efficiently, reducing the time-to-hire and minimizing disruption to your operations." },
    ];

    return (
        <div>
            <Helmet>
        <title>Executive Hiring Services | Top Leadership Recruitment        </title>
        <meta name="description" content="Access executive hiring services with Rio Bizsols Pvt Ltd. Expert recruitment solutions to find top leadership talent for your organization.
" />
        <meta name="keywords" content="" />
      </Helmet>
            <section className='ex-section'>
                <div className="executive-section">
                    <div className="executive-text">
                        <h5>Connecting Visionaries with Opportunities</h5>
                        <h1 className='exec_h2'>Elevate Your Leadership With RIO</h1>
                        <p style={{marginBottom:40}}>
                            Our Executive Hiring services connect you with visionary leaders to drive your business forward. 
                            With a proven track record in diverse industries, we are your trusted partner in executive recruitment.
                        </p>
                        <Link to='/contact'>
        <button className="get-started">LET'S CONNECT US! <ArrowCircleRightIcon/></button></Link>
                    </div>
                    <div className="executive-image">
                        <img src={exeimg} alt="Executive Hiring" className="animated-image" />
                    </div>
                </div>
            </section>

            <h3 className='exetext'>Our Executive Hiring Process</h3>
            
            <section className='grid-section'>
                <div className="grid-item">
                    <img src={exe1img} alt="Discovery and Consultation" className="grid-gif" />
                    <h2>Discovery and Consultation</h2>
                    <p>
                        We begin with an in-depth consultation to understand your company's vision, values, and leadership needs. 
                        Detailed analysis of the role, including required skills, experience, and cultural fit.
                    </p>
                </div>
                
                <div className="grid-item">
                    <img src={exe2img} alt="Targeted Research and Recruitment" className="grid-gif" />
                    <h2>Targeted Research and Recruitment</h2>
                    <p>
                        Leveraging our network and advanced search techniques to identify potential candidates.
                        Rigorous vetting and assessment to ensure candidates meet your high standards.
                    </p>
                </div>
                
                <div className="grid-item">
                    <img src={exe3img} alt="Presentation and Selection" className="grid-gif" />
                    <h2>Presentation and Selection</h2>
                    <p>
                        Presenting a shortlist of the most suitable candidates. Facilitating interviews and
                        providing comprehensive feedback to aid in your decision-making.
                    </p>
                </div>
                
                <div className="grid-item">
                    <img src={exe4img} alt="Onboarding and Integration" className="grid-gif" />
                    <h2>Onboarding and Integration</h2>
                    <p>
                        Assisting with the negotiation of offers and terms. Providing support during the
                        onboarding process to ensure a smooth transition and successful integration.
                    </p>
                </div>

                <div className="logoitem1">
                    <img src={logo} alt="Company Logo" />
                </div>
            </section>

            <div className='exetxt'>
                <h2 className='exetext'>Why Choose RIO For Executive Hiring?</h2>
            </div>
            <section className='ex-section'>
                <div className="executive-img3">
                    <img src={exeimg3} alt="Executive Hiring" className="animated-image" />
                </div>            
                <div className='digital_ser_wapp'>
                <Payperaccordionexec items={accordionItems} />
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

export default Executive;
