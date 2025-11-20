import React, { useState, useEffect } from 'react';
import { testimonialsAPI } from '../services/api';
import './Testimonials.css';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    const defaultTestimonials = [
        {
            name: 'Dr. Michael Chen',
            position: 'Chief Medical Officer',
            company: 'City Health Center',
            text: 'ClinicKart has transformed how we manage our practice. The intuitive interface and comprehensive features have significantly improved our efficiency and patient satisfaction. Highly recommended!',
            rating: 5,
            avatar: 'DM'
        },
        {
            name: 'Sarah Patel',
            position: 'Practice Administrator',
            company: 'Metro Medical Group',
            text: 'The telemedicine platform is exceptional. It\'s helped us reach patients in remote areas and maintain continuity of care during challenging times. The technical support team is always responsive and helpful.',
            rating: 5,
            avatar: 'SP'
        },
        {
            name: 'Robert Johnson',
            position: 'Financial Director',
            company: 'Regional Hospital Network',
            text: 'Outstanding billing and insurance management system. We\'ve seen a 40% reduction in claim processing time and improved revenue cycle efficiency. ClinicKart is an investment that pays for itself.',
            rating: 5,
            avatar: 'RJ'
        }
    ];

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await testimonialsAPI.getAll();
                if (response.data && response.data.length > 0) {
                    setTestimonials(response.data);
                } else {
                    setTestimonials(defaultTestimonials);
                }
            } catch (error) {
                console.log('Using default testimonials data');
                setTestimonials(defaultTestimonials);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    const renderStars = (rating) => {
        return '★'.repeat(rating);
    };

    return (
        <section className="testimonials section" id="testimonials">
            <div className="testimonials__container container">
                <div className="section__header">
                    <span className="section__subtitle">Testimonials</span>
                    <h2 className="section__title">What Our Clients Say</h2>
                </div>
                {loading ? (
                    <div className="loading">Loading testimonials...</div>
                ) : (
                    <div className="testimonials__grid">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial__card">
                                <div className="testimonial__rating">
                                    <span>{renderStars(testimonial.rating)}</span>
                                </div>
                                <p className="testimonial__text">{testimonial.text}</p>
                                <div className="testimonial__author">
                                    <div className="author__avatar">
                                        <span>{testimonial.avatar}</span>
                                    </div>
                                    <div className="author__info">
                                        <h4 className="author__name">{testimonial.name}</h4>
                                        <p className="author__position">
                                            {testimonial.position}{testimonial.company && `, ${testimonial.company}`}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Testimonials;
