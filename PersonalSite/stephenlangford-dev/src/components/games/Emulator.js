"use client";
import React from "react";

const Emulator = () => {
  return (
    <div className="w-full h-full">
      <iframe
        src="/games/MathBlaster/emulator.html"
        className="w-full h-full border-none"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Emulator;

