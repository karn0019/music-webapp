import React from 'react'
import { usePlayListing } from '../Hooks/useContext';
import Header from './Header'
import Section from './Section'

export const Playlist = (props) => {
    const { isOpenM, setIsOpenM } = usePlayListing();
  return (
    <div className={`w-[90%] left-[10%] absolute duration-200 ${props.isOpen ? "left-[10%]" :"left-[5%] w-[100%]"}`}>
        <Header setIsOpenM={setIsOpenM} isOpenM={isOpenM}/>
        <Section/>
    </div>
  )
}
