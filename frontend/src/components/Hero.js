import React from 'react';
import styles from './Hero.module.css';

const Hero = ({ 
    imageSrc = '/assets/clinickhero.jpg',
    subtitle = (<>Welcome to <span style={{ color: '#FFD700' }}>Clinic</span><span style={{ color: '#FF0000' }}>Kart</span></>),
    title = 'Your Trusted <br /> Healthcare Solution <br /> Partner',
    description = 'From overlooked challenges to breakthrough solutions — ClinicKart transforms modern healthcare and dentistry with innovation that truly works.',
    showButtons = true,
    backgroundSize = 'cover'
}) => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section 
            className={styles.hero} 
            id="home"
            style={{ 
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: backgroundSize
            }}  
        >
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                {/* Left Column */}
                <div className={styles.contentLeft}>
                    <span className={styles.subtitle}>
                        {subtitle}
                    </span>
                    <h1 className={styles.title}>
                        {title.split('<br />').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                {index < title.split('<br />').length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </h1>
                </div>

                {/* Right Column */}
                <div className={styles.contentRight}>
                    <p className={styles.description}>
                        {description}
                    </p>
                    {showButtons && (
                        <div className={styles.buttons}>
                            <button 
                                onClick={() => window.location.href = 'https://user.clinickart.co'} 
                                className={styles.btnPrimary}
                            >
                                Shop Now
                            </button>
                            <button 
                                onClick={() => window.location.href = 'https://vendor.clinickart.co'} 
                                className={styles.btnSecondary}
                            >
                                Become a Vendor
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
