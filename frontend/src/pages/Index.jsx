import React, { useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import HeroSection from '../components/HeroSection';
import DiagnosticSection from '../components/DiagnosticSection';
import ProductSection from '../components/ProductSection';
import ConsultationSection from '../components/ConsultationSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Function to handle scroll animations
    const handleScroll = () => {
      const animationElements = document.querySelectorAll('.animate-fade-in, .animate-fade-in-left, .animate-fade-in-right');
      
      animationElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('opacity-100');
        } else {
          // Don't hide elements that have already been shown
          if (!element.classList.contains('opacity-100')) {
            element.classList.add('opacity-0');
          }
        }
      });
    };
    
    // Initial setup for animations
    const allAnimElements = document.querySelectorAll('.animate-fade-in, .animate-fade-in-left, .animate-fade-in-right');
    allAnimElements.forEach((el) => {
      el.classList.add('opacity-0', 'transition-all', 'duration-700');
    });
    
    // Run once on load
    setTimeout(handleScroll, 100);
    
    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <DiagnosticSection />
      <ProductSection />
      <ConsultationSection />
      <Footer />
    </div>
  );
};

export default Index;