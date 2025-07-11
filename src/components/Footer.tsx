import React from 'react';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="w-full py-8 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold text-white">
              <span className="text-purple-500">Motion</span>Portfolio
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            © {currentYear} Motion Portfolio. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            <a href="#home" className="text-gray-400 hover:text-purple-500 transition-colors">
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>;
};