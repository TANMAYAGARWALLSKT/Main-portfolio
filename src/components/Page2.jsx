import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import "../App.css";
import Cards from "./Cards";

function Page2() {
  return (
    <div
   
      data-scroll
      className="w-screen sm:h-[90vh] h-[80vh] p-1 bg-[#08111a] text-zinc-200 rounded-[3rem]  overflow-hidden relative sm:top-[90vh] top-[85vh] "
    >
      <div className="flex h-[32h] overflow-hidden" id="text">
        <motion.div
          className="flex flex-wrap lg:mt-10 sm:mt-2 md:mt-10 sm:h-[32vh] md:h-[32vh] lg-[32vh] w-screen lg:text-8xl text-5xl md:text-5xl font-extrabold gap-10 "
          id="div"
        >
          <Marquee className="overflow-hidden font-bold flex  tracking-wider font-mono opacity-20  ">
            <h1 className="outfituniquifier p-3 border border-e-2">MY WORK</h1>
            <h1 className="outfituniquifier p-3 border border-e-2">MY WORK</h1>
            <h1 className="outfituniquifier p-3 border border-e-2">MY WORK</h1>
            <h1 className="outfituniquifier p-3 border border-e-2">MY WORK</h1>
            <h1 className="outfituniquifier p-3 border border-e-2">MY WORK</h1>
            <h1 className="outfituniquifier p-3 border border-e-2">MY WORK</h1>
          </Marquee>
        </motion.div>
      </div>
      {/* <Cards  /> */}
    </div>
  );
}

export default Page2;
