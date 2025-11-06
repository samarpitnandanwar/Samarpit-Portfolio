"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const DEFAULT_BTN_CLS = `
  fixed 
  bottom-4 
  right-4 
  sm:bottom-6 
  sm:right-6 
  md:bottom-8 
  md:right-8 
  lg:bottom-10 
  lg:right-10 
  xl:bottom-12 
  xl:right-12 
  z-50 
  flex 
  items-center 
  justify-center 
  rounded-full 
  bg-gradient-to-r 
  from-pink-500 
  to-violet-600 
  p-3 
  sm:p-4 
  md:p-5 
  lg:p-6 
  hover:text-xl 
  transition-all 
  duration-300 
  ease-out 
  overflow-hidden /* Ensure no content spills out */
  shadow-lg /* Optional: add a shadow for better visibility */  
`;


const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setBtnCls(DEFAULT_BTN_CLS.replace(" hidden", ""));
      } else {
        setBtnCls(DEFAULT_BTN_CLS + " hidden");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, []);

  const onClickBtn = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button className={btnCls} onClick={onClickBtn}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
