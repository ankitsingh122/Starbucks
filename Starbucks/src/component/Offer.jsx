import React from 'react'
import Drinks from './Drinks';
import C1 from '../assets/C1.webp'
import k from "../assets/k.webp";
import o from "../assets/o.webp";

function Offer() {
  return (
    <>
      <div className="w-screen h-full bg-stone-200">
        <div className="flex justify-center text-4xl font-semibold py-10">
          Latest Offerings
        </div>
        <div className="flex justify-center py-10 space-x-8">
          <Drinks img={C1} price="$4.15" name="Belgium Chocolate Frappuccino" />
          <Drinks img={k} price="$4" name="Belgium Chocolate Latte" />
          <Drinks img={o} price="$3.15" name="Iced Belgium Chocolate Latte" />
        </div>
      </div>
    </>
  );
}

export default Offer
