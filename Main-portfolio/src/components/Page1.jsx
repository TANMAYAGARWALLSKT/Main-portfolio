import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { motion } from "framer-motion";

function Page1() {
  return (
    <div className="bg-black w-screen h-screen">
      <div className="bg-black w-screen h-screen overflow-hidden" id="overlay">
        <BackgroundBeams className="bg-transparent indent-3 " />
        <BackgroundGradientAnimation />
      </div>
      <div
        className="absolute top-[50%] left-[50%] flex flex-wrap translate-x-[-50%] overflow-hidden translate-y-[-50%] text-zinc-200 text-6xl font-mono font-bold opacity-40"
        id="mian"
      >
        <div className=" w-[40rem] h-[4rem] overflow-hidden" id="part1">
          <motion.h1
           
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,delay:0.4,
            }}
          >
            I'm Tanmay Agarwal
          </motion.h1>
        </div>
        <motion.div className="mb-10 w-auto pl-32" id="part2">
          <motion.h1
           
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1, delay:0.4,
            }}
          >
            Front-End Developer .
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Page1;
