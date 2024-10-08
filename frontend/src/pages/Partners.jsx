import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Genoa' },
  { name: 'Stockholm' },
  { name: 'Prague' },
  { name: 'Athen' },
  { name: 'Ottawa' },
  // Add more partners as needed
];

const Partners = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white text-center">Partners</h2>

        <div className="overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [0, -50 * partners.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: "linear",
              },
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="inline-block mx-8">
                <span className="text-xl font-bold">{partner.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
