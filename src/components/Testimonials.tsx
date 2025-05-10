import React, { useRef } from 'react';
import { useParallax } from '../hooks/useParallax';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  index: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, index }) => {
  return (
    <div 
      className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 testimonial-card"
      style={{ 
        animationDelay: `${index * 150}ms`,
        transform: `translateY(${index % 2 === 0 ? '0' : '2rem'})` 
      }}
    >
      <div className="mb-6 text-4xl text-white/20">"</div>
      <p className="text-lg mb-6 text-gray-300">{quote}</p>
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center text-white font-bold">
          {author[0]}
        </div>
        <div className="ml-4">
          <div className="font-medium">{author}</div>
          <div className="text-sm text-gray-500">{role}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useParallax(sectionRef, 0.03);
  
  const testimonials = [
    {
      quote: "AXIOM has fundamentally changed how I find information. It's like having a research assistant who knows exactly what I need.",
      author: "Dr. Sarah Chen",
      role: "AI Researcher"
    },
    {
      quote: "Finally, a search engine that values my privacy without compromising on quality results. AXIOM is what search should have always been.",
      author: "Michael Rodriguez",
      role: "Cybersecurity Analyst"
    },
    {
      quote: "The integrated account system is brilliant. One secure login for everything while keeping my data private. AXIOM is years ahead of the competition.",
      author: "Aisha Johnson",
      role: "Digital Privacy Advocate"
    },
    {
      quote: "As someone who works with information all day, AXIOM's intuitive understanding of context has saved me countless hours of refining searches.",
      author: "Thomas Weber",
      role: "Data Journalist"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 md:py-32 relative bg-gradient-to-t from-black to-gray-900"
    >
      <div className="absolute inset-0 bg-noise opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal-text">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            What Early Users Are Saying
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our beta testers have already experienced the AXIOM difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-white text-black rounded-full shadow-glow hover:shadow-glow-intense transition-all duration-500 font-medium">
            Join Our Beta Program
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;