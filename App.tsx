
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import WhyUs from './components/WhyUs';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar scrolled={scrolled} />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="why-us">
          <WhyUs />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
