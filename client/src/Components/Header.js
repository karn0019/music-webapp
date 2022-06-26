import React from "react";
import { BsThreeDots } from "react-icons/bs";


const Header = (props) => {
  return (
    <div className="bg-[#221e15] text-white flex w-[100%] px-2 py-2 relative">
      <div className="text-white bg-slate-300 max-w-[100%]  ">
        <img
          src="https://picsum.photos/seed/picsum/536/354"
          className="w-[15rem] object-center h-[100%]"
        />
      </div>
      <div className="mx-5 flex flex-col justify-end text-[10px] md:text-[1rem] sm:text-[10px] ">
        <div>PLAYLIST</div>
        <div>Driving</div>
        <div>POP jams for the car</div>
        <div>created by: Ari Vaniderstine</div>
        <div className="flex gap-4 py-2">
          <button className="bg-green-600 px-8 py-1 rounded-full">PLAY</button>
          <span className=" px-2 rounded-full text-center flex items-center border-white border-[1px]">
            <BsThreeDots />
          </span>
        </div>
      </div>
      <BsThreeDots className="absolute right-5 sm:hidden z-10" onClick={()=>props.setIsOpenM(!props.isOpenM)}/>
    </div>
  );
};

export default Header;
