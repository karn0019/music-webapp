import React from "react";
import { Leftbar } from "../Components/Leftbar";
import { Playlist } from "../Components/Playlist";
import { usePlayListing } from "../Hooks/useContext";

const Home = () => {
  const { isOpen, setIsOpen, isOpenM, setIsOpenM } = usePlayListing();

  return (
    <div className="bg-[#221e15] text-white w-screen h-screen relative ">
      <Leftbar isOpen={isOpen} setIsOpen={setIsOpen} isOpenM={isOpenM} />
      <Playlist isOpen={isOpen}/>
    </div>
  );
};

export default Home;
