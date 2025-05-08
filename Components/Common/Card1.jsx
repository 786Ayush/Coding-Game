'use client';

import { scale } from "motion";
import * as motion from "motion/react-client";

export default function Card1({ title, description, imageUrl }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100,x:0 }}
      // animate={{ opacity: 1, y: 0,x:0 }}
      viewport={{ once: false, amount: 0.2 }}
      whileInView={{ opacity: 1, y: 0,x:0, transition: { duration: 1 } }}
      whileHover={{
        scale: 1.03,
        boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.15)',
        rotate: [0, 3, -3, 0, 2, 0],
        transition: { duration: 1.5 },
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer w-[200px] h-[400px] mx-auto bg-cover bg-center relative"
      style={{
        backgroundImage: `url("${imageUrl}")`,
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      {/* content */}
      <div className="relative z-10 p-5 h-full flex flex-col ">
        <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
        <p className="text-white text-base">{description}</p>
      </div>
    </motion.div>
  );
}
