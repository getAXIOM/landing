import React from 'react';
import { Mail } from 'lucide-react';
import logoSrc from '../img/whiteLogo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <img
       src={logoSrc}
          className="
            absolute inset-0
            w-1/2 max-w-lg mx-auto
            opacity-10 pointer-events-none
             animate-float z-0
            "
            alt="AXIOM Logo"
        />
            <span className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} AXIOM Search. All rights reserved.
            </span>
          </div>
          
          <a 
            href="mailto:inquire@useaxiom.net"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Mail className="h-4 w-4" />
            <span className="text-sm">Get in touch</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer