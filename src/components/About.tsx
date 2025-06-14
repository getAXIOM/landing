import React, { useRef } from 'react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="about" 
      className="py-24 md:py-32 bg-gradient-to-b from-black to-gray-900 relative"
      data-scroll-section
    >
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={sectionRef}
          className="flex flex-col items-center gap-12 md:gap-16"
        >
          <div 
            className="w-full lg:w-2/3"
            data-scroll
            data-scroll-speed="0.1"
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-center"
              data-scroll
              data-scroll-speed="0.2"
            >
              Not Just Another Search Engine
            </h2>
            
            <p 
              className="text-gray-300 mb-12 text-lg text-center"
              data-scroll
              data-scroll-speed="0.15"
            >
              AXIOM represents a fundamental shift in how we interact with information. Born from the belief that search should be intelligent, respectful, and designed for humans first.
            </p>
            
            <div className="space-y-8">
              {[
                { number: "01", title: "We Take the Blame", description: "AXIOM takes the blame for your searches online, making you as anonymous as you can get. It is nearly impossible to trace queries back to you." },
                { number: "02", title: "Zero Data Collection", description: "Unlike other search engines, we don't need your data to provide excellent results." },
                { number: "03", title: "Built for 2028", description: "While others are catching up to yesterday, we're building for tomorrow's information landscape." }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 group transform hover:translate-x-2 transition-transform duration-300"
                  data-scroll
                  data-scroll-speed={0.05 + (index * 0.05)}
                >
                  <div className="text-xl font-mono text-gray-500 pt-1 group-hover:text-white transition-colors duration-300">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;