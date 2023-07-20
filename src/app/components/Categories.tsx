"use client";
import { useState, useContext } from "react";
import { ArrowDown2, ArrowLeft2 } from "iconsax-react";
import { itemsData } from "@/data/category";
import Link from "next/link";

const Categories = () => {
  // STATES
  const [openItems, setOpenItems] = useState([false]);

  // FUNCS
  const handleClick = (index: number) => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  // JSX
  const categorisItems = itemsData.map((item, index) =>
    item.children ? (
      <div
        key={item.title}
        className=" border-t border-gray-200 dark:border-neutral-700 w-full"
      >
        <button
          onClick={() => handleClick(index)}
          className="flex items-center  p-2 w-full"
        >
          <div className="flex  items-center justify-center w-10 h-10">
            <span className="text-2xl">{item.icon}</span>
          </div>
          <div className="flex">
            <span className="text-sm font-bold">{item.title}</span>
          </div>
          <div className="flex items-center justify-center w-10 h-10">
            {openItems[index] ? (
              <ArrowDown2 variant="Broken" />
            ) : (
              <ArrowLeft2 variant="Broken" />
            )}
          </div>
        </button>
        <div
          className={` ${
            openItems[index] ? "h-auto" : "h-0 "
          } border-t border-gray-200 dark:border-neutral-700 transition-height ease-in-out duration-300 overflow-hidden`}
        >
          {item.children.map((item, index) => (
            <Link href={item.path} key={item.title}>
              <button
                key={index}
                className="flex w-full border-b border-gray-200 dark:border-neutral-700  items-center justify-normal  px-2 "
              >
                <div className="flex items-center justify-center w-10 h-10">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div className="flex">
                  <span className="text-sm">{item.title}</span>
                </div>
              </button>
            </Link>
          ))}
        </div>
      </div>
    ) : (
      <Link href={item.title}>
        <button className="flex items-center p-2 border-t  border-gray-200 dark:border-neutral-700">
          <div className="flex items-center justify-center w-10 h-10 ">
            {/* Use Tailwind CSS text utilities for font-size */}
            <span className="text-2xl">{item.icon}</span>
          </div>
          <div className="flex-grow">
            {/* Use Tailwind CSS text utilities for font-size */}
            <span className="text-sm">{item.title}</span>
          </div>
        </button>
      </Link>
    )
  );

  return (
    <div className="mt-6  relative   h-fit ">
      <h2 className="text-l font-bold">دسته بندی ها</h2>
      <div className="border-b border-gray-200 dark:border-neutral-700">
        {categorisItems}
      </div>
    </div>
  );
};

export default Categories;
