import React from 'react'
import { useState } from 'react';

const PlaylistContext = React.createContext();
export const ListingContext = (props) => {
 
  const [isOpen,setIsOpen]=useState(false);
  const [isOpenM,setIsOpenM]=useState(false);

  return (
    <PlaylistContext.Provider
    value={{
       isOpen,
       setIsOpen,
       isOpenM,
       setIsOpenM   
    }}>
     {props.children}
    </PlaylistContext.Provider>
  )
}

const usePlayListing = ()=> React.useContext(PlaylistContext);

export {usePlayListing}