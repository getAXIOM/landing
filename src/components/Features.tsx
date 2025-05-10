import React, { useRef } from 'react';
import { useParallax } from '../hooks/useParallax';
import { Lock, Shield, Key, UserCheck, Cpu, Eye, Server, FileKey } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-gray-700 transition-all duration-500 feature-card transform hover:translate-y-[-4px]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-6 rounded-full bg-white/5 p-4 w-16 h-16 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useParallax(sectionRef, 0.05);
  
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
      className="py-24 md:py-32 relative bg-black"
    >
      <div className="absolute inset-0 bg-noise opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-24 reveal-text">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Security First, No Compromises
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            AXIOM is built from the ground up with security and privacy as its core foundation, not as an afterthought.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;