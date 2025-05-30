import React, { useRef } from 'react';
import { useParallax } from '../hooks/useParallax';
import { FaApple, FaWindows, FaLinux } from 'react-icons/fa';
import { SiAppstore } from 'react-icons/si'; 

const platformIcons = [
  { icon: <FaApple size={44} className="text-white drop-shadow" />, label: "Apple" },
  { icon: <FaWindows size={40} className="text-white drop-shadow" />, label: "Windows" },
  { icon: <FaLinux size={40} className="text-white drop-shadow" />, label: "Linux" },
  { icon: <SiAppstore size={40} className="text-white drop-shadow" />, label: "App Store" },
];

const Launch: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useParallax(sectionRef, 0.05);

  return (
    <section
      ref={sectionRef}
      id="axiom-launch"
      className="relative py-16 sm:py-20 md:py-32 overflow-hidden"
      data-scroll-section
      style={{
        background: 'linear-gradient(to bottom, #18181b 0%, #000 100%)',
        zIndex: 1,
      }}
    >
      <div className="pointer-events-none absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black via-transparent to-transparent z-20" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-transparent to-transparent z-20" />

      <div 
        className="w-full flex flex-col items-center mb-10 sm:mb-16 z-30 relative"
        data-scroll
        data-scroll-speed="0.5"
      >
        <h2
          className="text-4xl sm:text-6xl md:text-8xl font-semibold text-center"
          data-scroll
          data-scroll-speed="0.3"
          style={{
            fontFamily: 'Blanka, sans-serif',
            letterSpacing: '0.04em',
            WebkitTextStroke: '2.5px #fff',
            color: 'transparent',
            backgroundImage: 'linear-gradient(90deg,#fff,#a78bfa 80%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            marginBottom: '0.4em',
          }}
        >
          Launch
        </h2>
        <div 
          className="text-base sm:text-xl md:text-3xl text-gray-300 font-medium tracking-wide"
          data-scroll
          data-scroll-speed="0.4"
        >
          The browser by AXIOM for <span className="text-white font-bold">YOU</span>
        </div>
      </div>

      <div 
        className="flex flex-col items-center justify-center mb-8 sm:mb-12 relative z-30"
        data-scroll
        data-scroll-speed="0.2"
      >
        <img
          src="/launchico.png"
          alt="AXIOM Launch Icon"
          className="launch-icon w-40 h-40 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px] object-contain drop-shadow-2xl"
          data-scroll
          data-scroll-class="launch-icon-animated"
          data-scroll-speed="0.1"
          style={{
            filter: 'brightness(1.1) drop-shadow(0 8px 32px #a78bfa88)',
          }}
        />
      </div>

      <div 
        className="w-full flex flex-col items-center mt-6 sm:mt-8 z-30 relative"
        data-scroll
        data-scroll-speed="0.6"
      >
        <div className="text-base sm:text-lg md:text-xl text-gray-400 mb-2 sm:mb-3 font-medium tracking-wide">
          Will be available on:
        </div>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {platformIcons.map((item, idx) => (
            <span 
              key={idx} 
              title={item.label}
              data-scroll
              data-scroll-speed={0.7 + (idx * 0.1)}
            >
              {item.icon}
            </span>
          ))}
        </div>
      </div>
      
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-indigo-800/30 via-purple-700/20 to-pink-700/30 rounded-full blur-3xl opacity-60 animate-pulse" />
      </div>

      <style>
        {`
          @font-face {
            font-family: 'Blanka';
            src: url('/fonts/Blanka-Regular.otf') format('opentype');
            font-display: swap;
          }

          .launch-icon {
            transform: rotateX(90deg) rotateY(24deg) scale(0.5);
            opacity: 0;
            transition: transform 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                        opacity 1.2s ease-out;
          }

          .launch-icon-animated {
            transform: rotateY(24deg) rotateX(12deg) scale(1.18);
            opacity: 1;
          }
        `}
      </style>
    </section>
  );
};

export default Launch;