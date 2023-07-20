import React from "react";

export default function ActivityCard() {
  return (
    // card
    <div className="relative h-24 min-w-100 md:min-w-200  shadow rounded ml-3 mr-1">
      {/* top */}
      <div className="h-1/2  w-full  bg-neutral-200 dark:bg-neutral-700 rounded-t"></div>
      {/* bottom */}
      <div className="h-1/2 w-full dark:bg-neutral-600  rounded-b flex items-center justify-center px-2">
        <p className="text-ellipsis   overflow-hidden whitespace-nowrap">
          تغذیه
        </p>
      </div>
      {/* icon */}
      <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl ">
        🏋️
      </div>
    </div>
  );
}
