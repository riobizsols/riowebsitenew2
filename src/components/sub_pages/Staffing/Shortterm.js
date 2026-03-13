import React from 'react';
import '../../../css/shortterm.css';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { FaRegCheckCircle } from 'react-icons/fa';
import ClientLogohead from '../../Home/ClientLogohead'
import ContactFrom from '../../Services/ContactFrom'
import Image1 from '../../../assets/images/shortimg1.jpeg';
import Image2 from '../../../assets/images/shortimg2.jpeg';
import Image3 from '../../../assets/images/shortimg3.jpeg';
import Image4 from '../../../assets/images/shortimg4.jpeg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Shortterm = () => {
  const Image1 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599938/rio_main_website/afykicryic9cv7lrib5s.jpg"
  const Image2 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599938/rio_main_website/pzbbkmerrdsh8ih2lzit.jpg"
  const Image3 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599938/rio_main_website/jeopkztkpwyv41nxabfz.jpg"
  const Image4 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599938/rio_main_website/wplrwkbdoa8vedozen4v.jpg"
  return (
    <div>
      <Helmet>
        <title>Temporary Staffing Services | Short-Term Solutions</title>
        <meta name="description" content="Access premier temporary staffing services and short-term solutions with Rio Bizsols Pvt Ltd. Expert assistance in finding the right temporary employees quickly." />
        <meta name="keywords" content="short term staffing agencies, Short Term Recruitment Agency, temporary staffing agencies, temporary employment agencies, Temporary Staffing Services" />
      </Helmet>
      <section className='s-section'>
        <div className='txtd'>
          <h1>Short-Term Staffing</h1>
          <h3>Need extra help for a busy season or a special project?</h3>
          <p>
            Our short-term staffing service ensures you have the right talent when you need it.
            Short-term staffing solutions are designed to meet your immediate workforce needs.
            Whether you're facing seasonal peaks, special projects, unexpected absences, or you
            need a few extra hands for a month or a week, we can quickly scale your workforce up.
          </p>
          <p>This option allows you to maintain productivity and customer satisfaction during peak times.</p>
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
        <h2>Why You Need Short-Term Staffing</h2>
        <p>
          Great for quick, flexible solutions to meet immediate needs without long-term commitments.
          Our short-term staffing solutions are here to fill in the gaps and keep your operations running smoothly.
        </p>
      </section>

      <section className='shortterm-hiring-container'>
        <div>
          <img src={Image2} alt="Short Hiring Process" className='image2' />
        </div>
        <div className='shortterm-text1'>
          <div className='text-section'>
            <h2>
              <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB'}} />
              Project-Based Work
            </h2>
            <p>
              Perfect for short-term projects requiring specialized skills that your current team may not have.
              Once the project is complete, there’s no obligation to retain the additional staff.
            </p>
          </div>
          <div className='text-section'>
            <h2>
              <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
              Unexpected Absences
            </h2>
            <p>
              Quickly cover for employees on vacations, on sick leave, or sudden departures, ensuring that your business
              continues to operate smoothly.
            </p>
          </div>
          <div className='text-section'>
            <h2>
              <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
              Flexibility
            </h2>
            <p>Adjust your team size as required without long-term commitments.</p>
          </div>
        </div>
      </section>

      <section className='s-sec2'>
        <div className='short-text2'>
          <div className='text-section'>
            <h2>
              <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
              Cost-Efficiency
            </h2>
            <p>
              Pay only for the talent you need, when you need it. This allows you to manage your budget more effectively
              without incurring the costs of permanent employees.
            </p>
          </div>
          <div className='text-section'>
            <h2>
              <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
              Immediate Availability
            </h2>
            <p>
              Access a pool of pre-screened professionals ready to work as per your need, without lengthy recruitment
              processes. This reduces downtime and keeps your projects on track.
            </p>
          </div>
          <div className='text-section'>
            <h2>
              <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
              Seasonal Workloads
            </h2>
            <p>
              Ideal for industries with fluctuating demand, such as retail or hospitality during holiday seasons.
              Easily ramp up staff during busy times without the overhead of permanent hires.
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
              Trial Runs
            </h2>
            <p>
               Use short-term staffing as a way to trial potential permanent hires.
               If you find someone who fits well with your team, you can offer them a longer-term position.
            </p>
          </div>
          <div className='text-section'>
            <h2>
              <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
              Reduced Training Time
            </h2>
            <p>
              Short-term staff are often already experienced and require minimal training, allowing them to hit the ground running.
            </p>
          </div>
          <div className='text-section'>
            <h2>
              <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
              Event Management
            </h2>
            <p>Great for events and conferences where additional temporary staff are needed to manage logistics, customer service, and other tasks.</p>
          </div>

          <div className='text-section'>
            <h2>
              <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
              Specialized Skills
            </h2>
             <p>
               Bring in professionals for short-term projects that require specific expertise.
               This can be particularly useful for tasks that your regular staff may not have the skills to handle.
              </p>
          </div>
        </div>
      </section>

      <div className="contact-con">
        <div className="contact-h">Let’s discuss your project Section</div>
        <div className="contact-p">Ready to elevate your online presence with exceptional web design? Contact Rio today and let’s create a website that not only looks amazing but also delivers an outstanding user experience.</div>
      </div>
      <ContactFrom/>
    </div>
  );
};

export default Shortterm;
