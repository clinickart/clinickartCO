
import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleLogoClick = (e) => {
        e.preventDefault();
        if (window.location.pathname === '/') {
            // Already on homepage, just scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Navigate to homepage
            navigate('/');
            // Wait for navigation then scroll to top
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
        }
        closeMenu();
    };

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
        closeMenu();
        setActiveSection(sectionId);
    };

 const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about' },
  { name: 'Products', to: '/services' },
  { name: 'Awards & Achievements', to: '/awards' },
  { name: 'Contact Us', to: '/contact' }
];


    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <nav className="nav">
                <div className="nav__logo">
                    <a href="/" onClick={handleLogoClick}>
                        <img 
                            src="/assets/logoclinic.jpg" 
                            alt="ClinicKart Logo" 
                            className="logo-image" 
                        />
                          <h2>Clinic<span style={{ color: '#FF0000' }}>Kart</span></h2>
                    </a>
                </div>
                
                <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`}>
                    <ul className="nav__list">
  {navLinks.map((link) => (
    <li key={link.to} className="nav__item">
      <Link
        to={link.to}
        className={`nav__link ${window.location.pathname === link.to ? 'active' : ''}`}
        onClick={() => {
          closeMenu();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        {link.name}
      </Link>
    </li>
  ))}
</ul>

                    <div className="nav__close" onClick={closeMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                </div>
                
                <div className="nav__toggle" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </div>
            </nav>
        </header>
    );
};

export default Header;