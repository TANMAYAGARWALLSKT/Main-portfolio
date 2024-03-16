import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { motion } from "framer-motion";
import "../App.css";

function Page1() {
  return (
    <section  >
      <div
          data-scroll
          // data-scroll-speed="10"/
        className=" bg-black w-screen h-[90vh]  flex items-center justify-center fixed "
      >
        <BackgroundBeams />
        {/* <BackgroundGradientAnimation className="w-screen h-screen absolute overflow-hidden " /> */}

        <div
          className="absolute flex justify-center items-center  sm:text-8xl text-2xl outfituniquifier text-zinc-300"
          id="mian"
        >
          <div
            className=" sm:w-[60rem] w-[40vw] sm:h-[7rem] h-[8vh] overflow-hidden"
            id="part1"
          >
            <motion.h1  
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              transition={{
                duration: 1,
                delay: 0.8,
                ease: "easeInOut",
              }}
            >
              I'm Tanmay Agarwal
            </motion.h1>
          </div>
          <div className="sm:w-[60rem] w-[40vw] sm:h-[7rem] h-[8vh] sm:pl-32" id="part2">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              transition={{
                duration: 1,
                delay: 0.8,
                ease: "easeInOut",
              }}
            >
              Front-End Developer .
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page1;
