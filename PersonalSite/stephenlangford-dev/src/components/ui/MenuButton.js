"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

const MenuButton = ({ displayText }) => {
    const [borderColorTL, setBorderColorTL] = useState('gray-300');
    const [borderColorRB, setBorderColorRB] = useState('gray-700');

  const handleMouseDown = () => {
    setBorderColorRB("gray-300");
    setBorderColorTL("gray-700");
  };
  const handleMouseUp = () => {
    setBorderColorRB("gray-700");
    setBorderColorTL("gray-300");
  };

  return (
    <button
      className={clsx(
        "float-left w-16 m-0 px-1.5 py-0 bg-menu-gray border-2 text-black font-normal flex flex-row items-center transition duration-75 active:scale-95 active:translate-y-px",

        {
          "border-t-gray-300 border-l-gray-300": borderColorTL === "gray-300",
          "border-t-gray-700 border-l-gray-700": borderColorTL === "gray-700",
          "border-r-gray-700 border-b-gray-700": borderColorRB === "gray-700",
          "border-r-gray-300 border-b-gray-300": borderColorRB === "gray-300",
        },
      )}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <Image
        src="/icons/windows-4.png"
        alt="Windows Icon"
        width={16}
        height={16}
        className="flex-shrink-0 object-contain w-[16px] h-[16px]"
      />
      <span className="font-bold pl pr-0.5">{displayText}</span>
    </button>
  );
};

export default MenuButton;
