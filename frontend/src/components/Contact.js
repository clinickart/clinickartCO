import React, { useState } from 'react';
import '../components/Contact.css';
import Footer from './Footer';
import { contactAPI } from '../services/api';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        reason: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitStatus(null);

        try {
            const response = await contactAPI.submit(formData);
            console.log('Form submitted successfully:', response);
            
            setSubmitStatus({
                type: 'success',
                message: 'Thank you for your message! We have received your inquiry and will get back to you soon. Please check your email for confirmation.'
            });
            
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                reason: '',
                message: ''
            });
        } catch (error) {
            console.error('Form submission error:', error);
            
            setSubmitStatus({
                type: 'error',
                message: 'Sorry, there was an error submitting your message. Please try again or contact us directly.'
            });
        } finally {
            setLoading(false);
        }
    };

    // Background image style
    const pageStyle = {
        backgroundImage: "url('/assets/floss.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
    };

    return (
        <>
        <div className="contact-page" style={pageStyle}>
            <div className="contact-page-overlay"></div>
            <div className="contact-container">
                {/* Header Section */}
                <div className="contact-header">
                    <span className="section__subtitle">GET IN TOUCH</span>
                    <h1 className="contact-section__title"style={{textShadow:"none"}}>Contact Us</h1>
                    <p className="section__description"style={{color:"#ffffff"}}>
                        We're here to help. Reach out to us with any questions or feedback.
                    </p>
                </div>
                <div className="contact-content">
                    {/* Left Column - Contact Information */}
                    <div className="contact-info-section">
                        <div className="info-card">
                            <h2>Other Ways to Reach Us</h2>
                            
                            <div className="contact-method">
                                <div className="icon-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                    </svg>
                                </div>
                                <div className="contact-details">
                                    <a href="mailto:support@clinickart.co" className="contact-text contact-link">
                                        support@clinickart.co
                                    </a>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="icon-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="contact-details">
                                    <a href="tel:+918944094064" className="contact-text contact-link">
                                        +91 8944094064
                                    </a>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="icon-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="contact-details">
                                    <span className="contact-text">
                                        Infiniclinickart Supplies LLP<br />
                                        No 26, K No 38/1352/9<br />
                                        Central Revenue Layout, SRK Nagar Post<br />
                                        RK Hegde Nagar, Doddagubbi<br />
                                        Sampigehalli Police Station<br />
                                        Bangalore North, Bangalore- 560077<br />
                                        Karnataka, India
                                    </span>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="icon-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="contact-details">
                                    <span className="contact-text">
                                        <strong>Working Hours:</strong><br />
                                        Mon to Sun (9:00 AM to 9:00 PM)
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Map Section */}
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3556789!2d77.6187!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzU3LjciTiA3N8KwMzcnMDcuMyJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Clinic Location - RK Hegde Nagar, Bangalore"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="contact-form-section">
                        <div className="form-header">
                            <h2>Send Us a Message</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="contact-form">
                            {submitStatus && (
                                <div className={`status-message ${submitStatus.type}`}>
                                    {submitStatus.message}
                                </div>
                            )}
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Enter your Name*</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address*</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your Email"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
    <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            pattern="[0-9+\\-() ]+"
            required
        />
    </div>

                                <div className="form-group">
                                    <label htmlFor="reason">Reason for Contact</label>
                                    <select
                                        id="reason"
                                        name="reason"
                                        value={formData.reason}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Order Inquiry</option>
                                        <option value="order-inquiry">Order Inquiry</option>
                                        <option value="product-info">Product Information</option>
                                        <option value="technical-support">Technical Support</option>
                                        <option value="partnership">Partnership Inquiry</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6"
                                    placeholder="Please describe your issue or question in detail here..."
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-button" disabled={loading}>
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                
                </div>
                  
            </div>
            
        </div>
          <Footer />
          </>
    );
};

export default Contact;