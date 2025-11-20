import React from 'react'
export default function Aboutussub() {
    const backgroundStyle = {
        backgroundImage:"url('/assets/teeth.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
    };
  return (
    <div>
       <div className="about-page" style={backgroundStyle}>
            <div className="about-page-overlay"></div>
            <div className="about section" id="about">
                <div className="about__container ">
                    {/* Main About Section */}
                    <div className="section__header">
                        <span className="section__subtitle">ABOUT CLINICKART</span>
                        <h2 className="section__title" style={{color:"#ffffff",textShadow:"none"}}>Dental Supplies Delivered Fast</h2>
                        <p className="about-section__description" style={{color:'#ffffffff'}}>Shop quality dental products with quick delivery options.</p>
                    </div>
                    
                    <div className="about__content">
                        <div className="about__text">
                            <p className="about__description">
                                ClinicKart was born from a simple observation: Healthcare professionals spend too much valuable time struggling with supplies—chasing vendors, waiting for deliveries, and dealing with price uncertainties—when their true focus should be patients.
                            </p>
                            <p className="about__description">
                                As a team of healthcare professionals and entrepreneurs, we set out with one clear goal: to transform the way clinics and suppliers connect. We believe that clinics should never pause treatment because of missing supplies, and local suppliers deserve digital empowerment to grow faster in the modern market.
                            </p>
                        </div>
                    </div>

                    {/* Mission & Vision Section */}
                    <div className="mission-vision__section">
                        <div className="mission-vision__grid">
                            <div className="mission-vision__card">
                                <h3>Our Mission</h3>
                                <p>Empower Suppliers - Digitally enabling local healthcare suppliers for seamless and quick procurement.</p>
                            </div>
                            <div className="mission-vision__card">
                                <h3>Our Vision</h3>
                                <p>Trusted Link - To bridge the gap between clinics and suppliers through technology, trust, and speed.</p>
                            </div>
                            <div className="mission-vision__card">
                                <h3>Our Goal</h3>
                                <p>Transform Accessibility - To be the most trusted hyperlocal quick-commerce platform for healthcare supplies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
};
