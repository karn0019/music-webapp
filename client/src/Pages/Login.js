import React from "react";
import {FaRegUser} from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <div className="bg-[#221e15] w-screen h-screen flex justify-center items-center">
        <form className="max-w-[100%]  bg-black flex flex-col justify-center items-center text-white font-bold text-sm sm:text-md md:text-xl py-10 px-5 rounded-md">
            <FaRegUser size={100} className="text-white"/>
            <label className="max-w-[100%]">
              <div>Username</div>
              <input type="text" className="max-w-[100%] rounded-md text-black" />
            </label>
            <label className="max-w-[100%]">
              <div >Password</div>
              <input type="password" className="max-w-[100%] rounded-md text-black"/>
            </label>
         <div className="flex gap-5 mt-5">
         <button className=" bg-green-700 rounded-md px-5 py-2">Login</button>
         <button className=" bg-green-700 rounded-md px-5 py-2">Register</button>
         </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
