import React from 'react';

const AppStoreButtons: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center justify-center md:justify-start">
      <a 
        href="#" 
        className="flex items-center bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-900 transition-colors w-48"
      >
        <div className="mr-3">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
            <path d="M17.05 20.28c-.98.95-2.05.94-3.08.43-1.09-.5-2.07-.48-3.23 0-1.44.62-2.2.44-3.05-.42C2.7 15.25 3.77 7.01 9.02 6.75c1.66.02 2.8 1.12 3.71 1.13 1.26-.18 2.46-1.32 3.98-1.13 1.7.22 2.98 1.22 3.81 2.98-3.43 2.24-2.42 6.74.53 8.15-.95 2.02-2.13 4.03-4 2.4zm-3.33-14.6c-.19 1.82-1.66 3.23-3.34 3.03-.25-1.99 1.67-3.86 3.34-3.03z" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-xs">Download on the</span>
          <span className="text-base font-semibold -mt-1">App Store</span>
        </div>
      </a>
      
      <a 
        href="#" 
        className="flex items-center bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-900 transition-colors w-48"
      >
        <div className="mr-3">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
            <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.29.429-.29.684v-.001c0 .264.116.519.32.696l.05.045c.16.122.355.19.563.19.182 0 .353-.05.496-.142L17.724 12 4.748 1.328a.99.99 0 00-.496-.142 1.002 1.002 0 00-.643.234l.01-.009a1 1 0 00-.01 1.403z" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-xs">GET IT ON</span>
          <span className="text-base font-semibold -mt-1">Google Play</span>
        </div>
      </a>
    </div>
  );
};

export default AppStoreButtons;