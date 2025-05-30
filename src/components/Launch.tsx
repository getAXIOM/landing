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
      className="relative py-16 sm:py-20 md:py-32 overflow-hidden launch-section"
      data-scroll-section
      style={{
        background: 'linear-gradient(to bottom, #18181b 0%, #000 100%)',
        zIndex: 1,
      }}
    >
      <div className="pointer-events-none absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black via-transparent to-transparent z-20" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-transparent to-transparent z-20" />

      <div 
        className="w-full flex flex-col items-center mb-10 sm:mb-16 z-30 relative title-container"
        data-scroll
        data-scroll-speed="0.5"
      >
        {/* Introducing text */}
        <div 
          className="introducing-text text-2xl sm:text-4xl md:text-6xl font-light text-gray-400 mb-4 tracking-wide opacity-0"
          data-scroll
          data-scroll-speed="0.6"
          data-scroll-class="introducing-animated"
          data-scroll-offset="400"
        >
          Introducing
        </div>

        {/* Launch title */}
        <h2
          className="launch-title text-4xl sm:text-6xl md:text-8xl font-semibold text-center opacity-0"
          data-scroll
          data-scroll-speed="0.3"
          data-scroll-class="launch-title-animated"
          data-scroll-offset="300"
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
          className="launch-subtitle text-base sm:text-xl md:text-3xl text-gray-300 font-medium tracking-wide opacity-0"
          data-scroll
          data-scroll-speed="0.4"
          data-scroll-class="subtitle-animated"
          data-scroll-offset="250"
        >
          The browser by AXIOM for <span className="text-white font-bold">YOU</span>
        </div>
      </div>

      <div 
        className="flex flex-col items-center justify-center mb-8 sm:mb-12 relative z-30 launch-icon-container"
        data-scroll
        data-scroll-speed="0.2"
      >
        <div className="launch-icon-wrapper relative">
          {/* Gradient background circle */}
          <div className="launch-icon-gradient"></div>
          
          {/* The icon itself */}
          <img
            src="/launchico.png"
            alt="AXIOM Launch Icon"
            className="launch-icon w-40 h-40 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px] object-contain"
            data-scroll
            data-scroll-class="launch-icon-animated"
            data-scroll-speed="0.1"
            data-scroll-offset="200"
          />
        </div>
      </div>

      <div 
        className="w-full flex flex-col items-center mt-6 sm:mt-8 z-30 relative platform-icons opacity-0"
        data-scroll
        data-scroll-speed="0.6"
        data-scroll-class="platforms-animated"
        data-scroll-offset="100"
      >
        <div className="text-base sm:text-lg md:text-xl text-gray-400 mb-2 sm:mb-3 font-medium tracking-wide">
          Will be available on:
        </div>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {platformIcons.map((item, idx) => (
            <span 
              key={idx} 
              title={item.label}
              className="platform-icon transform translate-y-4 opacity-0"
              data-scroll
              data-scroll-speed={0.7 + (idx * 0.1)}
              style={{ 
                transitionDelay: `${idx * 150}ms`,
              }}
            >
              {item.icon}
            </span>
          ))}
        </div>
      </div>
      
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-indigo-800/20 via-purple-700/15 to-pink-700/20 rounded-full blur-3xl opacity-40" />
      </div>

      <style>
        {`
          @font-face {
            font-family: 'Blanka';
            src: url('/fonts/Blanka-Regular.otf') format('opentype');
            font-display: swap;
          }

          .launch-icon-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .launch-icon-gradient {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 120%;
            height: 120%;
            background: radial-gradient(circle, rgba(167, 139, 250, 0.3) 0%, rgba(139, 92, 246, 0.15) 40%, transparent 70%);
            transform: translateX(-50%) translateY(-50%);
            border-radius: 50%;
            opacity: 0;
            transition: opacity 1.5s ease-out, transform 1.5s ease-out;
            z-index: -1;
          }

          .launch-icon {
            transform: scale(0.5);
            opacity: 0;
            transition: transform 1.5s cubic-bezier(0.16, 1, 0.3, 1), 
                        opacity 1.2s ease-out,
                        filter 1.5s ease-out;
            filter: brightness(0.8) saturate(0.8);
          }

          .launch-icon-animated {
            transform: scale(1);
            opacity: 1;
            filter: brightness(1.1) saturate(1.1) drop-shadow(0 20px 40px rgba(167, 139, 250, 0.3));
            animation: gentle-float 6s ease-in-out infinite 1s;
          }

          .launch-icon-animated ~ .launch-icon-gradient,
          .launch-icon-wrapper:has(.launch-icon-animated) .launch-icon-gradient {
            opacity: 1;
            transform: translateX(-50%) translateY(-50%) scale(1.1);
          }

          .introducing-text {
            transition: opacity 1.2s ease-out, transform 1s ease-out;
            transform: translateY(20px);
          }

          .introducing-animated {
            opacity: 1 !important;
            transform: translateY(0);
          }

          .launch-title {
            transition: opacity 1.5s ease-out, transform 1.2s ease-out;
            transform: translateY(30px) scale(0.95);
          }

          .launch-title-animated {
            opacity: 1 !important;
            transform: translateY(0) scale(1);
          }

          .launch-subtitle {
            transition: opacity 1.2s ease-out, transform 1s ease-out;
            transform: translateY(20px);
          }

          .subtitle-animated {
            opacity: 1 !important;
            transform: translateY(0);
          }

          .platform-icons {
            transition: opacity 1.2s ease-out;
          }

          .platforms-animated {
            opacity: 1 !important;
          }

          .platform-icon {
            transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
                        opacity 0.8s ease-out;
          }

          .platforms-animated .platform-icon {
            transform: translateY(0) !important;
            opacity: 1 !important;
          }

          @keyframes gentle-float {
            0%, 100% {
              transform: scale(1) translateY(0px);
            }
            50% {
              transform: scale(1) translateY(-10px);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Launch;