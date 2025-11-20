
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import About from './components/About'; // create this if not present
import Awards from './components/Awards'; // create this if not present
import Contact from './components/Contact'; // create this if not present
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';
import Aboutussub from './components/Aboutussub';
import Subservice from './components/Subservice';
import Supportedby from './components/SupportedBy';
import TestimonialsHome from './components/TestimonialsHome';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Aboutussub />
                <Subservice />
                <Supportedby />
                <TestimonialsHome />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/features" element={<Features />} />
          <Route path="/awards" element={<Awards/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
          <ScrollToTop />
          <WhatsAppButton />
 
      </div>
    </Router>
  );
}

export default App;