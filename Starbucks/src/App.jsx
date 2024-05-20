import React, { useEffect } from "react";
import Home from "./component/Home";
import Bestseller from "./component/Bestseller";
import Offer from "./component/Offer";
import Footer from "./component/Footer";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
    useEffect(() => {
      AOS.init({
        duration: 1000,
      });
    }, []);
  return (
    <>
      <div className=" overflow-hidden">
        <Home />
        <Bestseller/>
        <Offer/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
