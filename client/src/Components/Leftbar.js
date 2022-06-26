import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
export const Leftbar = (props) => {
  const navigate=useNavigate();
  return (
    <div
    >
      <div className={`max-w-[100%] h-screen fixed  pl-5  pr-10 text-center  leading-[5rem] duration-200 hidden sm:block cursor-pointer text-xl ${
        props.isOpen ? "w-[160px]" : "w-[50px]"
      }`}>
        <div>
          <BsThreeDots
            className="inline cursor-pointer"
            onClick={() => props.setIsOpen(!props.isOpen)}
          />
        </div>
        <div className="text-center duration-200 cursor-pointer" onClick={()=>navigate('/')}>
          <FaHome className="inline-block mr-2" />
          {props.isOpen ? "Home" : null}
        </div>
        <div className="text-center duration-200 cursor-pointer">
          <FaSearch className="inline-block mr-2" />
          {props.isOpen ? "Search" : null}
        </div>
        <div className="text-center duration-200 cursor-pointer" onClick={()=>navigate('/libraly')}>
          <BiLibrary className="inline-block mr-2" />
          {props.isOpen ? "Library" : null}
        </div>
      </div>
      {/*----------------------------------------------- -------------------------------------------------------------------------------------------------------------------------- */}
      <div className={` absolute bg-[#221e15] z-10 w-screen h-screen ${props.isOpenM? "flex":"hidden"} flex-col justify-center items-center gap-10 font-bold text-2xl`}>
        <div className="text-center duration-200 cursor-pointer">
          <FaHome className="inline-block mr-2" />
          Home
        </div>
        <div className="text-center duration-200 cursor-pointer">
          <FaSearch className="inline-block mr-2" />
          Search
        </div>
        <div className="text-center duration-200 cursor-pointer">
          <BiLibrary className="inline-block mr-2" />
          Your Library
        </div>
      </div>
    </div>
  );
};
