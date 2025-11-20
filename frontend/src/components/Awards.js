import React from 'react';
import './Awards.css';
import Footer from './Footer.js';
import { FaMedal } from 'react-icons/fa';

const Awards = () => {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/clinickhero.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  };

  return (
    <>
    <div className="awards" style={backgroundStyle}>
      <div className="awards__overlay"></div>
      <div className="awards__container container">
        <div className="awards__header">
          <span className="awards__subtitle">Our Achievements</span>
          <h1 className="awards__title">Awards & Recognition</h1>
          <p className="section__description">
            Celebrating our journey of innovation and excellence in dental healthcare solutions.
          </p>
        </div>

        <div className="awards__content">
          <div className="awards__grid">
            <div className="award__card">
              <div className="award__badge">
                <FaMedal className="medal-icon" />
                <span className="ribbon"></span>
              </div>
              <div className="award__content">
                <h3 className="award__title">NIDHI Prayas Grant by DST, GoI</h3>
                <div className="award__achievement">
                  <span className="achievement__highlight">Achievement:</span>
                  <p>Received  grant for the development of Sterident - A Smart Device for Automated Sterilization and Monitoring of Dental Unit Waterlines.</p>
                </div>
              </div>
            </div>

            <div className="award__card">
              <div className="award__badge">
                <FaMedal className="medal-icon" />
                <span className="ribbon"></span>
              </div>
              <div className="award__content">
                <h3 className="award__title">Incubation by Indian Dental Association</h3>
                <div className="award__achievement">
                  <span className="achievement__highlight">Achievement:</span>
                  <p>Selected for incubation by Indian Dental Association (IDA's Foundation for HealthEdge Innovation & Knowledge Incubator) Mumbai, for ClinicKart: A Hyperlocal Quick-Commerce Platform for Dental & Healthcare Supplies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
     <Footer />
     </>
  );
};

export default Awards;