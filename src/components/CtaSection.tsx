import React from 'react';
import { ChevronRight } from 'lucide-react';
import AppStoreButtons from './ui/AppStoreButtons';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-600 to-blue-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 h-64 w-64 bg-white rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 h-64 w-64 bg-orange-400 rounded-full filter blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white bg-opacity-20 text-white px-4 py-1 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="text-orange-200 mr-2">⏱️</span> 
            Your exam is approaching! Start your prep today
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Create Your Personal Revisions Today
          </h2>
          
          <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have transformed their exam preparation with our proven methodology. It only takes 2 minutes to get started.
          </p>
          
          <div className="max-w-md mx-auto mb-10">
            <AppStoreButtons />
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-4 md:mb-0 md:mr-6">
                <img 
                  src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Student Success" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-white"
                />
              </div>
              
              <div className="text-left">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-white mt-2">
                  "This app completely transformed my preparation. I went from struggling to understanding complex concepts easily. The personalized revision feature is a game-changer!"
                </p>
                
                <p className="text-blue-200 mt-2 font-medium">
                  - Aditya Sharma, JEE Advanced 2023 (AIR 342)
                </p>
              </div>
            </div>
          </div>
          
          <a 
            href="#" 
            className="inline-flex items-center text-white border-b border-white border-opacity-50 hover:border-opacity-100 mt-8 transition-all font-medium"
          >
            <span>See more success stories</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;