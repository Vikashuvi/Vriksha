import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
// Import all partner logos
import niit from '../assets/partners/niit.png';
import sof from '../assets/partners/sof.jpg';
import words from '../assets/partners/words.png';
import voice from '../assets/partners/voice.png';
import cctv from '../assets/partners/cctv-center.png';
import lead from '../assets/partners/lead.png'

const partners = [
  { name: 'niit', logo: niit },
  { name: 'Science Olympiad Foundation', logo: sof },
  { name: 'Words worth', logo: words },
  { name: 'Voice Snap', logo: voice },
  { name: 'CCTV Center', logo: cctv },
  { name: 'Lead', logo: lead },
];

const Partners = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      const animateLogo = () => {
        if (scrollContainer.scrollLeft >= scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      };
      const animationId = setInterval(animateLogo, 20);
      return () => clearInterval(animationId);
    }
  }, []);

  return (
    <section className="bg-black text-white py-12 flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-white text-center">Partners</h2>
        
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10"></div>
          <div ref={scrollRef} className="flex overflow-x-hidden">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0 mx-4 sm:mx-6">
                <div className="bg-white p-4 rounded-lg shadow-md w-48 h-48 flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`} 
                    className="max-h-40 max-w-40 object-contain" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
