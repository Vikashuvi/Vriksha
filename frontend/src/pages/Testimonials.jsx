import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonial = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <motion.img
            src="/path/to/left-image.jpg"
            alt="Left testimonial"
            className="w-full h-64 object-cover"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src="/path/to/center-image.jpg"
            alt="Sophia Chen"
            className="w-full h-64 object-cover"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.img
            src="/path/to/right-image.jpg"
            alt="Right testimonial"
            className="w-full h-64 object-cover"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-6">SOPHIA CHEN</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto leading-relaxed">
            "THANKS TO THEIR AI-DRIVEN INSIGHTS, WE'VE BEEN ABLE TO MAKE SMARTER DECISIONS FASTER.
            THEIR DEDICATION TO OUR SUCCESS WAS EVIDENT FROM DAY ONE."
          </p>
          <p className="text-lg">
            HEAD OF OPERATIONS, <span className="font-bold">INNOVATEX</span>
          </p>
        </motion.div>
        <div className="flex justify-center space-x-4">
          <motion.button
            className="bg-gray-700 p-4 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft size={24} />
          </motion.button>
          <motion.button
            className="bg-gray-700 p-4 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight size={24} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;