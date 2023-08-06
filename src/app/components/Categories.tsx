"use client";
import { useState } from "react";
import { ArrowDown2, ArrowLeft2 } from "iconsax-react";
import { itemsData } from "@/data/category";
import { useRouter } from "next/navigation";
import handleLinkClick from "@/lib/handleLinkClick";

const Categories = () => {
  // NAVIGATION
  const router = useRouter();

  // STATES
  const [openItems, setOpenItems] = useState([false]);

  // FUNCS
  const handleAccordionToggle = (index: number) => {
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
          onClick={() => handleAccordionToggle(index)}
          className="flex items-center  p-2 w-full hover:bg-neutral-300 dark:hover:bg-neutral-800"
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
          style={{
            height: openItems[index] ? item.children.length * 40 + "px" : "0",
          }}
          className={
            "border-t border-gray-200 dark:border-neutral-700 transition-height ease-in-out duration-300 overflow-hidden"
          }
        >
          {item.children.map((item, index) => (
            <button
              key={index}
              onClick={() => handleLinkClick(item.path, item.id, router)}
              className="flex w-full border-b border-gray-200  dark:border-neutral-700  hover:bg-neutral-300 dark:hover:bg-neutral-800   items-center justify-normal  px-2 "
            >
              <div className="flex items-center justify-center w-10 h-10">
                <span className="text-2xl">{item.icon}</span>
              </div>
              <div className="flex">
                <span className="text-sm">{item.path}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    ) : (
      <button
        key={item.title}
        onClick={() => handleLinkClick(item.title, item.id, router)}
        className="flex items-center p-2 border-t  border-gray-200 dark:border-neutral-700"
      >
        <div className="flex items-center justify-center w-10 h-10 ">
          {/* Use Tailwind CSS text utilities for font-size */}
          <span className="text-2xl">{item.icon}</span>
        </div>
        <div className="flex-grow">
          {/* Use Tailwind CSS text utilities for font-size */}
          <span className="text-sm">{item.title}</span>
        </div>
      </button>
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
