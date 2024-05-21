import React from "react";
import starbucks from "../assets/starbucks.png";
import CircumIcon from "@klarr-agency/circum-icons-react"; 
import a from "../assets/a.png"
import b from '../assets/b.png'


function Footer() {
  return (
    <>
      <div className=" bg-green-950 w-screen h-full josefin-sans-uniqueProfile">
        <div>
          <div className="flex p-32 space-x-20 " data-aos="fade-in">
            <div>
              <img className="w-20  " src={starbucks} alt="" />
            </div>
            <div className="flex space-x-44 ">
              <div className="text-white space-y-4 ">
                <h1 className="font-semibold text-xl cursor-pointer">
                  About Us
                </h1>
                <h2 className=" hover:text-gray-400 cursor-pointer">
                  Our Hertage
                </h2>
                <h2 className=" hover:text-gray-400 cursor-pointer">
                  CoffeeHouse
                </h2>
                <h2 className=" hover:text-gray-400 cursor-pointer">
                  Our Company
                </h2>
              </div>
              <div className="text-white space-y-4">
                <h1 className="font-semibold text-xl cursor-pointer">
                  Responsibility
                </h1>
                <h2 className=" hover:text-gray-400 cursor-pointer">
                  Diversity
                </h2>
                <h2 className=" hover:text-gray-400 cursor-pointer">
                  Community
                </h2>
                <h2 className=" hover:text-gray-400 cursor-pointer">
                  Ethical Sourcing
                </h2>
                <h2 className=" hover:text-gray-400 cursor-pointer">
                  Environmental
                </h2>
                <h2 className=" hover:text-gray-400 cursor-pointer">
                  {" "}
                  Stewardship
                </h2>
                <h2 className=" hover:text-gray-400 cursor-pointer">
                  Learn More
                </h2>
              </div>
              <div className="text-white  space-y-4 ">
                <h1 className="font-semibold text-xl cursor-pointer">
                  Quick Links
                </h1>
                <h2 className=" hover:text-gray-400 cursor-pointer">FAQs</h2>
                <h2 className=" hover:text-gray-400 cursor-pointer">
                  Privacy Policy
                </h2>
                <h2 className=" hover:text-gray-400 cursor-pointer">
                  {" "}
                  Terms and Conditions
                </h2>
                <h2 className=" hover:text-gray-400 cursor-pointer">
                  {" "}
                  Starbucks India Mobile App Terms of Use{" "}
                </h2>
                <h2 className=" hover:text-gray-400 cursor-pointer">
                  {" "}
                  Customer Service
                </h2>
                <h2 className=" hover:text-gray-400 cursor-pointer">
                  Starbucks Rewards Day Offer
                </h2>
                <h2 className=" hover:text-gray-400 cursor-pointer">
                  {" "}
                  Delivery
                </h2>
                <h2 className=" hover:text-gray-400 cursor-pointer">
                  {" "}
                  Season's Gifting
                </h2>

                <h2 className=" hover:text-gray-400 cursor-pointer">
                  Offer for Beverage Subscription at Starbucks.
                </h2>
                <h2 className=" hover:text-gray-400 cursor-pointer">
                  Beverage Subscription
                </h2>
              </div>
              <div className="text-white text-center  space-y-4 ">
                <h1 className="font-semibold text-xl">SOCIAL MEDIA</h1>
                <div className="flex space-x-2">
                  <a href="https://www.facebook.com/Starbucks/">
                    {" "}
                    <CircumIcon name="facebook" size="48px"></CircumIcon>
                  </a>
                  <a href="http://www.instagram.com/Starbucks/">
                    <CircumIcon name="instagram" size="48px"></CircumIcon>
                  </a>
                  <a href="http://www.twitter.com/Starbucks/">
                    {" "}
                    <CircumIcon name="twitter" size="48px"></CircumIcon>
                  </a>
                </div>
              </div>
              <div className=" space-y-6">
                <img className="w-96 cursor-pointer" src={a} alt="" />
                <img className="w-96 cursor-pointer" src={b} alt="" />
              </div>
            </div>
          </div>
          <div className=" mx-32 ">
            <hr />
          </div>
          <div className="text-white py-8 mx-32 flex justify-between ">
            <div className="flex  space-x-5">
              <h1 className=" cursor-pointer">Web Accessibility</h1>
              <h1>|</h1>
              <h1 className=" cursor-pointer">Privacy Statement</h1>
              <h1>|</h1>
              <h1 className=" cursor-pointer">Term of Use</h1>
              <h1>|</h1>
              <h1 className=" cursor-pointer">Contact Us</h1>
            </div>

            <h1 className="text-xs">
              © 2024 Starbucks Coffee Company. All rights reserved.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
