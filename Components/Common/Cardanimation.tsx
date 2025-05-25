"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ThreeDImageCard() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -20; // flip vertically
    const rotateY = ((x / rect.width) - 0.5) * 20;

    setRotate({ x: rotateX, y: rotateY });
  };

  const resetRotate = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className="perspective-[1000px] w-fit mx-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotate}
    >
      <motion.img
        src="/images/Homepage2.png"
        alt="Hero"
        width={500}
        height={500}
        style={{
          transformStyle: "preserve-3d",
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        className="h-auto rounded-2xl shadow-2xl object-cover flex-1 max-w-md transition-transform duration-300 ease-out"
        initial={{ opacity: 0,scale: 0 }}
        animate={{ opacity: 1,scale: 1}}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </div>
  );
}
