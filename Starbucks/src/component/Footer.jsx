import React from "react";
import starbucks from "../assets/starbucks.png";

function Footer() {
  return (
    <>
      <div className="bg-green-900 w-screen h-full">
        <div>
          <div className="flex p-44 ">
            <img className="w-20 " src={starbucks} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
