import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const HeroSection = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF1Z21lbnRlZCUyMHJlYWxpdHl8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF1Z21lbnRlZCUyMHJlYWxpdHl8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dnIlMjBoZWFkc2V0fGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXVnbWVudGVkJTIwcmVhbGl0eXxlbnwwfHwwfHx8MA%3D%3D',
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const moveImages = async () => {
      await controls.start(i => ({
        y: scrollY > 0 ? (i < 2 ? -300 : 300) : 0,
        transition: { type: 'spring', stiffness: 300, damping: 30 }
      }));
    };

    moveImages();
  }, [scrollY, controls]);

  return (
    <div ref={containerRef} className="relative h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-6xl font-bold text-center z-0">
          TRANSFORM<br />YOUR BUSINESS
          <br />
          <span className="text-4xl font-light text-pink-500">With AI</span>
        </h1>
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="grid grid-cols-2 gap-4 max-w-[1050px] w-full z-10">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-lg ${
                index < 2 ? 'col-span-1 row-span-2' : 'col-span-1 row-span-1'
              }`}
              custom={index}
              animate={controls}
            >
              <img 
                src={src} 
                alt={`VR/AR Image ${index + 1}`} 
                className="w-full h-full object-cover"
                style={{ 
                  width: index < 2 ? '500px' : '250px', 
                  height: index < 2 ? '500px' : '250px' 
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <button className="bg-pink-500 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-pink-600 transition-colors">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
