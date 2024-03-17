import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { motion } from "framer-motion";
import "../App.css";

function Page1() {
  return (
    <section>
      <div
        data-scroll
        // data-scroll-speed="10"/
        className=" w-screen h-[90vh]  flex items-center justify-center fixed "
      >
        <BackgroundBeams />
        {/* <BackgroundGradientAnimation className="w-screen h-screen absolute overflow-hidden " /> */}

        <div
          className="absolute flex justify-center left-[14vw] content-center flex-wrap w-screen h-screen  sm:text-[20vw] lg:text-[6vw] md:text-[20vw] outfituniquifier overflow-hidden text-zinc-300"
          id="mian"
        >
          <div
            className=" w-[80vw] lg:h-[15vh] sm:h-[12vh] md:h-[12vh]  overflow-hidden "
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
          <div className="w-[85vw] lg:h-[15vh] sm:-[10vh] md:h-[10vh] lg:pl-32 md:pl-20 sm:pl-20" id="part2">
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
