import React from 'react';
import Slider from "react-slick";
import './SupportedBy.css';  // Import custom CSS

const SupportedBy = () => {
    const settings = {
        infinite: true,  // Loops forever
        speed: 500,  // Transition speed
        slidesToShow: 5,  // Show 5 logos at a time on desktop
        slidesToScroll: 1,  // Scroll one by one
        autoplay: true,  // Autoplay enabled
        autoplaySpeed: 3000,  // Slow autoplay (3 seconds per slide – adjust for slower/faster)
        arrows: false,  // No arrows for clean look
        dots: false,  // No dots
        pauseOnHover: false,  // Autoplay doesn't stop on hover (continuous)
        responsive: [  // Adjust for smaller screens
            {
                breakpoint: 1024,  // Tablet: Show 4
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,  // Mobile: Show 3
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,  // Small mobile: Show 2
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // Array of 9 image paths (replace with your actual images in public/assets/)
    const logos = [
        '/assets/idalogo.jpg',
        '/assets/ktechlogo.png',
        '/assets/iiclogo.png',
        '/assets/mahelogo.jpg',
        '/assets/mutbi.jpeg',
        '/assets/nidhilogo.jpg',
        '/assets/sihlogo.png',
        '/assets/startupindia.png',
        '/assets/whitelogo.png'
    ];

   return (
        <section className="supported-by">
            <h2 className="supported-by__heading">Supported By</h2>
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <div key={index} className="supported-by__item">
                        <img 
                            src={logo} 
                            alt={`Supported By Logo ${index + 1}`} 
                            className="supported-by__logo" 
                        />
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default SupportedBy;