import React from 'react'
import starbucks from "../assets/starbucks.png"

function Navbar() {
  return (
    <>
      <div className="bg-white flex justify-between items-center mx-96  py-4 px-20 rounded-full">
        <div className="flex">
          <img className="w-16 " src={starbucks} alt="" />
        </div>
        <div className="flex space-x-10  font-semibold text-lg cursor-pointer mr-44">
          <h1 className=" text-slate-500 hover:text-black">Rewards</h1>
          <h1 className=" text-slate-500 hover:text-black">Menu</h1>
          <h1 className=" text-slate-500 hover:text-black">Order</h1>
          <h1 className=" text-slate-500 hover:text-black">E-Gift</h1>
          <h1 className=" text-slate-500 hover:text-black">Pay</h1>
        </div>
        <div className="w-max h-max   text-white rounded-2xl px-8 py-3  bg-green-700 cursor-pointer ">
          Profile
        </div>
      </div>
    </>
  );     
}

export default Navbar
