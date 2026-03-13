import React from 'react';
import '../../../css/hire.css'; 
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import tempimg1 from '../../../assets/images/tempimg1.png';
import tempimg2 from '../../../assets/images/tempimg2.png';
import tempimg3 from '../../../assets/images/tempimg3.jpg';
import tempimg4 from '../../../assets/images/tempimg4.png';
import tempimg5 from '../../../assets/images/tempimg5.png';
import ContactFrom from '../../Services/ContactFrom'
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ClientLogohead from '../../Home/ClientLogohead';
import { Helmet } from 'react-helmet-async';

const Temp = () => {
   const tempimg1 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599942/rio_main_website/hu56aecdajlffltzwz6a.png"
   const tempimg2 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599942/rio_main_website/ltfcz3bbfdtirneotlcl.png"
   const tempimg3 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599943/rio_main_website/h0r6yrtajaig0xwha6wb.jpg"
   const tempimg4 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599916/rio_main_website/jafm4pod82qyfqcubzrb.png"
   const tempimg5 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599943/rio_main_website/fmpalgfywfw4rkhpe1td.png"
   return (
    <div>
       <Helmet>
        <title>Temp to Hire Services | Flexible Staffing Solutions
        </title>
        <meta name="description" content="Discover temp-to-hire services with Rio Bizsols Pvt Ltd. Flexible staffing solutions to transition temporary employees into permanent roles seamlessly." />
        <meta name="keywords" content="" />
      </Helmet>
    <div className="hire-container">
      <section className="hire-section">
        <div className="text-content">
          <h2 className='head_hire'>Temp-To-Hire</h2>
          <p>
          Not sure if a candidate is the right fit? 
          Our Temp-To-Hire service lets you evaluate a candidate's performance and fit within your company before making a permanent decision. 
          Temp-To-Hire staffing solution is Ideal when you're not sure about a candidate’s long-term fit. 
          It gives you the chance to see them in action before making a permanent decision. 
          This option allows you to minimize hiring risks and ensures you build a team of committed, well-suited employees.
          </p>
          <Link to='/contact'>
        <button className="get-started">LET'S CONNECT US! <ArrowCircleRightIcon/></button></Link>
        </div>
        <div className="image-content">
          <img src={tempimg1} alt="Direct Hire" />
        </div>
      </section>
      <ClientLogohead/>
      <section>
        <div>
          <h1 className="heading_hire">Why you need Temp-To-Hire Staffing</h1>
          <p className="subheading">
            Perfect for testing a candidate’s fit before making a permanent hire, reducing the risk of a bad hire.
         </p>
          <div className="hire-section2">
            <div className="image-content2">
              <img src={tempimg2} alt="Direct Hire" />
            </div>
            <div className="text-content2">
              <h2>
                <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
                Trial Period
              </h2>
              <p>Test skills and fit before committing.This reduces the risk of making a bad hire and ensures that the candidate can perform well in your specific work environment.</p>

              <h2>
                <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
                Reduced Risk
              </h2>
              <p>Lower the risk of hiring the wrong person by evaluating their on-the-job performance first. This approach can save your company time, money, and resources in the long run.</p>

              <h2 className="heading3">Smooth Transition <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} /></h2>
              <p>Easily convert a temp to a permanent role if they’re a perfect match and meet your expectations.This can lead to higher retention rates and better employee satisfaction.</p>

            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="hire-section3">
          <div className="text-content3">
            <h2 className="heading3">Cultural Fit <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} /></h2>
            <p>
              Ensure the candidate fits well with your company’s culture, values and team. A good cultural fit can significantly enhance team dynamics and overall productivity.
            </p>

            <h2>
                <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />
                Cost-Effective
              </h2>
              <p>
                Evaluate on-the-job performance before making a decision which can save you time and money in the long run.
                You only convert those who meet your expectations, reducing the cost of hiring mistakes.
              </p>
          </div>
          <div className="image-content3">
            <img src={tempimg3} alt="Quality Candidates" />
          </div>
        </div>
      </section>

      <section>
  <div className="hire-section4">
    <div className="image-content4">
      <img src={tempimg4} alt="Strategic Fit" />
    </div>
    <div className="text-content4">
      <h2 className="heading4"><FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />Skill Verification</h2>
      <p>
        Assess the candidate’s skills in real-world scenarios, ensuring they have the practical abilities needed for the job.
      </p>

      <h2 className="heading4"><FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />Flexibility for Both Parties</h2>
      <p>
        Candidates also get the chance to see if they like working with your company, leading to more mutual commitment when they are hired permanently.
      </p>

      <h2 className="heading4"><FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} />Uncertain Roles</h2>
      <p>
        Ideal for roles with uncertain long-term needs, allowing you to adapt as your business evolves. This is particularly useful for startups and businesses undergoing rapid changes.
      </p>
    </div>
  </div>
</section>


      <section>
        <div className="hire-section5">
          <div className="text-content5">
            <h2 className="heading5">Recruitment Efficiency <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} /></h2>
            <p>Streamline your recruitment process by using the temp-to-hire period as an extended interview, reducing the need for multiple rounds of interviews and background checks.</p>

            <h2 className="heading5">Immediate Contribution <FaRegCheckCircle style={{ marginRight: '8px', color: '#1B75BB' }} /></h2>
            <p>Temp-to-hire candidates can start contributing immediately while you assess their suitability for a permanent role.</p>
          </div>
          <div className="image-content5">
            <img src={tempimg5} alt="High Retention" />
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

export default Temp;
