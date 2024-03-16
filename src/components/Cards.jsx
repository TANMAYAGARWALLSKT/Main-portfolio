import React from "react";
import "../App.css";
function Cards() {
  return (
    <div>
      <div className=" mt-[3vh] h-[74vh] w-[100vw] p-10  " id="warpper">
        <div
          className=" justify-center bg-black  items-center rounded-3xl w-[15vw] h-[25vh] flex  overflow-hidden circle text-white text-3xl font-bold font-mono "
          id="card"
        >
          <img
            className="w-[52vh] h-[20vh] object-cover rounded-2xl"
            src="../src/assets/Bubblegame.png"
            alt=""
          />
          <div
            className="w-[15vw] h-[25vh] overflow-hidden bg-white  absolute  rounded-3xl Card"
            id="cards"
          >
        
            <h1 className="p- ">
              Bubble Game
            </h1>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
