import React from 'react';
import { Button } from '../../src/components/ui/button';
import { Input } from '../../src/components/ui/input';
import { Textarea } from '../../src/components/ui/textarea';
import { MessageCircle, Clock, Calendar } from 'lucide-react';

const ConsultationSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-200" id="contact">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ayurveda-dark">
              Get Instant Consultation
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Connect with our expert practitioners who blend traditional Ayurvedic knowledge with modern scientific understanding for a holistic approach to your health concerns.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <MessageCircle className="h-6 w-6 text-ayurveda-medium" />
                </div>
                <div>
                  <h3 className="font-semibold text-ayurveda-dark">Personalized Advice</h3>
                  <p className="text-gray-700">Receive customized recommendations that respect both Ayurvedic principles and scientific evidence.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Clock className="h-6 w-6 text-ayurveda-medium" />
                </div>
                <div>
                  <h3 className="font-semibold text-ayurveda-dark">Quick Response</h3>
                  <p className="text-gray-700">Get answers to your health queries within hours, not days.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Calendar className="h-6 w-6 text-ayurveda-medium" />
                </div>
                <div>
                  <h3 className="font-semibold text-ayurveda-dark">Follow-up Support</h3>
                  <p className="text-gray-700">Ongoing guidance to help you achieve optimal results from your wellness journey.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12 animate-fade-in-right">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto md:mx-0 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-center text-ayurveda-dark">Request Consultation</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Enter your full name" 
                    className="w-full border-ayurveda-light focus:border-ayurveda-medium focus:ring-ayurveda-medium"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full border-ayurveda-light focus:border-ayurveda-medium focus:ring-ayurveda-medium"
                  />
                </div>
                
                <div>
                  <label htmlFor="concern" className="block text-sm font-medium text-gray-700 mb-1">
                    Health Concern
                  </label>
                  <Textarea 
                    id="concern" 
                    placeholder="Describe your health concern or question" 
                    className="w-full border-ayurveda-light focus:border-ayurveda-medium focus:ring-ayurveda-medium"
                    rows={4}
                  />
                </div>
                
                <Button className="w-full bg-green-600 text-white hover:bg-teal-700 transition-colors duration-300">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;