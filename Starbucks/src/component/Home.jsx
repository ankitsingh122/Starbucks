import React from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import p from "../assets/p.jpg";


function Home() {
  return (
    <div className="w-screen h-full bg-stone-200 py-10  ">
      <div className="flex justify-center">
        <Navbar />
      </div>

      <div className="flex justify-center mt-20">
        <Cards img={p} />
      </div>
    </div>
  );
}

export default Home;
