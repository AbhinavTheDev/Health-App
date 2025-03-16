import React from 'react';
import { Button } from '../../src/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-green-900 text-white p-8 md:p-16 flex flex-col justify-center animate-fade-in-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">ABOUT</h2>
          <p className="text-lg mb-8">
            Discover the perfect harmony between ancient Ayurvedic wisdom and modern scientific innovation. 
            At HealthX, we blend time-tested natural remedies with cutting-edge research to create 
            holistic health solutions that nurture both body and mind.
          </p>
          <div>
            <Button className="bg-orange-500 text-white hover:bg-white hover:text-black transition-all duration-300">
              Learn More
            </Button>
          </div>
        </div>
        <div className="min-h-[400px] md:min-h-[600px] bg-gray-100 relative overflow-hidden animate-fade-in-right">
          <img 
            src="/main-page.png" 
            alt="Ayurvedic ingredients and mortar" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;