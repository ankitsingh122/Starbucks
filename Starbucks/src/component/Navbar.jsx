import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import starbucks from "../assets/starbucks.png";
import CircumIcon from "@klarr-agency/circum-icons-react";
import Login from "./Login";
import { Link } from "react-router-dom";
import { loginSuccess } from "../component/Store/Slice/Auth";

function Navbar() {
  const [isLogin, setLogin] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const closeModal = () => {
    setLogin(false);
  };

  const toggleLogin = () => {
    setLogin(!isLogin);
  };

  const handleLoginSuccess = () => {
    dispatch(loginSuccess());
    closeModal();
  };

  return (
    <>
      <div className="bg-white flex justify-between items-center w-max py-4 px-8 rounded-full">
        <div className="flex">
          <img className="w-16" src={starbucks} alt="" />
        </div>
        <div className="flex space-x-10 font-semibold text-lg cursor-pointer mx-20">
          <Link to="/">
            <h1 className="text-slate-500 hover:text-black">Home</h1>
          </Link>
          <h1 className="text-slate-500 hover:text-black">Rewards</h1>
          <h1 className="text-slate-500 hover:text-black">Menu</h1>
          <h1 className="text-slate-500 hover:text-black">Order</h1>
          <h1 className="text-slate-500 hover:text-black">E-Gift</h1>
          <h1 className="text-slate-500 hover:text-black">Pay</h1>
        </div>
        <div className="flex px-5">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input py-2 rounded-full pl-10 pr-3 border border-gray-300"
            placeholder="Search anything"
          />
        </div>
        <div className="flex items-center space-x-5">
          {!isLoggedIn && (
            <div
              onClick={toggleLogin}
              className="w-max h-max text-white rounded-2xl px-8 py-3 bg-green-950 hover:bg-green-900 cursor-pointer"
            >
              Login
            </div>
          )}
          <Link to="/Profile" className="cursor-pointer">
            <CircumIcon name="user" color="black" />
          </Link>
        </div>
      </div>
      {isLogin && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-transparent z-50 flex justify-center items-center font-azonix"
          data-aos="zoom-in"
        >
          <div className="bg-green-950 rounded-lg border border-stone-700 px-4 py-6 text-center shadow-lg text-md">
            <Login
              closeModal={closeModal}
              onLoginSuccess={handleLoginSuccess}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
