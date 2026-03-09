import React from 'react';
import '../../../css/contractual.css';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import contraimg from '../../../assets/images/contraimg.jpg'; 
import conimg1 from '../../../assets/images/conimg1.png';
import conimg2 from '../../../assets/images/conimg2.png';
import conimg3 from '../../../assets/images/conimg3.png';
import conimg4 from '../../../assets/images/conimg4.png'; 
import conimg5 from '../../../assets/images/conimg5.png';
import conimg6 from '../../../assets/images/conimg6.png';
import conimg7 from '../../../assets/images/conimg7.png';
import conimg8 from '../../../assets/images/conimg8.png';
import conimg9 from '../../../assets/images/conimg9.png';
import ClientLogohead from '../../Home/ClientLogohead';
import ContactFrom from '../../Services/ContactFrom';
import ServiceContact from '../../Services/ServiceContact';
import { Link } from 'react-router-dom';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Helmet } from 'react-helmet';

const Contractual = () => {
  const contraimg ="https://res.cloudinary.com/dhzg3dnfc/image/upload/f_auto,q_auto/v1732599901/rio_main_website/v4uafk0yknmzq79itjbd.jpg"
  const conimg1 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/f_auto,q_auto/v1732599898/rio_main_website/h6q8p0byrrjljdvpzfli.png"
  const conimg2 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/f_auto,q_auto/v1732599898/rio_main_website/kxj50upu2bzralzo8qap.png"
 const conimg3 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/f_auto,q_auto/v1732599898/rio_main_website/vi9w0izxw4djogdavzxg.png"
  const conimg5="https://res.cloudinary.com/dhzg3dnfc/image/upload/f_auto,q_auto/v1732599899/rio_main_website/gxlcifukye1gkcbrfyvi.png"
  const conimg6="https://res.cloudinary.com/dhzg3dnfc/image/upload/f_auto,q_auto/v1732599899/rio_main_website/thjzrl8ngv4hq704gjqp.png"
  const conimg4 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/f_auto,q_auto/v1732599898/rio_main_website/hippzstzm5kvp1s4mhzu.png"
  const conimg7="https://res.cloudinary.com/dhzg3dnfc/image/upload/f_auto,q_auto/v1732599899/rio_main_website/cp2cu75svd4vpcdj4igb.png"
  const conimg8 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/f_auto,q_auto/v1732599899/rio_main_website/ou7kmunanawhfvbjwtcd.png"
  const conimg9 ="https://res.cloudinary.com/dhzg3dnfc/image/upload/f_auto,q_auto/v1732599899/rio_main_website/twc6ygi4tasoiejhv1ct.png"
  return (
    <div>
      <Helmet>
        <title>Contractual Staffing Services | Flexible Project-Based Teams | RioBizSols</title>
        <meta name="description" content="Get flexible contractual staffing for short-term and long-term projects. Access pre-vetted talent fast, scale up or down, and control costs with RioBizSols." />
        <meta name="keywords" content="contract staffing services, project-based staffing, temporary contractors, flexible workforce, contract-to-hire" />
        <link rel="canonical" href="https://riobizsols.com/our-service/staffing/contractual" />
      </Helmet>
      <section className='contra-section'>
        <div className='contra-text'>
          <h1>Contractual Staffing</h1>
          <p>
            Contract staffing services are designed to offer you the flexibility to scale your workforce 
            based on the demands of your business. Whether you need expertise for a short-term project, 
            a long-term assignment, or anything in between, we have the right talent to match your requirements. 
            As a leading contract staffing services company and master service provider staffing solution, 
            we ensure you have access to a diverse pool of talent, ready to meet your specific needs.
            This option allows you to manage your workforce efficiently and cost-effectively without the long-term commitment.
          </p>
          <Link to='/contact'>
        <button className="get-started">LET'S CONNECT US! <ArrowCircleRightIcon/></button></Link>
        </div>
        <div className="contra-image">
          <img src={contraimg} alt="Contractual Staffing" className="animated-image" /> 
        </div>
      </section>

      <ClientLogohead/>
      <div>
        <h2 className='contratxt2'>Why You Need Contractual Staffing</h2>
        <h3 className='contratxt3'>Perfect for businesses needing specialised skills for a defined period, 
            ensuring that you meet your project goals without the overhead of permanent hires.
        </h3>
      </div>

      <section className="expertise-section">
        {[
          { img: conimg1, title: "Project-Specific Expertise", text: "Access professionals with the specific skills needed for your project. Once the project is complete, there’s no obligation to retain the additional staff." },
          { img: conimg2, title: "Flexibility", text: "Easily adjust your workforce size based on current business needs without the constraints of long-term employment contracts." },
          { img: conimg3, title: "Cost Control", text: "Manage your budget more effectively by paying only for the talent you need when you need it. This helps avoid the costs associated with permanent employees." },
          { img: conimg4, title: "Speedy Deployment", text: "Quickly onboard pre-screened, skilled professionals ready to contribute immediately, reducing downtime and accelerating project timelines." }, 
          { img: conimg5, title: "Risk Mitigation", text: "Reduce the risks associated with long-term hires by bringing in contractors for specific projects or periods, minimizing your financial and operational risks." },
          { img: conimg6, title: "Trial for Permanent Roles", text: "Use contractual staffing as a way to evaluate potential permanent employees. If a contractor is a good fit, you have the option to transition them to a full-time role." },
          { img: conimg7, title: "Focus on Core Business", text: "Allow your permanent employees to focus on core business activities while contractors handle specific, temporary projects." },
          { img: conimg8, title: "Reduced Training Time", text: "Contract staff are often experienced and require minimal training, enabling them to start contributing immediately." },
          { img: conimg9, title: "Scalability", text: "Easily scale your team up or down based on project demands and business cycles without the burden of permanent staffing changes." },
          { img: conimg9, title: "Access to Niche Skills", text: "Bring in contractors with specialised skills that may not be available within your current team, ensuring that all aspects of your project are expertly handled." }
        ].map((item, index) => (
          <div className="expertise-item" key={index}>
            <img src={item.img} alt={item.title} className="expertise-image" />
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>
      <div className="contact-con">
        <div className="contact-h">Let’s discuss your project Section</div>
        {/* <div className="contact-p">Ready to elevate your online presence with exceptional web design? Contact Rio today and let’s create a website that not only looks amazing but also delivers an outstanding user experience.</div> */}
      </div>
      <ContactFrom/>
    </div>
  );
}

export default Contractual;
