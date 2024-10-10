import React from 'react';
import { motion } from 'framer-motion';

const ServiceItem = ({ title, description }) => (
  <div className="bg-gray-700 p-6 rounded-lg h-full flex flex-col justify-between">
    <h3 className="text-4xl font-extrabold mb-4 text-white tracking-tighter leading-none">{title}</h3>
    <p className="text-xs text-gray-300 uppercase tracking-wide">{description}</p>
  </div>
);

const ServiceSection = () => {
  const services = [
    { title: "UI/UX DESIGN", description: "CREATING INTUITIVE AND ENGAGING USER INTERFACES TO ENHANCE USER EXPERIENCE." },
    { title: "GRAPHIC DESIGN", description: "DESIGNING LOGOS, BRANDING MATERIALS, AND PROMOTIONAL GRAPHICS FOR BUSINESSES." },
    { title: "WEB DESIGN", description: "CRAFTING VISUALLY APPEALING AND USER-FRIENDLY WEBSITES TAILORED TO CLIENTS' NEEDS" },
    { title: "PROTOTYPING", description: "BUILDING INTERACTIVE PROTOTYPES TO VISUALIZE AND TEST BEFORE DEVELOPMENT." },
    { title: "ILLUSTRATION", description: "CREATING CUSTOM ILLUSTRATIONS AND ARTWORK TO COMPLEMENT DIGITAL DESIGNS." },
    { title: "BRAND IDENTITY", description: "CRAFTING BRAND IDENTITIES WITH LOGOS, COLOR SCHEMES, AND TYPOGRAPHY." },
  ];

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-64"
            >
              <ServiceItem {...service} />
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-lg uppercase">Services</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;