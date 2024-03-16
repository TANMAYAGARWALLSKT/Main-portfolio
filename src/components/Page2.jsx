import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import "../App.css";
import Cards from "./Cards";

function Page2() {
  return (
    <div
    // 08111a
      // data-scroll
      // data-scroll-speed=""
      className="w-screen sm:h-[90vh] h-[80vh] p-1 bg-[#08111a] text-zinc-200 rounded-[3rem]  overflow-hidden relative sm:top-[90vh] top-[85vh] "
    >
      <div className="flex h-[23vh] overflow-hidden" id="text">
        <motion.div
          className="flex flex-wrap sm:mt-10 mt-2  h-48 w-screen sm:text-9xl text-4xl font-extrabold gap-10 "
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
