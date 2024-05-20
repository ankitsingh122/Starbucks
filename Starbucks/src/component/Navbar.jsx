import React from 'react'
import starbucks from "../assets/starbucks.png"
import CircumIcon from "@klarr-agency/circum-icons-react"; 



function Navbar() {
 
  return (
    <>
      <div className="bg-white flex justify-between items-center w-max   py-4 px-8 rounded-full">
        <div className="flex ">
          <img className="w-16 " src={starbucks} alt="" />
        </div>
        <div className="flex space-x-10  font-semibold text-lg cursor-pointer mx-20">
          <h1 className=" text-slate-500 hover:text-black">Home</h1>
          <h1 className=" text-slate-500 hover:text-black">Rewards</h1>
          <h1 className=" text-slate-500 hover:text-black">Menu</h1>
          <h1 className=" text-slate-500 hover:text-black">Order</h1>
          <h1 className=" text-slate-500 hover:text-black">E-Gift</h1>
          <h1 className=" text-slate-500 hover:text-black">Pay</h1>
        </div>
        <div className="flex items-center space-x-5">
          <div className="w-max h-max text-white rounded-2xl px-8 py-3  bg-green-950 hover:bg-green-900 cursor-pointer ">
            Login
          </div>
          <CircumIcon name="user" color="black"></CircumIcon>
        </div>
      </div>
    </>
  );     
}

export default Navbar;
