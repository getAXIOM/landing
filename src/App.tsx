import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  return (
    <div className="bg-black text-white">
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App