import React, { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import logoSrc from '../img/whiteLogo.svg';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleWaitlistClick = () => {
    window.open('http://eepurl.com/jeuVSk', '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      data-scroll-section
      style={{ background: 'radial-gradient(circle at center, #333 0%, #000 70%)' }}
    >
      <img
        src={logoSrc}
        className="
          absolute inset-0
          w-1/2 max-w-lg mx-auto
          opacity-10 pointer-events-none
          animate-float z-0
        "
        alt="AXIOM Logo"
        data-scroll
        data-scroll-speed="-0.3"
      />

      {/* grid background */}
      <div className="absolute inset-0 bg-grid"></div>

      {/* main content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter"
            data-scroll
            data-scroll-speed="0.1"
          >
            <span 
              className="block text-transparent bg-clip-text gradient-text-white pb-2"
              data-scroll
              data-scroll-speed="0.2"
            >
              A is for <span className="font-blanka">AXIOM</span>
            </span>
            <span 
              className="block text-2xl md:text-3xl lg:text-4xl mt-3 font-light"
              data-scroll
              data-scroll-speed="0.15"
            >
              your home sweet home
            </span>
          </h1>
          <p 
            className="text-lg md:text-xl lg:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto"
            data-scroll
            data-scroll-speed="0.05"
          >
            "The jewel of the BnL fleet - the AXIOM!" The search engine of 2028.
          </p>
          <div 
            className="flex flex-col items-center justify-center"
            data-scroll
            data-scroll-speed="0.3"
          >
            <button
              onClick={handleWaitlistClick}
              className="px-8 py-4 bg-white text-black rounded-full shadow-glow hover:shadow-glow-intense transition-all duration-500 font-medium text-lg"
            >
              Join the Waitlist
            </button>
            <a
              href="/whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-white/80 hover:text-white transition-colors text-base font-medium underline"
            >
              How It Works
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7M7 7h10v10"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div 
        className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce"
        data-scroll
        data-scroll-speed="0.5"
      >
        <ChevronDown size={32} className="text-white/70" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>

      {showPopup && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-3 rounded-lg shadow-lg animate-fade-in">
          Coming soon! The waitlist isn't ready yet.
        </div>
      )}
    </section>
  );
};

export default Hero;
