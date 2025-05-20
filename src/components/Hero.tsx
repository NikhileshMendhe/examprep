import React from 'react';
import { Clock, ChevronRight } from 'lucide-react';
import AppStoreButtons from './ui/AppStoreButtons';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-70"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 h-64 w-64 bg-orange-400 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 h-64 w-64 bg-purple-400 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side with text */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <div className="inline-block bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              <Clock className="inline-block mr-1 h-4 w-4" /> Important day: JEE/NEET 2025 - Just 3 months to go!
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent">Practice. Revise.</span> 
              <br />
              <span className="text-gray-900">Clear Your Exams.</span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
              Our proven methodology helps you master your exam preparation with personalized revisions, smart practice, and real-time progress tracking.
            </p>
            
            <AppStoreButtons />
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center text-gray-600">
                <div className="bg-green-100 rounded-full p-2 mr-2">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>150,000+ Happy Students</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <div className="bg-blue-100 rounded-full p-2 mr-2">
                  <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>4.8/5 App Rating</span>
              </div>
            </div>
          </div>
          
          {/* Right side with app mockup */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative mx-auto max-w-xs">
              {/* Phone frame */}
              <div className="bg-gray-900 rounded-[3rem] p-2 shadow-2xl relative z-10">
                <img 
                  src="https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="ExamPrep App Interface" 
                  className="rounded-[2.5rem] h-[500px] object-cover"
                />
                
                {/* Glowing elements */}
                <div className="absolute top-32 -right-6 h-16 w-16 bg-purple-500 rounded-full filter blur-md animate-pulse"></div>
                <div className="absolute top-64 -left-6 h-16 w-16 bg-blue-500 rounded-full filter blur-md animate-pulse delay-700"></div>
                <div className="absolute top-96 -right-6 h-16 w-16 bg-orange-500 rounded-full filter blur-md animate-pulse delay-1000"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/4 -right-8 h-32 w-32 bg-purple-600 rounded-full opacity-10"></div>
              <div className="absolute bottom-1/4 -left-8 h-32 w-32 bg-blue-600 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center">
          <span className="text-gray-500 text-sm mb-2">Scroll to explore</span>
          <div className="animate-bounce">
            <ChevronRight className="h-6 w-6 text-gray-400 transform rotate-90" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;