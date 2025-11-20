import React from 'react';
import styles from './Subservice.module.css';

export default function Subservice() {
  return (
    <div className={styles.servicesPage}>
      <div className={styles.overlay}></div>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h3 className={styles.title}>Our Products</h3>
            <p className={styles.description}>
              Explore <span style={{ color: '#FFD700' }}>Clinic</span>
              <span style={{ color: '#FF0000' }}>Kart</span>'s solutions for dentists and suppliers.
            </p>
          </div>

          {/* Video Section */}
          <div className={styles.videoSection}>
            <div className={styles.monitor}>
              <video
                src="/assets/clinickkartvideo.mp4"
                autoPlay
                loop
                muted
                controls
                playsInline
                className={styles.videoPlayer}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Software Solutions */}
          <div className={styles.categorySection}>
            <h2 className={styles.sectionTitle}>Software Solutions</h2>
            <div className={styles.cardsGrid}>
              {/* Card 1: User Web App */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <img
                    src="/assets/userweb.png"
                    alt="User Web App Icon"
                    className={styles.icon}
                  />
                </div>
                <h4 className={styles.cardTitle}>User Web App</h4>
                <p className={styles.cardDescription}>
                  Order dental & clinic supplies online, track orders, and manage your clinic's needs with ease.
                </p>
                <span className={styles.availableNow} onClick={() => window.location.href = 'https://user.clinickart.co'} style={{ cursor: 'pointer' }}>EXPLORE</span>
              </div>

              {/* Card 2: Vendor Web App */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <img
                    src="/assets/vendorweb.png"
                    alt="Vendor Web App Icon"
                    className={styles.icon}
                  />
                </div>
                <h4 className={styles.cardTitle}>Vendor Web App</h4>
                <p className={styles.cardDescription}>
                  Suppliers can manage inventory, receive orders, and connect with more clinics digitally.
                </p>
                <span className={styles.availableNow} onClick={() => window.location.href = 'https://vendor.clinickart.co'} style={{ cursor: 'pointer' }}>EXPLORE</span>
              </div>

              {/* Card 3: User App */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <img
                    src="/assets/userphone.png"
                    alt="Android User App Icon"
                    className={styles.icon}
                  />
                </div>
                <h4 className={styles.cardTitle}>User App (Android/iOS)</h4>
                <p className={styles.cardDescription}>
                  Order supplies on the go with our Android app for clinics and dental professionals.
                </p>
                <span className={styles.comingSoon}>Coming Soon</span>
              </div>

              {/* Card 4: Vendor App */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <img
                    src="/assets/vendorphone.png"
                    alt="Android Vendor App Icon"
                    className={styles.icon}
                  />
                </div>
                <h4 className={styles.cardTitle}>Vendor App (Android/iOS)</h4>
                <p className={styles.cardDescription}>
                  Vendors can manage their business, orders, and connect with clinics from anywhere.
                </p>
                <span className={styles.comingSoon}>Coming Soon</span>
              </div>
            </div>
          </div>

          {/* Hardware Solutions */}
          <div className={styles.categorySection}>
            <h2 className={styles.sectionTitle}>Hardware Solutions</h2>
            <div className={styles.cardsGrid}>
              {/* Hardware Card 1: Aerovacuator */}
              <div className={`${styles.card} ${styles.hardwareCard}`}>
                <h4 className={styles.cardTitle}>Aerovacuator</h4>
                <div className={styles.hardwareDescription}>
                  <p>Our patent-granted extraoral dental suction system is designed to significantly reduce aerosols during dental procedures, enhancing safety for both practitioners and patients. The Aerovacuator features:</p>
                  <ul className={styles.featureList}>
                    <li>High-efficiency suction technology</li>
                    <li>Ergonomic design for easy handling</li>
                    <li>Reduces aerosol contamination by up to 95%</li>
                    <li>Quiet operation for patient comfort</li>
                  </ul>
                </div>
              </div>

              {/* Hardware Card 2: Sterident */}
              <div className={`${styles.card} ${styles.hardwareCard}`}>
                <h4 className={styles.cardTitle}>Sterident</h4>
                <div className={styles.hardwareDescription}>
                  <p>The Sterident is an advanced dental instrument sterilization system that ensures optimal hygiene and safety in clinical environments. Key features include:</p>
                  <ul className={styles.featureList}>
                    <li>Rapid sterilization cycles</li>
                    <li>Advanced monitoring and validation</li>
                    <li>Energy-efficient operation</li>
                    <li>Compliant with international sterilization standards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
