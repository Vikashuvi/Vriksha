import React from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="container mx-auto px-6 py-24 max-w-5xl text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h1 
        className="text-5xl font-bold mb-8"
        variants={itemVariants}
      >
        Vision
      </motion.h1>
      <motion.p 
        className="text-xl leading-relaxed"
        variants={itemVariants}
      >
        Our vision is to create a world where technology empowers and connects people, 
        fostering innovation and improving lives across the globe. We strive to be at 
        the forefront of digital transformation, delivering cutting-edge solutions that 
        address the evolving needs of our society and drive positive change.
      </motion.p>
    </motion.div>
  );
};

export default Vision;
