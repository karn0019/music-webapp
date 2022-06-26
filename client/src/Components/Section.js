import React from 'react'
import { FaSearch } from 'react-icons/fa';


const Section = () => {
  return (
    <section className='bg-[#221e15] text-white pt-5 px-2 w-[100%]'>
        <div className='max-w-[100%] w-[80%] md:w-[40%] bg-black flex relative '>
        <FaSearch className='absolute top-[5px] text-gray-400 '/><input className={`bg-black text-white outline-0 px-5 w-[100%]`} placeholder="Filter,song"/>
        </div>
        <div className='max-w-[100%] grid grid-cols-5 mt-5 border-b-[1px] py-2'>
            <div className=''>TITLE</div>
            <div className=''>ARTIS</div>
            <div className=''>ALBUM</div>
            <div className=''>DATE</div>
            <div>TIME</div>
        </div>
        <div className='max-w-[100%] grid grid-cols-5 border-b-[1px] py-2 '>
            <div className=''>TITLE TITLE TITLE DATE TITLE TITLE TITLE</div>
            <div className=''>ARTIS TITLE TITLE TITLE</div>
            <div className=''>ALBUM TITLE TITLE TITLE</div>
            <div className=''>DATE TITLE TITLE TITLE</div>
            <div>TIME DATE TITLE DATE TITLE TITLE TITLE</div>
        </div>
      
        
    </section>
  )
}

export default Section