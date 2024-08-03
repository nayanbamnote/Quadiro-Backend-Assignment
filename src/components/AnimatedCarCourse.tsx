'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'

interface CarProps {
  name: string;
  description: string;
  image: string;
  manufacturing_year: string;
  price: string;
}

interface AnimatedCarCardProps {
  car: CarProps;
  index: number;
}

const AnimatedCarCard: React.FC<AnimatedCarCardProps> = ({ car, index }) => (
  <motion.div 
  className="bg-gray-800 p-6 rounded-lg shadow-lg"
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>
  <div className="w-full h-fit flex justify-center items-center mb-4 relative bg-white rounded-lg">
  <div className="relative w-full" style={{ aspectRatio: '2 / 1' }}>
    <Image 
      className='object-contain w-full h-full rounded-lg' 
      src={car.image} 
      alt='product-image' 
      layout='fill' 
    />
  </div>
</div>
  <h2 className="text-2xl font-bold text-white mb-2">{car.name}</h2>
  <p className="text-gray-300 text-base mb-4">{car.description}</p>
  <div className="border-t border-gray-600 pt-4">
    <div className="flex justify-between text-gray-300 text-sm mb-2">
      <span>Year:</span>
      <span className="text-white">{car.manufacturing_year}</span>
    </div>
    <div className="flex justify-between text-white text-lg font-semibold">
      <span>Price:</span>
      <span>{car.price}</span>
    </div>
  </div>
</motion.div>





);

export default AnimatedCarCard;
