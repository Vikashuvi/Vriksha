import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import eve1 from '../assets/brand1.jpg';
import eve2 from '../assets/brand2.jpg';
import eve3 from '../assets/brand3.jpg';
import eve4 from '../assets/brand4.jpg';

const Events = () => {
  const events = [
    { id: 1, image: eve1 },
    { id: 2, image: eve2 },
    { id: 3, image: eve3 },
    { id: 4, image: eve4 },
    { id: 5, image: eve1 },
    
  ];

  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (carouselRef.current && containerRef.current) {
      const totalWidth = carouselRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;
      setCarouselWidth(totalWidth);
    }
  }, []);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [`${window.innerWidth}px`, `-${carouselWidth - window.innerWidth}px`]
  );

  return (
    <section className="h-[1200vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <h2 className="text-7xl font-bold text-white absolute top-1/2.5 left-8 z-0 whitespace-nowrap">
          EVENT GALLERY
        </h2>
        <div ref={containerRef} className="relative w-full h-[300px] overflow-hidden">
          <motion.div
            ref={carouselRef}
            className="absolute top-0 left-0 flex gap-6 z-10"
            style={{ x }}
          >
            {events.map((event) => (
              <motion.div
                key={event.id}
                className="flex-shrink-0 w-[300px] h-[300px] bg-white rounded-lg shadow-md overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={event.image} alt={`Event ${event.id}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Events;