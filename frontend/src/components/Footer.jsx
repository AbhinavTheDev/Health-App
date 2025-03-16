import React from "react";
import { Leaf, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="animate-fade-in" style={{ animationDelay: "0ms" }}>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white rounded-full p-2">
                <img
                  src="/logo.png"
                  alt="Ayurvedic ingredients and mortar"
                  className="inset-0 w-10 h-10 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold">HealthX</h3>
            </div>
            <p className="text-ayurveda-light">
              Bridging ancient Ayurvedic wisdom with modern scientific
              innovations for holistic health solutions.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "150ms" }}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-ayurveda-light hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#diagnostic"
                  className="text-ayurveda-light hover:text-white transition-colors duration-300"
                >
                  Diagnostic Services
                </a>
              </li>
              <li>
                <a
                  href="/#products"
                  className="text-ayurveda-light hover:text-white transition-colors duration-300"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-ayurveda-light hover:text-white transition-colors duration-300"
                >
                  Consultation
                </a>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-ayurveda-light hover:text-white transition-colors duration-300"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-ayurveda-light hover:text-white transition-colors duration-300"
                >
                  Ayurvedic Articles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-ayurveda-light hover:text-white transition-colors duration-300"
                >
                  Health Tips
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-ayurveda-light hover:text-white transition-colors duration-300"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "450ms" }}>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.facebook.com/"
                className="hover:text-green-200 transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.twitter.com/"
                className="hover:text-green-200 transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/"
                className="hover:text-green-200 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/"
                className="hover:text-green-200 transition-colors duration-300"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <p className="text-white">Email: contact@healthx.com</p>
            <p className="text-white">Phone: +1 (555) 123-4567</p>
          </div>
        </div>

        <div className="border-t border-ayurveda-medium pt-6 mt-6 text-center text-white">
          <p>© {new Date().getFullYear()} HealthX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
