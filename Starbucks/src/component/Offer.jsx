import React, { useState } from "react";
import Drinks from "./Drinks";
import C1 from "../assets/C1.webp";
import n from "../assets/n.webp";
import k from "../assets/k.webp";
import o from "../assets/o.webp";
import q from "../assets/q.webp";
import CircumIcon from "@klarr-agency/circum-icons-react";


const drinks = [
  { img: C1, price: "$4.15", name: "Belgium Chocolate Frappuccino" },
  { img: o, price: "$3.15", name: "Iced Belgium Chocolate Latte" },
  { img: q, price: "$5.15", name: "Alphonso Mango Java Chip Frappuccino" },
  { img: k, price: "$4", name: "Belgium Chocolate Latte" },
  { img: n, price: "$3.75", name: "Cold Brew with Ginger Ale" },
];

function Offer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const displayCount = 3; 

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % drinks.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + drinks.length) % drinks.length
    );
  };

  const displayedDrinks = drinks.slice(
    currentIndex,
    currentIndex + displayCount
  );

  if (displayedDrinks.length < displayCount) {
    displayedDrinks.push(
      ...drinks.slice(0, displayCount - displayedDrinks.length)
    );
  }

  return (
    <div className="w-screen h-full bg-stone-200">
   
      <div
        className="flex justify-center text-4xl font-semibold py-10"
        data-aos="fade-in"
      >
        Latest Offerings
      </div>
      
      <div className="flex justify-center py-10 space-x-8">
        <button onClick={handlePrev}>
          <CircumIcon name="circle_chev_left"/>
        </button>
        {displayedDrinks.map((drink, index) => (
          <Drinks
            key={index}
            img={drink.img}
            price={drink.price}
            name={drink.name}
          />
        ))}
        <button onClick={handleNext} >
          <CircumIcon name="circle_chev_right" />
        </button>
      </div>
    </div>
  );
}

export default Offer;
