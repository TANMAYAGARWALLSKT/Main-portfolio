import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import { Scroll } from "react-locomotive-scroll";


import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

function App() {
  
  return (
    <>
    {/* <div className="bg-black w-screen h-screen" id="div"></div> */}
      <Page1 />
      <Page2 />
    </>
  );
}

export default App;
