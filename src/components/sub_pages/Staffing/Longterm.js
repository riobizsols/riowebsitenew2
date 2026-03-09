import React from 'react'
import '../../../css/shortterm.css';
import ClientLogohead from '../../Home/ClientLogohead'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { FaRegCheckCircle } from 'react-icons/fa';
import ContactFrom from '../../Services/ContactFrom'
import Image1 from '../../../assets/images/longimg1.jpeg'
import Image2 from '../../../assets/images/longimg2.jpeg'
import Image3 from '../../../assets/images/longimg3.jpeg'
import Image4 from '../../../assets/images/longimg4.jpeg'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Longterm = () => {
  const Image1 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599926/rio_main_website/isg06mepil8b9tvfixxw.jpg"
  const Image2 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599926/rio_main_website/l6kghxypfn0wpfc5dtz9.jpg"
  const Image3 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599926/rio_main_website/yjuyfrt1eg9f4zprpods.jpg"
  const Image4 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599926/rio_main_website/u48bcl1dlsevsy0cfdxj.jpg"
  return (
    <div>
       <Helmet>
        <title>Permanent Recruitment Services | Top Hiring Solutions
        </title>
        <meta name="description" content="Discover top permanent recruitment services with Rio Bizsols Pvt Ltd. Find the perfect candidates for your long-term staffing needs with expert hiring solutions.
" />
        <meta name="keywords" content="Permanent Recruitment Services, permanent recruitment agency, permanent staffing agency, permanent staffing solutions, permanent job recruitment agencies, contract and permanent recruitment" />
      </Helmet>
          <section className='s-section'>
        <div className='txtd'>
          <h1>Long-Term Staffing</h1>
          <h3>Need a steady, reliable team for the long haul?</h3>
          <p>
             Our long term staffing services are perfect for companies looking to maintain productivity without the commitment of permanent hires.
             Long-term staffing solutions are designed to provide a reliable team for your ongoing work and
             also provide stability and consistency helping you maintain productivity over extended periods.
          </p>
          <p>This option allows you to focus on strategic planning and business growth without the constant need for recruitment</p>
          <Link to='/contact'>
          <button className="get-started">LET'S CONNECT US! <ArrowCircleRightIcon/></button></Link>
        </div>
        <div className="img-container">
          <img src={Image1} alt="Short Hiring" className="short-img1" />
        </div>
      </section>

      <ClientLogohead/>
      <hr />

      <section className='txtd1'>
        <h2 style={{textAlign:'center'}}>Why you need Long-Term Staffing</h2>
        <p>
         Ideal for ongoing projects or operations that need a reliable, consistent team for a long time,
         helping you maintain productivity and focus on your core business.
        </p>
      </section>

      <section className='shortterm-hiring-container'>
        <div>
          <img src={Image2} alt="Short Hiring Process" className='s-image2' />
        </div>
        <div className='shortterm-text1'>
          <div className='text-section'>
            <h2>
              <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
              Stability
            </h2>
            <p>
               Keep a steady and dependable workforce ensuring that you have the manpower needed to meet your business objectives.
               This reduces the disruptions that can come with constantly hiring new staff.
            </p>
          </div>
          <div className='text-section'>
            <h2>
              <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
              Cost Management
            </h2>
            <p>
             Manage labor costs more effectively with predictable staffing expenses allowing you to allocate resources more effectively.
             Long-term staffing can also reduce recruitment and training costs over time.
            </p>
          </div>
          <div className='text-section'>
            <h2>
              <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
              Extended Projects
            </h2>
            <p> Perfect for long-term projects that need continuous attention and
            expertise, ensuring that your project timelines are met without the need for constant recruitment.</p>
          </div>
        </div>
      </section>

      <section className='s-sec2'>
        <div className='short-text2'>
          <div className='text-section'>
            <h2>
              <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
              Operational Continuity
            </h2>
            <p>
             Maintain smooth operations with dedicated long term staff who understand your business inside and out reducing the risk of errors.
            </p>
          </div>
          <div className='text-section'>
            <h2>
              <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
              Employee Development
            </h2>
            <p>
             Invest in your team’s growth and development for the long-termstaff.
             Well-trained staff can take on more responsibilities, contributing to business growth
            </p>
          </div>
          <div className='text-section'>
            <h2>
              <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
              Skill Continuity
            </h2>
            <p>
            Retain skilled workers who are familiar with your processes and culture, leading to increased efficiency and productivity.
             Long-term staff develop a deeper understanding of your business, contributing to smoother operations.
            </p>
          </div>
        </div>
        <div>
          <img src={Image3} alt="short Hiring Process" className='image3' />
        </div>
      </section>

      <section className='shortterm-extra-container'>
        <div>
          <img src={Image4} alt="Short Hiring Process" className='s-image2' />
        </div>
        <div className='shortterm-text2'>
          <div className='s-text-section'>
            <h2>
              <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
              Employee Loyalty
            </h2>
            <p>
            Long-term assignments can foster loyalty and commitment among staff, leading to higher morale and job satisfaction.
            </p>
          </div>
          <div className='text-section'>
            <h2>
              <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
              Enhanced Team Dynamics
            </h2>
            <p>
              A stable team develops better communication and collaboration over time, leading to improved team dynamics and productivity.
            </p>
          </div>
          <div className='text-section'>
            <h2>
              <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
              Succession Planning
            </h2>
            <p>Long-term staff can be groomed for higher positions, ensuring a smooth transition when current leaders retire or move on.</p>
          </div>

          <div className='text-section'>
            <h2>
              <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
              Strategic Planning
            </h2>
            <p>With a stable workforce, you can engage in more effective strategic planning and execution, knowing that you have the necessary manpower to achieve your goals.</p>
          </div>
        </div>
      </section>

      <div className="contact-con">
        <div className="contact-h">Let’s discuss your project Section</div>
        <div className="contact-p">Ready to elevate your online presence with exceptional web design? Contact Rio today and let’s create a website that not only looks amazing but also delivers an outstanding user experience.</div>
      </div>
      <ContactFrom/>
    </div>
  )
}

export default Longterm;