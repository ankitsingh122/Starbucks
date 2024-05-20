import React from 'react'
import Coffee from './Coffee';
import s from '../assets/s.webp';
import d from "../assets/d.webp";
import f from "../assets/f.webp";
import m from "../assets/m.webp";
import H from "../assets/H.webp";
import E from "../assets/E.webp";


function Bestseller() {
  return (
    <>
      <div className="w-screen h-full bg-stone-200">
        <div className="flex justify-center text-4xl font-semibold py-10">
          <h1 data-aos="fade-in">Handcrafted Curations</h1>
        </div>

        <div
          className=" flex justify-center space-x-40 py-20"
          data-aos="fade-in"
        >
          <div className=" cursor-pointer">
            <Coffee img={s} />
            <h1 className="flex justify-center  mt-4 font-semibold">
              BestSeller
            </h1>
          </div>

          <div className="cursor-pointer">
            <Coffee img={m} />
            <h1 className="flex justify-center  mt-4 font-semibold">
              Marchendise
            </h1>
          </div>
          <div className="cursor-pointer">
            <Coffee img={f} />
            <h1 className=" flex justify-center mt-4 font-semibold">Food</h1>
          </div>
          <div className="cursor-pointer">
            <Coffee img={d} />
            <h1 className="flex justify-center  mt-4 font-semibold">Drinks</h1>
          </div>
          <div className="cursor-pointer">
            <Coffee img={H} />
            <h1 className="flex justify-center  mt-4 font-semibold">
              Coffee at Home
            </h1>
          </div>
          <div className="cursor-pointer">
            <Coffee img={E} />
            <h1 className="flex justify-center  mt-4 font-semibold">
              Ready to Eat
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bestseller
