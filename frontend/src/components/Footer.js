


import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                {/* Left Side: ClinicKart Title and Description */}
                <div className="footer__left">
                    <a href="#home" className="footer__logo-link">
                     <img 
                            src="/assets/logoclinic.jpg" 
                            alt="ClinicKart Logo" 
                            className="logo-image" 
                        />
                    <h2 className="footer__title">Clinic<span style={{ color: '#FF0000' }}>Kart</span></h2>
                     </a>
                    <p className="footer__description">
                        Empowering healthcare providers with innovative solutions for exceptional patient care and operational excellence.
                    </p>  
                </div>
                  {/* Middle: Social Media Icons */}
                <div className="footer__social">
                    <a href="https://www.instagram.com/clinickart/" className="social__link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/infiniclinickart-supplies/about/?viewAsMember=true" className="social__link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75s1.75.784 1.75 1.75s-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.096-.021-2.507-1.528-2.507c-1.529 0-1.764 1.195-1.764 2.427v4.684h-3v-9h2.881v1.233h.041c.401-.761 1.381-1.563 2.845-1.563c3.043 0 3.604 2.004 3.604 4.609v4.721z" />
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61570897401205&sk=about" className="social__link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </a>
                    <a href="https://x.com/clinickart" className="social__link" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </a>
                </div>
        

                {/* Right Side: All other content in a single row */}
                

                    {/* Links in a row */}
                    <ul className="footer__links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Products</Link></li>
        
                        <li><Link to="/awards">Awards & Achievements</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
           

            {/* Copyright (centered below the row for separation) */}
            <div className="footer__copyright">
                © 2025 ClinicKart. All rights reserved. Empowering Healthcare Excellence.
            </div>
        </footer>
    );
};
export default Footer;
