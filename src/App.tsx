import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import Launch from './components/Launch';
import { useLocomotiveScroll } from './hooks/useLocomotiveScroll';
import './styles/animations.css';

function App() {
  const { updateScroll } = useLocomotiveScroll();

  useEffect(() => {
    // Update locomotive scroll on component mount
    updateScroll();
  }, [updateScroll]);

  return (
    <div data-scroll-container className="bg-black text-white">
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <Launch />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App