import React from 'react';
import { Mail, FileText } from 'lucide-react'; 
import searchLogo from '../img/white.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <img
              src={searchLogo}
              alt="AXIOM Search logo"
              className="h-6 w-auto mr-2"
            /> 
            <span className="font-blanka">AXIOM &nbsp; &nbsp;</span>
            <span className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} AXIOM Search. All rights reserved.
            </span>
          </div>

          <div className="flex flex-col items-end gap-1">
            <a
              href="mailto:inquire@useaxiom.net"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm">Get in touch</span>
            </a>
            <a
              href="/whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FileText className="h-4 w-4" />
              <span className="text-sm">Read The Whitepaper</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
