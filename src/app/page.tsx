'use client'
import React from 'react';
import useGetRole from '@/../hooks/useGetRole';
import Loader from '@/components/Loader';
import AnimatedCarCard from '@/components/AnimatedCarCourse';
import { FloatingNav } from '@/components/ui/floating-navbar';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { navItems } from  '@/constants/navcontent'
import Footer from '@/components/Footer';
import { useCars } from '../../providers/CarsProvider';

const Page = () => {
  const { role, error } = useGetRole();
  const { cars } = useCars();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!role) {
    return <div><Loader/></div>;
  }

  return ( 
    <MaxWidthWrapper>
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <FloatingNav navItems={navItems} />

      <h1 className="text-4xl font-bold mb-8 pt-24 text-center">Our Cars</h1>
      {role==='admin' && (
  <div className="text-center mb-4 p-2 bg-gray-700 rounded-md">
  <p className="text-sm text-gray-300">
    Please navigate to the dashboard to perform CRUD operations.
  </p>
</div>
      )}
    

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cars.map((car, index) => (
          <AnimatedCarCard key={index} car={car} index={index} />
        ))}
      </div>

      <Footer />
      
    </div>
    </MaxWidthWrapper>
  );
};

export default Page;

