import React from 'react';
import './Features.css';

const Features = () => {
    const features = [
        {
            title: 'HIPAA Compliant',
            description: 'Enterprise-grade security ensuring complete compliance with healthcare regulations and data protection standards.',
            icon: 'lock'
        },
        {
            title: 'Cloud-Based Infrastructure',
            description: 'Scalable cloud architecture providing seamless access from anywhere with automatic backups and disaster recovery.',
            icon: 'layers'
        },
        {
            title: 'Integration Ready',
            description: 'Seamless integration with existing systems, lab equipment, and third-party healthcare applications via robust APIs.',
            icon: 'package'
        },
        {
            title: '24/7 Support',
            description: 'Round-the-clock technical support and customer service to ensure uninterrupted operations and rapid issue resolution.',
            icon: 'coffee'
        },
        {
            title: 'Cost-Effective',
            description: 'Flexible pricing plans designed to maximize ROI while reducing operational costs and administrative burden.',
            icon: 'dollar'
        },
        {
            title: 'Customizable',
            description: 'Fully customizable platform that adapts to your specific workflow requirements and clinical protocols.',
            icon: 'tool'
        }
    ];

    return (
        <section className="features section" id="features">
            <div className="features__container container">
                <div className="section__header">
                    <span className="section__subtitle">Key Features</span>
                    <h2 className="section__title">Why Choose ClinicKart</h2>
                </div>
                <div className="features__grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature__item">
                            <div className="feature__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                </svg>
                            </div>
                            <div>
                                <h3 className="feature__title">{feature.title}</h3>
                                <p className="feature__description">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
