import React from "react";
import Home from "./component/Home";
import Bestseller from "./component/Bestseller";
import Offer from "./component/Offer";
import Footer from "./component/Footer";

function App() {
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
