import React from 'react';
import { motion } from 'framer-motion';
import eve1 from '../assets/brand1.jpg';
import eve2 from '../assets/brand2.jpg';
import eve3 from '../assets/brand3.jpg';
import eve4 from '../assets/brand4.jpg';

const EventsMobile = () => {
  const events = [
    { id: 1, image: eve1 },
    { id: 2, image: eve2 },
    { id: 3, image: eve3 },
    { id: 4, image: eve4 },
    { id: 5, image: eve1 },
  ];

  return (
    <section className="py-8">
      <h2 className="text-4xl font-bold text-white text-center mb-6">
        EVENT GALLERY
      </h2>
      <div className="px-4 space-y-4">
        {events.map((event) => (
          <motion.div
            key={event.id}
            className="w-full h-[200px] bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <img src={event.image} alt={`Event ${event.id}`} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EventsMobile;
