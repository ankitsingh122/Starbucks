import React from "react";
import Home from "./component/Home";
import Bestseller from "./component/Bestseller";
import Offer from "./component/Offer";

function App() {
  return (
    <>
      <div className=" overflow-hidden">
        <Home />
        <Bestseller/>
        <Offer/>
      </div>
    </>
  );
}

export default App;
