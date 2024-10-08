import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: 'UI/UX DESIGN', description: 'CREATING INTUITIVE AND ENGAGING USER INTERFACES TO ENHANCE USER EXPERIENCE.' },
  { title: 'GRAPHIC DESIGN', description: 'DESIGNING LOGOS, BRANDING MATERIALS, AND PROMOTIONAL GRAPHICS FOR BUSINESSES.' },
  { title: 'WEB DESIGN', description: 'CRAFTING VISUALLY APPEALING AND USER-FRIENDLY WEBSITES TAILORED TO CLIENTS\' NEEDS' },
  { title: 'PROTOTYPING', description: 'BUILDING INTERACTIVE PROTOTYPES TO VISUALIZE AND TEST BEFORE DEVELOPMENT.' },
  { title: 'ILLUSTRATION', description: 'CREATING CUSTOM ILLUSTRATIONS AND ARTWORK TO COMPLEMENT DIGITAL DESIGNS.' },
  { title: 'BRAND IDENTITY', description: 'CRAFTING BRAND IDENTITIES WITH LOGOS, COLOR SCHEMES, AND TYPOGRAPHY.' },
];

const Advantages = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgb(255,255,255)",
              transition: { duration: 0.2 }
            }}
          >
            <motion.h2 
              className="text-white text-2xl font-bold mb-4"
              whileHover={{ scale: 1.1, originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {service.title}
            </motion.h2>
            <motion.p 
              className="text-gray-400 text-sm"
              whileHover={{ color: "#ffffff" }}
            >
              {service.description}
            </motion.p>
          </motion.div>
        ))}
        <motion.div
          className="absolute inset-0 m-auto w-40 h-40 bg-white rounded-full flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="text-black text-xl font-bold">SERVICES</div>
          <motion.div
            className="absolute inset-0 border-2 border-black rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-black">
              WHAT I DO
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Advantages;
