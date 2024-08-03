"use client";
import React, { useState } from "react";
import useGetRole from "../../../hooks/useGetRole";
import Loader from "@/components/Loader";
import DashboardTable from "@/components/DashboardTable";
import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TotalCarsCard from "@/components/TotalCarsCard";
import AddCarCard from "@/components/AddCarCard";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
  

const page = () => {
  const { role } = useGetRole();


  if (!role) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (role !== "admin") {
    return (
      <MaxWidthWrapper className="w-full h-screen flex items-center justify-center">
      <div>
              <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <h2 className="text-xl font-bold mb-2">Admin Access</h2>
        <p className="text-sm">
          This section is visible only to administrators. Please proceed with
          caution.
        </p>
      </div>
      </div>
      </MaxWidthWrapper>

    );
  }

  return (
    <MaxWidthWrapper className="min-h-screen">
         <div className="fixed cursor-pointer size-10 top-8 left-4 text-white lg:top-7 lg:left-5 z-[999999]">
            <Link className="cursor-pointer" href='/'>
            <Label className="cursor-pointer">Home</Label>
            </Link>
      </div>
      <div className="w-full min-h-screen">
        <h1 className="text-4xl text-center py-10 text-white font-semibold leading-none tracking-tight">
          Dashboard
        </h1>
        <MaxWidthWrapper className="max-w-4xl flex flex-col gap-14">
          <div className="flex justify-between">
          <TotalCarsCard />
          <AddCarCard />
          </div>
          <DashboardTable />
        </MaxWidthWrapper>
        <Footer />
      </div>


      

    </MaxWidthWrapper>
  );
};

export default page;
