import React from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Drinks from "./Drinks";
import p from "../assets/p.jpg";
import as from "../assets/as.jpg";
import Coffee from "./Coffee";

function Home() {
  return (
    <div className="w-screen h-full bg-stone-200 py-10">
      <Navbar />
      <div className="flex justify-center mt-20">
        <Cards img={p} />
      </div>
     
    </div>
  );
}

export default Home;
