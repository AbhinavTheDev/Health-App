import React from 'react';
import { Button } from '../../src/components/ui/button';
import { NavLink } from 'react-router-dom';
import { Zap, Sparkles } from 'lucide-react';

const DiagnosticSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-200 to-white" id="diagnostic">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in-left">
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-md mx-auto md:mx-0 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-teal-700 rounded-full">
                  <Zap className="h-8 w-8 text-ayurveda-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-teal-700 mb-4">Personalized Analysis</h3>
              <p className="text-gray-700 mb-4">
                Our algorithm analyzes your dosha profile, symptoms, and health history to create a detailed report.
              </p>
              <div className="flex justify-center">
                <div className="h-1 w-16 bg-orange-600 my-4"></div>
              </div>
              <p className="text-gray-700 mb-6">
                Receive actionable insights and recommendations based on both Ayurvedic principles and modern medical research.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12 animate-fade-in-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ayurveda-dark">
              AI-Powered Diagnostic Report Generator
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Experience the future of holistic health assessment with our advanced AI diagnostic system that bridges ancient wisdom with modern technology.
            </p>
            <p className="flex items-center text-gray-700 mb-4">
              <Sparkles className="h-5 w-5 text-ayurveda-accent mr-2" />
              <span>Integration of Ayurvedic prakruti assessment and scientific biomarkers</span>
            </p>
            <p className="flex items-center text-gray-700 mb-4">
              <Sparkles className="h-5 w-5 text-ayurveda-accent mr-2" />
              <span>Comprehensive health analysis delivered instantly</span>
            </p>
            <p className="flex items-center text-gray-700 mb-6">
              <Sparkles className="h-5 w-5 text-ayurveda-accent mr-2" />
              <span>Evidence-based recommendations for diet, lifestyle, and remedies</span>
            </p>
            <Button className="bg-green-600 text-white hover:bg-ayurveda-medium transition-colors duration-300">
            <NavLink to="/diagnostics">
              Get Your Report
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;