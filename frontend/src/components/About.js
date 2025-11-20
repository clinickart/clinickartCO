// import React from 'react';
// import '../components/About.css';
// import Footer from './Footer';

// const About = () => {
//     const teamMembers = [
//         { 
//             name: 'Dr. Mahima Mishra', 
//             role: 'Founder', 
//             image: '/assets/Mahima.jpg' 
//         },
//         { 
//             name: 'Mueen Delvi', 
//             role: 'Co-Founder', 
//             image: '/assets/Mueen.jpg' 
//         },
//         { 
//             name: 'Sharad Anchan', 
//             role: 'Business Advisor', 
//             image: '/assets/sharad.jpg' 
//         },
//         { 
//             name: 'Hemant Krishna', 
//             role: 'Full Stack Engineer', 
//             image: '/assets/hemantkrishna.jpg' 
//         },
//         { 
//             name: 'Sharanya Bhat N', 
//             role: 'Junior Developer',
//             image: '/assets/Sharanya.jpg' 
//         },
//         { 
//             name: 'Shreya K', 
//             role: 'Junior Developer',
//             image: '/assets/Shreya.jpg' 
//         }
//     ];

//     const backgroundStyle = {
//         backgroundImage:"url('/assets/teeth.jpg')",
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         backgroundAttachment: 'fixed'
//     };

//     return (
//         <>
//         <div className="about-page" style={backgroundStyle}>
//             <div className="about-page-overlay"></div>
//             <section className="about section" id="about">
//                 <div className="about__container ">
//                     {/* Main About Section */}
//                     <div className="section__header">
//                         <span className="section__subtitle">ABOUT CLINICKART</span>
//                         <h2 className="section__title"style={{color:"#ffffff",textShadow:"none"}}>Dental Supplies Delivered Fast</h2>
//                         <p className="about-section__description"style={{color:'#ffffffff'}}>Shop quality dental products with quick delivery options.</p>
//                     </div>
                    
//                     <div className="about__content">
//                         <div className="about__text">
//                             <p className="about__description">
//                                 ClinicKart was born from a simple observation: Healthcare professionals spend too much valuable time struggling with supplies—chasing vendors, waiting for deliveries, and dealing with price uncertainties—when their true focus should be patients.
//                             </p>
//                             <p className="about__description">
//                                 As a team of healthcare professionals and entrepreneurs, we set out with one clear goal: to transform the way clinics and suppliers connect. We believe that clinics should never pause treatment because of missing supplies, and local suppliers deserve digital empowerment to grow faster in the modern market.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Mission & Vision Section */}
//                     <div className="mission-vision__section">
//                         <div className="mission-vision__grid">
//                             <div className="mission-vision__card">
//                                 <h3>Our Mission</h3>
//                                 <p>Empower Suppliers - Digitally enabling local healthcare suppliers for seamless and quick procurement.</p>
//                             </div>
//                             <div className="mission-vision__card">
//                                 <h3>Our Vision</h3>
//                                 <p>Trusted Link - To bridge the gap between clinics and suppliers through technology, trust, and speed.</p>
//                             </div>
//                             <div className="mission-vision__card">
//                                 <h3>Our Goal</h3>
//                                 <p>Transform Accessibility - To be the most trusted hyperlocal quick-commerce platform for healthcare supplies.</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Services Section */}
//                     <div className="services__section">
//                         <div className="services__grid">
//                             <div className="service__card">
//                                 <h3>For Clinics</h3>
//                                 <div className="service__features">
//                                     <p>Smart Procurement Made Easy</p>
//                                     <p>One-Stop Marketplace – Find all your dental & healthcare supplies in one place</p>
//                                     <p>Faster Deliveries – Get supplies quickly from nearby vendors</p>
//                                     <p>Transparent Pricing – No hidden costs, fair and local rates</p>
//                                     <p>Easy Payments – Pay online or with cash on delivery</p>
//                                     <p>Track & Manage – Order history, delivery tracking, and easy reordering</p>
//                                 </div>
//                             </div>
//                             <div className="service__card">
//                                 <h3>For Suppliers</h3>
//                                 <div className="service__features">
//                                     <p>Grow Your Business Smarter</p>
//                                     <p>Expand Your Reach – Connect with more local clinics instantly</p>
//                                     <p>Smarter Selling – Manage inventory, orders & payments in one dashboard</p>
//                                     <p>Faster Growth – Quick deliveries mean happy clinics and repeat orders</p>
//                                     <p>Secure Payments – Safe transactions with in-app payment gateway</p>
//                                     <p>Business Insights – Get data-driven insights to scale faster</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Team Section */}
//                     <div className="team__section">
//                         <div className="section__header">
//                             <h2 className="section__title">Our Team</h2>
//                             <p className="about-section__description">Meet the passionate professionals driving healthcare innovation forward</p>
//                         </div>
                        
//                         <div className="team__grid">
//                             {teamMembers.map((member, index) => (
//                                 <div key={index} className="team__member">
//                                     <div className="member__avatar">
//                                         <img 
//                                             src={member.image} 
//                                             alt={member.name}
//                                             className="member__image"
//                                             onError={(e) => {
//                                                 e.target.style.display = 'none';
//                                                 e.target.nextSibling.style.display = 'flex';
//                                             }}
//                                         />
//                                         <div className="member__fallback">
//                                             {member.name.split(' ').map(n => n[0]).join('')}
//                                         </div>
//                                     </div>
//                                     <div className="team__member-info">
//                                         <h3 className="team__member-name">{member.name}</h3>
//                                         <p className="team__member-role">{member.role}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
                        
//                         <div className="team__story">
//                             <h3>Our Story and Core Values</h3>
//                             <p>Our goal is to build a sustainable, hyperlocal ecosystem where clinics get instant access to reliable supplies at fair prices, suppliers grow their businesses with smart tools and digital visibility, and healthcare as a whole becomes more efficient, accessible, and future-ready.</p>
//                         </div>
//                     </div>
//                 </div>
                 
//             </section>
//         </div>
//          <Footer />
//         </>
//     );
// };

// export default About;


import React from 'react';
import '../components/About.css';
import Footer from './Footer';

const About = () => {
    const teamMembers = [
        { 
            name: 'Dr. Mahima Mishra', 
            role: 'Founder', 
            image: '/assets/Mahima.jpg' 
        },
        { 
            name: 'Mueen Delvi', 
            role: 'Co-Founder', 
            image: '/assets/Mueen.jpg' 
        },
        { 
            name: 'Sharad Anchan', 
            role: 'Business Advisor', 
            image: '/assets/sharad.jpg' 
        },
        { 
            name: 'Hemant Krishna', 
            role: 'Full Stack Engineer', 
            image: '/assets/hemantkrishna.jpg' 
        },
        { 
            name: 'Sharanya Bhat N', 
            role: 'Junior Developer',
            image: '/assets/Sharanya.jpg' 
        },
        { 
            name: 'Shreya K', 
            role: 'Junior Developer',
            image: '/assets/Shreya.jpg' 
        }
    ];

    const backgroundStyle = {
        backgroundImage:"url('/assets/teeth.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
    };

    return (
        <>
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
      
   
       

                    {/* Services Section */}
                    <div className="services__section">
                        <div className="services__grid">
                            <div className="service__card">
                                <h3>For Clinics</h3>
                                <div className="service__features">
                                    <p>Smart Procurement Made Easy</p>
                                    <p>One-Stop Marketplace – Find all your dental & healthcare supplies in one place</p>
                                    <p>Faster Deliveries – Get supplies quickly from nearby vendors</p>
                                    <p>Transparent Pricing – No hidden costs, fair and local rates</p>
                                    <p>Easy Payments – Pay online or with cash on delivery</p>
                                    <p>Track & Manage – Order history, delivery tracking, and easy reordering</p>
                                </div>
                            </div>
                            <div className="service__card">
                                <h3>For Suppliers</h3>
                                <div className="service__features">
                                    <p>Grow Your Business Smarter</p>
                                    <p>Expand Your Reach – Connect with more local clinics instantly</p>
                                    <p>Smarter Selling – Manage inventory, orders & payments in one dashboard</p>
                                    <p>Faster Growth – Quick deliveries mean happy clinics and repeat orders</p>
                                    <p>Secure Payments – Safe transactions with in-app payment gateway</p>
                                    <p>Business Insights – Get data-driven insights to scale faster</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className="team__section">
                        <div className="section__header">
                            <h2 className="section__title"style={{textShadow:"none"}}>Our Team</h2>
                            <p className="about-section__description">Meet the passionate professionals driving healthcare innovation forward</p>
                        </div>
                        
                        <div className="team__grid">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="team__member">
                                    <div className="member__avatar">
                                        <img 
                                            src={member.image} 
                                            alt={member.name}
                                            className="member__image"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        <div className="member__fallback">
                                            {member.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    </div>
                                    <div className="team__member-info">
                                        <h3 className="team__member-name">{member.name}</h3>
                                        <p className="team__member-role">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="team__story">
                            <h3>Our Story and Core Values</h3>
                            <p>Our goal is to build a sustainable, hyperlocal ecosystem where clinics get instant access to reliable supplies at fair prices, suppliers grow their businesses with smart tools and digital visibility, and healthcare as a whole becomes more efficient, accessible, and future-ready.</p>
                        </div>
                    </div>
                </div>
                 
      </div>
        
         <Footer />  {/* Footer inside .about-page for background coverage */}
         </>
    );
};

export default About;