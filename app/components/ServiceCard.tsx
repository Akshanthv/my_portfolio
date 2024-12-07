'use client';
import React, { useState } from 'react';

interface ServiceCardProps {
  title: string;
  imageSrc: string;
  description: string;
  features: string[];
  bgColor?: string; 
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, imageSrc, description, features, bgColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center mt-3">
  
      <div
        className="w-[330px] h-[540px] border rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform relative"
        style={{
          background: bgColor ? bgColor : `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onClick={() => setIsOpen(true)}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
      </div>

      
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white w-[500px] h-[600px] p-6 rounded-lg shadow-xl relative overflow-y-auto"
            style={{
              backgroundImage: `url(${imageSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              x
            </button>
            <div className="bg-white bg-opacity-80 p-4 rounded">
              <h2 className="text-xl font-bold mb-4">{title}</h2>
              <p className="text-gray-600 mb-4">{description}</p>

            
              <ul className="list-disc pl-5 space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
