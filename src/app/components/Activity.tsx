"use client";
import React, { useEffect, useRef, useState } from "react";
import ActivityCard from "./ActivityCard";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

export default function Activity() {
  //STATE
  const [scrollPos, setScrollPos] = useState(0);
  //REF
  const ref = useRef(null);

  //FUNCS
  const handleScroll = (direction: string) => {
    const element: any = ref.current;
    if (direction === "left") {
      setScrollPos((element.scrollLeft -= 600));
    } else {
      setScrollPos((element.scrollLeft += 600));
    }
  };

  return (
    <div className="mt-6  relative w-screen  h-fit md:w-full">
      <h2 className="text-l md:text-xl font-bold">فعالیت</h2>
      <div
        onClick={() => handleScroll("left")}
        className="hidden md:flex absolute z-50 cursor-pointer top-1/2 left-0 h-12 w-12 rounded-full  items-center justify-center -translate-x-1/2 -translate-y-1/3 bg-neutral-300 dark:bg-neutral-800"
      >
        <ArrowLeft2 />
      </div>
      {scrollPos < 0 && (
        <div
          onClick={() => handleScroll("right")}
          className="hidden md:flex absolute z-50 cursor-pointer top-1/2 right-0 h-12 w-12 rounded-full  items-center justify-center translate-x-1/2 -translate-y-1/3 bg-neutral-300 dark:bg-neutral-800"
        >
          <ArrowRight2 />
        </div>
      )}
      <div
        ref={ref}
        className="relative scroll-smooth  pb-4  flex overflow-x-scroll  h-fit mt-2  pl-16"
      >
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
    </div>
  );
}
