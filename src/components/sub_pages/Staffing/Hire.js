import React from 'react';
import '../../../css/hire.css'; 
import ClientLogohead from '../../Home/ClientLogohead'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import hireimg1 from '../../../assets/images/hireimg1.png';
import hireimg2 from '../../../assets/images/hireimg2.png';
import hireimg3 from '../../../assets/images/hireimg3.png';
import hireimg4 from '../../../assets/images/hireimg4.png';
import hireimg5 from '../../../assets/images/hireimg5.png';
import ContactFrom from '../../Services/ContactFrom'
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const Hire = () => {
  const hireimg1 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599915/rio_main_website/souvgai77iy4uubnkhwv.png"
  const hireimg2 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599915/rio_main_website/luzt7v4uw8njuecr6fh2.png"
  const hireimg3 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599916/rio_main_website/drdwkzd3awh2ndzrvwgh.png"
  const hireimg4 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599916/rio_main_website/gliseizdsgzfkav1lpki.png"
  const hireimg5 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599916/rio_main_website/jafm4pod82qyfqcubzrb.png"
  return (
    <div>
      <Helmet>
        <title>Immediate Hire Staffing Agencies | Quick Hiring Solutions </title>
        <meta name="description" content="Connect with leading immediate hire staffing agencies with Rio Bizsols Pvt Ltd. Fast and efficient hiring solutions to meet your urgent staffing requirements.
" />
        <meta name="keywords" content="" />
      </Helmet>
    <div className="hire-container">
      <section className="hire-section">
        <div className="text-content">
          <h1 className='head_hire1'>Direct Hire</h1>
          <p>
            Looking to fill a permanent position with top talent? Our Direct Hire service finds the best candidates for your long-term needs, 
            ensuring your business is set up for long-term success. Direct Hire staffing solution is a strategic solution for companies 
            looking to fill permanent positions with top-tier talent, ensuring you build a strong, dedicated team aligned with your company’s goals. 
            This option allows you to bring stability and a strategic fit to your team, driving long-term business success.
          </p>
          <Link to='/contact'>
        <button className="get-started">LET'S CONNECT US! <ArrowCircleRightIcon/></button></Link>
        </div>
        <div className="image-content">
          <img src={hireimg1} alt="Direct Hire" />
        </div>
      </section>
      <ClientLogohead/>
      <hr />
      <section>
        <div>
          <h2 className="heading_hire">Why You Need Direct Hire Staffing</h2>
          <p className="subheading">Best for filling crucial, permanent roles with top talent to ensure long-term success.</p>
          <div className="hire-section2">
            <div className="image-content2">
              <img src={hireimg2} alt="Direct Hire" />
            </div>
            <div className="text-content2">
              <h2>
                <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
                Top Talent
              </h2>
              <p>Access highly qualified candidates who are carefully evaluated to meet your specific needs.</p>

              <h2>
                <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
                Time-Saving
              </h2>
              <p>We handle the recruitment process for you, from sourcing and screening to interviewing, saving you time, effort, and resources. This allows you to focus on your core business activities.</p>

              <h2>
                <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
                Permanent Roles
              </h2>
              <p>Best for filling key positions you need filled right away. These roles often require a higher level of expertise and commitment that is best served by permanent staff.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="hire-section3">
          <div className="text-content3">
            <h2 className="heading3">Quality Candidates <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} /></h2>
            <p>Attract and retain highly skilled professionals who are dedicated to your company’s long-term goals. This can lead to higher levels of innovation, productivity, and overall business performance.</p>

            <h2 className="heading3">Long-Term Success <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} /></h2>
            <p>Build a strong, committed workforce that drives your business forward and helps achieve your strategic objectives. A team of loyal, long-term employees can be a significant asset in achieving competitive advantage.</p>
          </div>
          <div className="image-content3">
            <img src={hireimg3} alt="Quality Candidates" />
          </div>
        </div>
      </section>

      <section>
  <div className="hire-section4">
    <div className="image-content4">
      <img src={hireimg4} alt="Strategic Fit" />
    </div>
    <div className="text-content4">
      <h2 className="heading4"><FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />Strategic Fit</h2>
      <p>Direct hires are more likely to align with your strategic goals and company vision, helping you to achieve your long-term business objectives.</p>

      <h2 className="heading4"><FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />Enhanced Employee Engagement</h2>
      <p>Permanent employees are often more engaged and motivated, leading to higher levels of performance and job satisfaction.</p>

      <h2 className="heading4"><FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />Custom Match</h2>
      <p>We find candidates who not only have the right skills but also fit your company culture, ensuring a smoother onboarding process and quicker integration.</p>
    </div>
  </div>
</section>


      <section>
        <div className="hire-section5">
          <div className="text-content5">
            <h2 className="heading5">High Retention <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} /></h2>
            <p>Direct hires usually stay longer and are more committed, contributing to the stability and growth of your company. They are more likely to be invested in their role and the company’s success.</p>

            <h2 className="heading5">Reduced Turnover <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} /></h2>
            <p>By hiring the right person from the start, you reduce the costs and disruptions associated with high turnover rates.</p>
          </div>
          <div className="image-content5">
            <img src={hireimg5} alt="High Retention" />
          </div>
        </div>
      </section>

      <div className="contact-con">
        <div className="contact-h">Let’s discuss your project Section</div>
        {/* <div className="contact-p">Ready to elevate your online presence with exceptional web design? Contact Rio today and let’s create a website that not only looks amazing but also delivers an outstanding user experience.</div> */}
      </div>
      <ContactFrom/>
    </div>
    </div>
  );
}

export default Hire;
