import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWaitlistClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Search className="h-8 w-8 mr-2" />
          <span className="text-2xl font-bold tracking-tighter">AXIOM</span>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Features', 'About', 'Mobile App', 'Security'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm uppercase tracking-widest hover:text-gray-400 transition-colors"
            >
              {item}
            </a>
          ))}
          <button 
            onClick={handleWaitlistClick}
            className="px-6 py-2 border border-white hover:bg-white hover:text-black transition-colors duration-300 rounded-full text-sm uppercase tracking-widest"
          >
            Join Waitlist
          </button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {['Features', 'About', 'Mobile App', 'Security'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm uppercase tracking-widest py-2 border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button 
              onClick={() => {
                handleWaitlistClick();
                setMobileMenuOpen(false);
              }}
              className="mt-4 px-6 py-2 border border-white hover:bg-white hover:text-black transition-colors duration-300 rounded-full text-sm uppercase tracking-widest self-start"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      )}

      {/* Popup */}
      {showPopup && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-3 rounded-lg shadow-lg animate-fade-in">
          Coming soon! The waitlist isn't ready yet.
        </div>
      )}
    </header>
  );
};

export default Navbar;