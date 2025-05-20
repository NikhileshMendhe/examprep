import React, { useState, useEffect } from 'react';
import { BookOpen, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <BookOpen className="h-8 w-8 text-purple-600" />
          <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            ExamPrep
          </span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">Features</a>
          <a href="#science" className="text-gray-700 hover:text-purple-600 transition-colors">Our Method</a>
          <a href="#resources" className="text-gray-700 hover:text-purple-600 transition-colors">Resources</a>
          <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-5 py-2 rounded-full font-medium hover:shadow-lg transition-all">
            Download App
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Features
            </a>
            <a href="#science" className="text-gray-700 hover:text-purple-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Our Method
            </a>
            <a href="#resources" className="text-gray-700 hover:text-purple-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Resources
            </a>
            <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-5 py-2 rounded-full font-medium hover:shadow-lg transition-all">
              Download App
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;