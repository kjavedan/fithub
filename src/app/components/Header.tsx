"use client";
import "./styles.css";
import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft2, Moon, Sun1 } from "iconsax-react";
import { usePathname, useRouter } from "next/navigation";

function Header() {
  //NAVIGATION
  const pathname = usePathname();
  const router = useRouter();

  //STATE
  const [isDark, setIsDark] = useState(false);
  const prevScrollPosRef = useRef(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleDarkMode = () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  // Scroll event handler
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    // Determine if the user is scrolling up or down
    const scrollingUp = currentScrollPos > prevScrollPosRef.current;
    prevScrollPosRef.current = currentScrollPos;

    // Show/hide the header based on scroll direction (updated logic)
    setIsVisible(!scrollingUp || currentScrollPos < 100);
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      localStorage.theme !== "light"
    ) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    }
  }, []);

  return (
    <nav
      className={`z-50 py-4 sticky top-0 bg-inherit ${
        isVisible ? "" : "header-hidden"
      }`}
    >
      <div
        style={{ direction: "ltr" }}
        className="flex flex-wrap px-6  items-center justify-between "
      >
        <div className="  cursor-pointer">
          {pathname !== "/" ? (
            <ArrowLeft2 onClick={() => router.push("/")} />
          ) : (
            <h1 className="mt-0 text-xl" onClick={() => router.push("/")}>
              JOJOFIT
            </h1>
          )}
        </div>

        <div className="ml-2 ">
          <div
            className=" h-10 w-10 rounded bg-neutral-200 dark:bg-neutral-700 cursor-pointer flex items-center justify-center "
            onClick={handleDarkMode}
          >
            {!isDark ? <Sun1 /> : <Moon />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
