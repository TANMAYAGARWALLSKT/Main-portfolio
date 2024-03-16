import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

function Page2() {
  return (
    <div className="w-screen h-screen p-1 bg-zinc-950 text-zinc-200 rounded-2xl relative -top-10">
      <div className="flex " id="text">
        <motion.div
          className="flex flex-wrap mt-10 h-36  w-screen text-9xl gap-10"
          id="div"
        >
          <Marquee className="overflow-hidden font-bold  tracking-wider font-mono opacity-20">
            WORK MY WORK MY WORK MY WORK MY WORK MY WORK MY WORK MY WORK MY 
          </Marquee>
        </motion.div>
      </div>
    </div>
  );
}

export default Page2;
