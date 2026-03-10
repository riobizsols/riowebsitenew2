import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../../css/Contact.css';
import { FiPhone } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaQuora } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as visitorTracking from '../../services/visitorTracking';


const Contact = () => {
  const contactimg ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599900/rio_main_website/kkq6sbfnwcezhjve4u4p.jpg"
  const [formData, setFormData] = useState({
    firstname: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error message for the field being edited
    if (value.trim() !== '') {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = '';

    // Clear error if field has value
    if (value.trim() === '') {
      // Specific error messages for each field
      if (name === 'firstname') {
        error = 'Name is required';
      } else if (name === 'email') {
        error = 'Email address is required';
      } else if (name === 'phone') {
        error = 'Phone number is required';
      } else if (name === 'message') {
        error = 'Message is required';
      }
      setErrors({ ...errors, [name]: error });
    } else {
      // Field-specific format validation
      if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setErrors({ ...errors, email: 'Please enter a valid email address' });
      } else if (name === 'phone' && !/^\d{10,}$/.test(value.replace(/\D/g, ''))) {
        setErrors({ ...errors, phone: 'Phone number must be at least 10 digits' });
      } else {
        setErrors({ ...errors, [name]: '' });
      }
    }
  };

  const validate = () => {
    let newErrors = {};

    // Name validation
    if (!formData.firstname.trim()) {
      newErrors.firstname = 'Name is required';
    } else if (formData.firstname.trim().length < 2) {
      newErrors.firstname = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be at least 10 digits';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
    try {
        visitorTracking.trackFormSubmission('contact_page', formData);
        const apiBase = process.env.REACT_APP_API_URL || '';
        const response = await axios.post(`${apiBase}/send-email`, formData);
        if (response.data.success) {
            alert('Email sent successfully!');
        } else {
            alert('Failed to send email.');
        }
    } catch (error) {
        console.error('There was an error sending the email:', error);
        alert('Error sending email!');
    }

    // Clear the form
    setFormData({
      firstname: '',
      email: '',
      phone: '',
      message: ''
    });
  };
};

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     const portalId = process.env.REACT_APP_PORTAL_ID;
  //     const formId = process.env.REACT_APP_FORM_ID;
  //     const region = process.env.REACT_APP_REGION;
      
  //     const url = `https://forms.hubspot.com/uploads/form/v2/${portalId}/${formId}`;      
  //     try {
  //       const response = await fetch(url, {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/x-www-form-urlencoded',
  //         },
  //         body: new URLSearchParams({
  //           "firstname": formData.firstname,
  //           "lastname": formData.lastname,
  //           "email": formData.email,
  //           "phone": formData.phone,
  //           "company": formData.company,
  //           "message": formData.message
  //         })
  //       });
      
  //       // Check if the response status is 204 (No Content)
  //       if (response.status === 204) {
  //         console.log('Form submitted successfully with no response body');
  //         alert('Form submitted successfully!');
  //       } else if (!response.ok) {
  //         throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
  //       }

  //       setFormData({
  //         firstname: '',
  //         lastname: '',
  //         email: '',
  //         phone: '',
  //         company: '',
  //         message: ''
  //       });
      
      
  //     } catch (error) {
  //       console.error('Error:', error);
  //       alert('Error submitting form');
  //     }

  //   };
  //      }

  return (
    <div>
      <Helmet>
        <title>Contact RioBizSols | Get in Touch for Business Solutions</title>
        <meta name="description" content="Contact RioBizSols today! Reach out to discuss your staffing, digital marketing, web development, app development, or Odoo ERP needs. Quick response, tailored solutions." />
        <meta name="keywords" content="contact us, business inquiry, staffing solutions, digital marketing services, web development, app development, Odoo ERP support" />
        <meta name="author" content="RioBizSols" />
        
        {/* Open Graph Tags for Social Sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact RioBizSols | Get in Touch for Business Solutions" />
        <meta property="og:description" content="Contact RioBizSols today! Reach out for staffing, digital marketing, web development, app development, or Odoo ERP services." />
        <meta property="og:url" content="https://riobizsols.com/contact" />
        <meta property="og:image" content="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599900/rio_main_website/kkq6sbfnwcezhjve4u4p.jpg" />
        <meta property="og:site_name" content="RioBizSols" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact RioBizSols | Get in Touch for Business Solutions" />
        <meta name="twitter:description" content="Get in touch with RioBizSols for staffing, digital marketing, development, or ERP solutions." />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://riobizsols.com/contact" />
        
        {/* Schema.org LocalBusiness Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "RioBizSols",
            "description": "End-to-end business solutions provider",
            "url": "https://riobizsols.com",
            "telephone": "+91-9876543210",
            "email": "info@riobizsols.com",
            "areaServed": ["IN", "US", "GB"],
            "sameAs": [
              "https://www.linkedin.com/company/riobizsols",
              "https://www.facebook.com/riobizsols",
              "https://www.youtube.com/riobizsols"
            ]
          })}
        </script>
      </Helmet>
      <div className="contact-form">
        <div className="headlines">
          <h2 className='headline-1'>Whenever You Need Us, We're Here to Listen, Support, and Deliver Solutions!</h2>
          <h2 className='headline-2'>Let's Discuss Your Project</h2>
        </div>
        <div className="main-form">
          <form onSubmit={handleSubmit}>
            <div className={`form-group ${errors.firstname ? 'error' : ''}`}>
              <label htmlFor="name">Enter your name <span>*</span></label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.firstname ? 'error-input' : ''}
              />
              {errors.firstname && <span className="error-message">{errors.firstname}</span>}
            </div>

            {/* <div className={`form-group ${errors.lastname ? 'error' : ''}`}>
              <label htmlFor="name">Enter your lastname <span>*</span></label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.lastname ? 'error-input' : ''}
              />
              {errors.lastname && <span className="error-message">{errors.lastname}</span>}
            </div> */}

            <div className={`form-group ${errors.email ? 'error' : ''}`}>
              <label htmlFor="email">Email <span>*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email ? 'error-input' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className={`form-group ${errors.phone ? 'error' : ''}`}>
              <label htmlFor="phone">Phone number <span>*</span></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.phone ? 'error-input' : ''}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

           {/* <div className={`form-group ${errors.company ? 'error' : ''}`}>
              <label htmlFor="company">Company name <span>*</span></label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.company ? 'error-input' : ''}
              />
              {errors.company && <span className="error-message">{errors.company}</span>}
            </div> */}

            <div className={`form-group ${errors.message ? 'error' : ''}`}>
              <label htmlFor="message">Message <span>*</span></label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.message ? 'error-input' : ''}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button className='s-btn' type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Contact Details */}
      <div>
        <h1 className='contact-head'>Contact Us</h1>
      <img className='con-img' src={contactimg} alt="contact" />
      </div>
      <div className="contact-details">
        <div className="co-container">
          <div className="grid-1">
            <div className="phone">
              <div className="s-ico">
                <FiPhone />
              </div>
              <div className="con-1">
                <div className='ph'>Phone Numbers</div>
                <div className='numbers'><span><a href="tel:+17602846711" style={{textDecoration:'none', color:'black'}}>+1 760 284 6711</a> /</span> <span> <a href="tel:+918884910777 " style={{textDecoration:'none', color:'black'}}>+918884910777</a></span></div>
              </div>
            </div>

            <div className='media-icons'>
              <Link className='icn' to='https://www.facebook.com/riobizsols/'><FaFacebookF /></Link>
              <Link className='icn' to='https://www.linkedin.com/company/rio-business-solutions-usa/'><FaLinkedinIn /></Link>
              <Link className='icn' to='https://www.youtube.com/channel/UC37z3CVHMraqRnrGrlucZ0g'><FaYoutube /></Link>
              <Link className='icn' to='https://www.quora.com/profile/RIO-Bizsols-Pvt-Ltd?q=rio+business+solutions'><FaQuora /></Link>
            </div>
          </div>

          <div className="spreader"></div>

          <div className="grid-2">
            <div className="email">
              <div className="s-ico">
                <SiGmail />
              </div>
              <div className="con-2">
                <div className="em">Email Address</div>
                <div className='email-id'>
                  <Link to="mailto:info@riobizsols.com"><span>info@riobizsols.com</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
