import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Genoa', logo: '/path/to/genoa-logo.png' },
  { name: 'Stockholm', logo: '/path/to/stockholm-logo.png' },
  { name: 'Prague', logo: '/path/to/prague-logo.png' },
  { name: 'Athen', logo: '/path/to/athen-logo.png' },
  { name: 'Ottawa', logo: '/path/to/ottawa-logo.png' },
  // Add more partners as needed
];

const Partners = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl mb-8">Trusted by leading clients</h2>
        <motion.div
          className="flex overflow-hidden"
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="flex-shrink-0 mx-8">
              <img src={partner.logo} alt={partner.name} className="h-12" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
