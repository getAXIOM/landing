import React, { useRef, useEffect, useState } from 'react';
import { Lock, Shield, Key, UserCheck, Cpu, Eye, Server, FileKey } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        setMousePosition({
          x: e.clientX - centerX,
          y: e.clientY - centerY
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const distance = Math.sqrt(mousePosition.x ** 2 + mousePosition.y ** 2);
  const maxDistance = 300; // Maximum distance for effect
  const intensity = Math.max(0, Math.min(1, 1 - distance / maxDistance));
  
  // Calculate angle for directional lighting
  const angle = Math.atan2(mousePosition.y, mousePosition.x) * (180 / Math.PI);
  
  const borderGradient = isHovered 
    ? `conic-gradient(from ${angle}deg, 
        rgba(167, 139, 250, 1) 0deg, 
        rgba(139, 92, 246, 1) 90deg, 
        rgba(167, 139, 250, 0.8) 180deg, 
        rgba(139, 92, 246, 0.6) 270deg, 
        rgba(167, 139, 250, 1) 360deg)`
    : `conic-gradient(from ${angle}deg, 
        rgba(167, 139, 250, ${intensity * 0.8}) 0deg, 
        rgba(139, 92, 246, ${intensity * 0.6}) 90deg, 
        rgba(167, 139, 250, ${intensity * 0.4}) 180deg, 
        rgba(139, 92, 246, ${intensity * 0.2}) 270deg, 
        rgba(167, 139, 250, ${intensity * 0.8}) 360deg)`;

  return (
    <div 
      ref={cardRef}
      className="feature-card relative bg-black backdrop-blur-sm rounded-2xl p-6 md:p-8 transition-all duration-500 transform hover:translate-y-[-4px] hover:scale-105"
      style={{ 
        animationDelay: `${delay}ms`,
      }}
      data-scroll
      data-scroll-speed={0.1 + (index * 0.02)}
      data-scroll-class="feature-card-animated"
      data-scroll-offset="200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border */}
      <div 
        className="absolute inset-0 rounded-2xl p-[2px] transition-all duration-300"
        style={{
          background: borderGradient,
          opacity: intensity > 0.1 || isHovered ? 1 : 0,
          filter: `blur(${isHovered ? 0 : intensity * 2}px)`,
        }}
      >
        <div className="w-full h-full bg-black rounded-2xl"></div>
      </div>
      
      {/* Card content */}
      <div className="relative z-10">
        <div className="mb-6 rounded-full bg-white/5 p-4 w-16 h-16 flex items-center justify-center transition-all duration-300 hover:bg-white/10">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>

      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x + 100}px ${mousePosition.y + 100}px, rgba(167, 139, 250, ${intensity * 0.1}) 0%, transparent 50%)`,
          opacity: intensity > 0.2 ? 1 : 0,
        }}
      />
    </div>
  );
};

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Highest-Tier Encryption",
      description: "Every search is protected with state-of-the-art encryption, ensuring your queries remain completely private.",
      delay: 100
    },
    {
      icon: <Key className="h-8 w-8" />,
      title: "Zero-Knowledge Architecture",
      description: "Our unique infrastructure ensures that even we can't access your search data - it's mathematically impossible.",
      delay: 200
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "No Tracking, Period",
      description: "We don't use cookies, fingerprinting, or any other tracking methods. Your privacy isn't a feature - it's our foundation.",
      delay: 300
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Easy to use",
      description: "Our simple to use interface makes it easy to search without worrying about your privacy.",
      delay: 400
    },
    {
      icon: <FileKey className="h-8 w-8" />,
      title: "End-to-End Safety",
      description: "No funny business here. Just safe, secure searches.",
      delay: 500
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Privacy, done beautifully",
      description: "Your searches, your secret.",
      delay: 600
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "AI Assitant",
      description: "Our AI systems help with everyday tasks, and help you learn more about the world around you.",
      delay: 700
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Integrated Accounts",
      description: "Create an account to save pages, preferences, and log into your favorite sites.",
      delay: 800
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="features"
      className="py-24 md:py-32 relative bg-black overflow-hidden"
      data-scroll-section
    >
      {/* <div className="absolute inset-0 bg-noise opacity-10"></div> */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="text-center mb-16 md:mb-24 reveal-text"
          data-scroll
          data-scroll-speed="0.1"
        >
          <h2 
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
            data-scroll
            data-scroll-speed="0.2"
            data-scroll-class="slide-up-animated"
          >
            Security First, No Compromises
          </h2>
          <p 
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            data-scroll
            data-scroll-speed="0.15"
            data-scroll-class="slide-up-animated"
            data-scroll-delay="200"
          >
            AXIOM is built from the ground up with security and privacy as its core foundation, not as an afterthought.
          </p>
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          data-scroll
          data-scroll-speed="0.05"
        >
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
              index={index}
            />
          ))}
        </div>
      </div>

      <style>
        {`
          .feature-card {
            transform: translateY(60px);
            opacity: 0;
            visibility: hidden;
            transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
                        opacity 0.6s ease-out,
                        visibility 0s linear 0.8s;
          }

          .feature-card-animated {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
            transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
                        opacity 0.6s ease-out,
                        visibility 0s linear 0s;
          }

          .slide-up-animated {
            animation: slide-up 0.6s ease-out forwards;
          }

          @keyframes slide-up {
            0% {
              transform: translateY(30px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          /* Add a subtle background pattern */
          #features::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 30%, rgba(167, 139, 250, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
            pointer-events: none;
            z-index: 1;
          }
        `}
      </style>
    </section>
  );
};

export default Features;
