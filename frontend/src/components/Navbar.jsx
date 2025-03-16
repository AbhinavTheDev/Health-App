import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full bg-green-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center space-x-2">
          <div className="bg-white rounded-full p-2">
          <img 
            src="/logo.png" 
            alt="Ayurvedic ingredients and mortar" 
            className="inset-0 w-10 h-10 object-cover"
          />
          </div>
          <h1 className="text-3xl font-bold">HealthX</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-green-100 transition-colors duration-300">
            Home
          </Link>
          <Link to="/#products" className="hover:text-green-100 transition-colors duration-300">
            Our products
          </Link>
          <Link to="/#contact" className="hover:text-green-100 transition-colors duration-300">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;