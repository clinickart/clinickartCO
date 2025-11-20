import React from 'react';
import './WhatsAppButton.css';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const phoneNumber = '918944094064'; // Your WhatsApp number
    const message = 'Hello! I would like to know more about ClinicKart.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a 
            href={whatsappUrl} 
            className="whatsapp-button" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className="whatsapp-icon" />
        </a>
    );
};

export default WhatsAppButton;
