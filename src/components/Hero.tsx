import React, { useEffect, useRef, useState } from 'react';
import { useParallax } from '../hooks/useParallax';
import { ChevronDown } from 'lucide-react';
import logoSrc from '../img/whiteLogo.svg';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [showPopup, setShowPopup] = useState(false);

  useParallax(heroRef);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      titleRef.current!.style.transform    = `translateY(${scrollY * 0.2}px)`;
      subtitleRef.current!.style.transform = `translateY(${scrollY * 0.1}px)`;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleWaitlistClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
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
     />


      {/* grid background */}
      <div className="absolute inset-0 bg-grid"></div>

      {/* main content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter">
            <span className="block text-transparent bg-clip-text gradient-text-white pb-2">
              A is for AXIOM
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-3 font-light">
              your home sweet home
            </span>
          </h1>
          <p ref={subtitleRef} className="text-lg md:text-xl lg:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
            The jewel of the BnL fleet - the AXIOM. The search engine of 2028.
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleWaitlistClick}
              className="px-8 py-4 bg-white text-black rounded-full shadow-glow hover:shadow-glow-intense transition-all duration-500 font-medium text-lg"
            >
              Experience AXIOM
            </button>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce">
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
