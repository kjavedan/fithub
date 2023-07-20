"use client";
import React, { useEffect, useRef, useState } from "react";
import ActivityCard from "./ActivityCard";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

export default function Activity() {
  // STATE
  const [showLeftButton, setShowLeftButton] = useState(true);
  const [showRightButton, setShowRightButton] = useState(false); // Assuming the right button is initially shown

  // REF
  const ref = useRef(null);

  // FUNC
  const handleScroll = () => {
    const element: any = ref.current;
    // Check if the left button should be shown
    setShowLeftButton(
      element.scrollLeft - element.clientWidth > -element.scrollWidth
    );

    // Check if the right button should be shown
    setShowRightButton(element.scrollLeft !== 0);
  };

  useEffect(() => {
    // Attach scroll event listener when the component mounts
    const element: any = ref.current;
    element.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollClick = (direction: string) => {
    const element: any = ref.current;
    if (direction === "left") {
      element.scrollLeft -= 600;
    } else {
      element.scrollLeft += 600;
    }
  };

  return (
    <div className="mt-6  relative w-screen  h-fit md:w-full">
      <h2 className="text-l md:text-xl font-bold">فعالیت</h2>
      {showLeftButton && (
        <div
          onClick={() => handleScrollClick("left")}
          className="hidden md:flex absolute z-50 cursor-pointer top-1/2 left-0 h-12 w-12 rounded-full  items-center justify-center -translate-x-1/2 -translate-y-1/3 bg-neutral-300 dark:bg-neutral-800"
        >
          <ArrowLeft2 />
        </div>
      )}

      {showRightButton && (
        <div
          onClick={() => handleScrollClick("right")}
          className="hidden md:flex absolute z-50 cursor-pointer top-1/2 right-0 h-12 w-12 rounded-full  items-center justify-center translate-x-1/2 -translate-y-1/3 bg-neutral-300 dark:bg-neutral-800"
        >
          <ArrowRight2 />
        </div>
      )}
      <div
        ref={ref}
        className="relative pr-6 -mr-6 md:mr-0 md:pr-0 scroll-smooth  pb-4  flex overflow-x-scroll  h-fit mt-2  pl-16"
      >
        <ActivityCard />
        <ActivityCard />
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
