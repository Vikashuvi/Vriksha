import React from 'react';
import img1 from '../assets/brand1.jpg';
import img2 from '../assets/brand2.jpg';
import img3 from '../assets/brand3.jpg';
import img4 from '../assets/brand4.jpg';

const accordionData = [
  {
    title: 'Academics',
    image: img1
  },
  {
    title: 'Co-Curricular & Extra Curricular',
    image: img2
  },
  {
    title: 'Community',
    image: img3
  },
  {
    title: 'Infrastructure & Amenities',
    image: img4
  }
];

const AccordionItem = ({ title, image }) => {
  return (
    
    <div className="group relative h-20 bg-green-300 hover:h-36 transition-all duration-500 ease-in-out overflow-hidden">
      <div className="absolute inset-0 z-10">
        <div className="p-6 text-4xl font-bold group-hover:text-white transition-colors duration-500">
          {title}
        </div>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Categories</h2>
      <div className="space-y-1">
        {accordionData.map((item, index) => (
          <AccordionItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
