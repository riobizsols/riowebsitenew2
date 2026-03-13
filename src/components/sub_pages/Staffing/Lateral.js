import React from 'react';
import Image1 from '../../../assets/images/lateralimg.jpeg';
import Image2 from '../../../assets/images/lateralimg1.png';
import Image3 from '../../../assets/images/lateralimg2.png';
import gif1 from '../../../assets/images/lateimg3.gif';
import gif2 from '../../../assets/images/lateimg4.gif';
import gif3 from '../../../assets/images/lateimg5.gif';
import gif4 from '../../../assets/images/lateimg6.gif';
import logo from '../../../assets/images/logo.png'
import ClientLogohead from '../../Home/ClientLogohead'
import '../../../css/lateral.css';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { FaRegCheckCircle } from "react-icons/fa";
import ContactFrom from '../../Services/ContactFrom'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Lateral = () => {
  const Image1 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599924/rio_main_website/pbwv3eisphl3rwxacpsi.jpg"
  const Image2 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599924/rio_main_website/spfc0pebq7yyxwx6a53g.png"
  const Image3 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599924/rio_main_website/izox6j2cy1n8n1l63dgx.png"
  const gif1 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599923/rio_main_website/yvexmdysy7auw3urfojs.gif"
  const gif2 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599923/rio_main_website/c32hlu464ylxezh56xkt.gif"
  const gif3 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599924/rio_main_website/b453gwwpsk6adeji95jv.gif"
  const gif4 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599924/rio_main_website/kballo1qbu28acdar8hz.gif"
  const logo ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599933/rio_main_website/wx9qqfbghlhzhykmqx6v.png"
  return (
    <div>
       <Helmet>
        <title>Lateral Hiring Services | Experienced Talent Acquisition</title>
        <meta name="description" content="Access lateral hiring services with Rio Bizsols Pvt Ltd. Efficiently acquire experienced talent for specialized roles to strengthen your team." />
        <meta name="keywords" content="" />
      </Helmet>
      <section className='lateral-section'>
        <div className='lateral-text'>
          <h3>Rio - Your Partner in Talent Acquisition Excellence</h3>
          <h1>Unlock the Power of Talent</h1>
          <p>
            Our Lateral Hiring Services are designed to help you quickly and efficiently bring on board experienced professionals who can make an immediate impact.
            By choosing Rio, you are not just filling a position; you're investing in the future success of your organization. Let us build that future together.
          </p>
          <Link to='/contact'>
        <button className="get-started">LET'S CONNECT US! <ArrowCircleRightIcon/></button></Link>
        </div>
        
        <div className="lateral-image">
          <img src={Image1} alt="Lateral Hiring" className="animated-image" />
        </div>
      </section>

      <ClientLogohead/>
        <hr />

      <section className='section1'>
        <div className='lateral-text'>
          <h1>Our Lateral Hiring Process</h1>
        </div>
      </section>

      <section className='sec1'>
        <div>
          <img src={Image2} alt="Lateral Hiring Process" className='image2' />
        </div>
        <div className='lateral-text1'>
        <div>
          <h2>
            <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
            Initial Consultation
          </h2>
          <p>
            We start with an in-depth consultation to understand your hiring needs, company culture, and the specific skills and experience you are looking for in a candidate.
          </p>
        </div>
        <div >
          <h2>
            <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
            Candidate Sourcing
          </h2>
          <p>
            Our rigorous screening process includes detailed interviews, skill assessments, and background checks to ensure we present only the most suitable candidates.
          </p>
        </div>

        <div>
          <h2>
            <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
            Screening and Evaluation
          </h2>
          <p>
            Our rigorous screening process includes detailed interviews, skill assessments, and background checks to ensure we present only the most suitable candidates.
          </p>
        </div>
        </div>
      </section>


      <section className='sec2'>
        
        <div className='lateral-text2'>
        <div >
          <h2>
            <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
            Presentation of Candidates
          </h2>
          <p>
            You receive a curated shortlist of top candidates, complete with detailed profiles and our insights on their suitability for your role.
          </p>
        </div>

        <div>
          <h2>
            <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
            Interview Coordination
          </h2>
          <p>
            We manage the interview scheduling process, ensuring a smooth and efficient experience for both you and the candidates.
          </p>
        </div>

        <div>
          <h2>
            <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
            Offer and Onboarding Support
          </h2>
          <p>
            Once you’ve selected your ideal candidate, we assist with the offer process and provide onboarding support to ensure a seamless transition.
          </p>
        </div>
        </div>
        <div>
          <img src={Image3} alt="Lateral Hiring Process" className='image3' />
        </div>
      </section>

      <section>
      <div className='head2'>
          <h2>Why Choose Rio For Lateral Hiring?</h2>
        </div>
      </section>

        <section className='grid-section'> 
                <div className="grid-item">
                <img src={gif1} alt="Discovery and Consultation" className="grid-gif" />
                    <h2>Expertise Across Industries</h2>
                   <p>
                     Our team of recruitment specialists has deep expertise across various industries. 
                     Whether you are in tech, finance, healthcare, or any other sector, we have the knowledge and network to find the perfect candidates for your needs.
                   </p>
                </div>
                
                <div className="grid-item">
                <img src={gif2} alt="Discovery and Consultation" className="grid-gif" />
                    <h2>Extensive Talent Network</h2>
                    <p>
                     We have a large database of pre-screened, highly qualified candidates, ensuring that you have access to the best talent in the market.
                     Our network is continuously growing, providing you with a dynamic pool of professionals ready to contribute to your organization.
                    </p>
                </div>
                
                <div className="grid-item">
                <img src={gif3} alt="Discovery and Consultation" className="grid-gif" />
                    <h2>Tailored Recruitment Process</h2>
                    <p>
                     We understand that every organization is unique. Our customized recruitment process is designed to align with your specific requirements,
                     culture, and goals, ensuring a perfect fit for both the candidate and your company.
                    </p>
                </div>
                
                <div className="grid-item">
                <img src={gif4} alt="Discovery and Consultation" className="grid-gif" />
                    <h2>Speed and Efficiency</h2>
                    <p>
                    Time is of the essence in today’s fast-paced business environment. Our streamlined processes and dedicated team ensure that 
                    we deliver high-quality candidates quickly, reducing your time-to-hire and helping you stay ahead of the competition.
                    </p>
                </div>

                <div className="logoitem1">
                    <img src={logo} alt="Company Logo" />
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

export default Lateral;
