import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-white">
          <span className="text-purple-500">Motion</span>Portfolio
        </a>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map(item => <a key={item.name} href={item.href} className="text-gray-300 hover:text-purple-500 transition-colors">
              {item.name}
            </a>)}
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300 focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden bg-gray-800 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map(item => <a key={item.name} href={item.href} className="text-gray-300 hover:text-purple-500 transition-colors" onClick={toggleMenu}>
                {item.name}
              </a>)}
          </div>
        </div>}
    </nav>;
};