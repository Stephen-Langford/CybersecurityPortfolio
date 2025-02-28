"use client";
import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

const LinkButton = ({
  buttonImageSrc = "/icons/windows-4.png",
  buttonText = "",
  buttonLink = "",
}) => {
  const [borderColorTL, setBorderColorTL] = useState("gray-300");
  const [borderColorRB, setBorderColorRB] = useState("gray-700");

  const handleMouseDown = () => {
    setBorderColorRB("gray-300");
    setBorderColorTL("gray-700");
  };

  const handleMouseUp = () => {
    setBorderColorRB("gray-700");
    setBorderColorTL("gray-300");
  };

  return (
    <Link href={buttonLink}>
      <button
        className={clsx(
          " m-0.5 bg-menu-gray border-2 text-black font-normal flex flex-row items-center transition duration-75 active:scale-95 active:translate-y-px",
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
          src={buttonImageSrc}
          alt="Menu Icon"
          width={16}
          height={16}
          className="flex-shrink-0 object-contain w-[16px] h-[16px]"
        />
        <span className="font-bold p-0.5 ">{buttonText}</span>
      </button>
    </Link>
  );
};

export default LinkButton;
