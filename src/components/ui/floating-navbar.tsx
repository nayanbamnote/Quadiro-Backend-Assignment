"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import useGetRole from "../../../hooks/useGetRole";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [initialRender, setInitialRender] = useState(true);

  const {role} = useGetRole()

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialRender(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (initialRender) return;

    const previous = scrollY.getPrevious() || 0;
    const direction = current - previous;

    if (current < 50) {
      setVisible(true);
    } else {
      if (direction < 0) {
        setVisible(true);
      } else if (direction > 0) {
        setVisible(false);
      }
    }
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="fixed size-10 top-8 left-4 lg:top-7 lg:left-5 z-[999999]"
      >
        <UserButton appearance={{
          elements:{
            userButtonAvatarBox: 'size-full'
          }
        }}/>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: 0,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex max-w-fit fixed top-5 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pl-8 py-2 items-center justify-center space-x-4",
            className, role=== 'admin' ? 'pr-2': 'px-2'
          )}
        >
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ))}
          { role === 'admin' &&
            <button className="border text-sm font-medium relative border-white/[0.2] text-white px-4 py-2 rounded-full">
              <Link href={'/dashboard'}>Dashboard</Link>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
            </button>
          }
          
        </motion.div>
      </AnimatePresence>
    </>
  );
};