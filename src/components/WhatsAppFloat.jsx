import React from 'react';
import './WhatsAppFloat.css';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat() {
  const phone = '918884910777';
  const text = encodeURIComponent('Hi RIO BizSols, I would like to know more. Please share details.');
  const url = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      className="whatsapp-float"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <span className="whatsapp-float-inner">
        <FaWhatsapp className="whatsapp-float-icon" aria-hidden="true" />
      </span>
    </a>
  );
}
