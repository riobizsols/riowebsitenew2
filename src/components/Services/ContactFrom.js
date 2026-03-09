import React, { useState } from 'react';
import '../../css/Contact.css';
import axios from 'axios';


const ContactFrom = () => {
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
        const apiBase = process.env.REACT_APP_API_URL || 'http://localhost:5001';
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
    <div style={{marginTop:-40}}>
      <div className="contact-form_bg">
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
    </div>
  );
};

export default ContactFrom;
