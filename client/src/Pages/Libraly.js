import React from "react";
import { Leftbar } from "../Components/Leftbar";
import { usePlayListing } from "../Hooks/useContext";
import { BsThreeDots } from "react-icons/bs";

const Libraly = (props) => {
  const { isOpen, setIsOpen, isOpenM, setIsOpenM } = usePlayListing();
  return (
    <div className="bg-[#221e15] text-white w-screen h-screen relative ">
      <Leftbar isOpen={isOpen} setIsOpen={setIsOpen} isOpenM={isOpenM} />
      <div className={`w-[90%] absolute duration-200 ${isOpen ? "left-[10%]" :"left-[5%] w-[100%]"} gap-10 sm:gap-5 grid grid-cols-2 sm:grid-cols-4 mt-8` }>
        <div className="max-w-[100%] w-[18rem] relative">
          <img
            src="https://picsum.photos/seed/picsum/536/354"
            className=" object-center w-full h-[100%]"
          />
          <h1 className=" w-full px-2 shadow-xl bg-black">เพลง</h1>
        </div>
        <div className="max-w-[100%] w-[18rem] relative">
          <img
            src="https://picsum.photos/seed/picsum/536/354"
            className=" object-center h-[100%]"
          />
          <h1 className=" w-full px-2 shadow-xl ">เพลง</h1>
        </div>
        <div className="max-w-[100%] w-[18rem] relative">
          <img
            src="https://picsum.photos/seed/picsum/536/354"
            className=" object-center h-[100%]"
          />
          <h1 className=" w-full px-2 shadow-xl ">เพลง</h1>
        </div>
        <div className="max-w-[100%] w-[18rem] relative">
          <img
            src="https://picsum.photos/seed/picsum/536/354"
            className=" object-center h-[100%]"
          />
          <h1 className=" w-full px-2 shadow-xl ">เพลง</h1>
        </div>
        
      </div>
      <BsThreeDots className="absolute right-5 sm:hidden z-10" onClick={()=>setIsOpenM(!isOpenM)}/>
    </div>
  );
};

export default Libraly;
