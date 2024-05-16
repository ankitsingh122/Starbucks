import React from 'react'
import Cards from './Cards';

import sp from "../assets/sp.jpg";

function Ads() {
  return (
    <div className=" w-screen h-full">
      <div className="  bg-stone-200 opacity-100">
    
        <div className="flex justify-center">
          <Cards  img ={sp}/>
        </div>
      </div>

     
    </div>
  );
}

export default Ads
