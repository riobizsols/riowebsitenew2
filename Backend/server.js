const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Import visitor tracking routes
const visitorRoutes = require('./routes/visitors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Constant product owner email
const productOwnerEmail = 'info@riobizsols.com';  // Replace with actual product owner email

// Route to handle email sending
app.post('/send-email', (req, res) => {
    const { firstname, email, phone, message } = req.body;

   // Create Nodemailer transporter
    // const transporter = nodemailer.createTransport({
    //     host: 'smtp.zoho.com', // Zoho SMTP server
    //     port: 465,             // Use 465 for SSL or 587 for TLS
    //     secure: true,          // True for SSL (465), False for TLS (587)
    //     auth: {
    //         user: process.env.EMAIL_USER, // Full Zoho email address
    //         pass: process.env.EMAIL_PASS, // App-specific password
    //     },
    // });

    //Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',  // You can use other email services as well
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        
    });

    transporter.verify((error, success) => {
        if (error) {
            console.error('SMTP Connection Error:', error);
        } else {
            console.log('SMTP Connected Successfully!');
        }
    });
    

    // Setup email data
    const mailOptions = {
        from:email,
        to: productOwnerEmail,
        replyTo: email,  // Customer's email for reply
        subject: `Message from Rio Contact Form ${email} | ${phone}` ,
        text: message,
    };
    
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({  success: false, message: 'Error sending email', error });
        }
        res.status(200).json({success: true, message: 'Email sent successfully!' });
    });
});

// Use visitor tracking routes
app.use('/api/visitors', visitorRoutes);

// Serve static files from the React build folder (production)
const buildPath = path.join(__dirname, '..', 'build');
if (process.env.NODE_ENV === 'production' || require('fs').existsSync(buildPath)) {
  app.use(express.static(buildPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
}

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


// import express from 'express';
// import fetch from 'node-fetch';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import dotenv from 'dotenv';

// dotenv.config();  // Initialize environment variables

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());
// app.use(bodyParser.json());

// app.post('/api/hubspot', async (req, res) => {
//   const contactData = req.body;
//   const apiKey = process.env.HUBSPOT_API_KEY;

//   try {
//     const response = await fetch(`https://api.hubapi.com/contacts/v1/contact?hapikey=${apiKey}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(contactData),
//     });

//     if (!response.ok) {
//       throw new Error('Error sending data to HubSpot');
//     }

//     const result = await response.json();
//     res.json(result);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
