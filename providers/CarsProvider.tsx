'use client'
import React, { createContext, useState, useContext, useEffect } from 'react';
import { CARS } from '@/constants/cars';
import { CarsType } from '@/constants/cars';


interface CarsContextType {
  cars: CarsType[];
  addCar: (newCar: CarsType) => void;
  editCar: (id: number, editedCar: CarsType) => void;
  deleteCar: (id: number) => void;
}

const CarsContext = createContext<CarsContextType | undefined>(undefined);

export const CarsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cars, setCars] = useState<CarsType[]>([]);

  useEffect(() => {
    setCars(CARS);
  }, []);

  const addCar = (newCar: CarsType) => {
    setCars(prevCars => [...prevCars, newCar]);
};

const editCar = (id: number, editedCar: CarsType) => {
    setCars(prevCars => {
        const newCars = [...prevCars];
        newCars[id] = { ...newCars[id], ...editedCar };
        return newCars;
    });
};

  const deleteCar = (id: number) => {
    setCars((prevCars)=>{
        return prevCars.filter((_, i)=> i !== id)
    })
  };

  return (
    <CarsContext.Provider value={{ cars, addCar, editCar, deleteCar }}>
      {children}
    </CarsContext.Provider>
  );
};

export const useCars = () => {
  const context = useContext(CarsContext);
  if (context === undefined) {
    throw new Error('useCars must be used within a CarsProvider');
  }
  return context;
};