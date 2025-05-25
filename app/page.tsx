"use client";

import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import { Working } from "@/Components/Landing/Working";
import Footer from "@/Components/Common/Footer";
import { useRouter } from "next/navigation";
import ThreeDImageCard from "@/Components/Common/Cardanimation";

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState("");
  const phrase = "Race to Code. Win the Dev Battle!";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(phrase.slice(0, i + 1));
      i++;
      if (i === phrase.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen relative overflow-hidden ">
      <div className="w-full px-10 mx-auto flex flex-col md:flex-row justify-between items-center min-h-screen px-6 py-6  relative bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]">
        {/* Left Text Block */}
        <motion.div
          className=" text-center md:text-left w-3/5"
          initial={{ opacity: 0, y: -60, scale: 3 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-100 leading-tight">
            {text}
          </h1>
          <p className="text-base sm:text-lg mt-6 text-blue-100 max-w-md mx-auto md:mx-0">
            Compete with developers in real-time coding challenges. The fastest
            one wins.
          </p>
          <motion.button
            className="mt-8 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/challenge/sd")}
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Right Image Block */}
        {/* <motion.img
          src="/images/Homepage2.png"
          alt="Hero"
          width={500}
          height={500}
          className="h-auto rounded-2xl shadow-2xl object-cover flex-1 max-w-md"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{
            rotate: [0, 3, -3, 0, 2, 0],
            transition: { duration: 1.5 },
          }}
        /> */}
        <div className="w-2/5">
          <ThreeDImageCard />
        </div>

        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm animate-bounce">
          <div className="flex flex-col items-center">
            <span className="mb-1">Scroll to explore</span>
            <span className="text-xl">↓</span>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className=" flex flex-col items-center">
        <Working />
      </div>
      <Footer />
    </div>
  );
}
