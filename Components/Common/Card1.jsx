'use client';

import React, { useState } from 'react';
import * as motion from 'motion/react-client';

export default function Card1({ title, description, imageUrl }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -15;
    const rotateY = ((x / rect.width) - 0.5) * 15;

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
      <motion.div
        style={{
          rotateX: rotate.x,
          rotateY: rotate.y,
          transformStyle: 'preserve-3d',
           ...{
            backgroundImage: `url("${imageUrl}")`,
          },
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
        whileHover={{ scale: 1.15,duration: 3 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="bg-white rounded-2xl overflow-hidden shadow-md transition-all cursor-pointer w-[200px] h-[400px] mx-auto bg-cover bg-center relative"
       
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0 rounded-2xl" />

        {/* content */}
        <div className="relative z-10 p-5 h-full flex flex-col">
          <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
          <p className="text-white text-base">{description}</p>
        </div>
      </motion.div>
    </div>
  );
}
