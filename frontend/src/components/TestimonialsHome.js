import React from 'react';
import './TestimonialsHome.css';

const TestimonialsHome = () => {
    return (
        <section className="testimonials-home">
            <div className="testimonials-home__container">
                <div className="testimonials-home__header">
                    <span className="testimonials-home__subtitle">TESTIMONIALS</span>
                    <h2 className="testimonials-home__title">What Our Customers Say</h2>
                </div>
                
                <div className="testimonials-home__content">
                    <div className="coming-soon-badge">
                        <div className="badge-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                        </div>
                        <h3 className="coming-soon-title">Coming Soon!</h3>
                        <p className="coming-soon-text">
                            We're preparing to launch and can't wait to share our customers' experiences with you. 
                            Check back soon to see what they have to say!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsHome;
