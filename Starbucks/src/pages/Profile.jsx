import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../component/Navbar";
import starbucks from "../assets/starbucks.png";
import Footer from "../component/Footer";
import CircumIcon from "@klarr-agency/circum-icons-react";
import { logoutSuccess } from "../Store/Slice/Auth";
import { logout } from "../Store/Slice/UserSlice";

function Profile() {
  const userData = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutSuccess());
    dispatch(logout());
  };

  return (
    <>
      <div className="w-screen h-full bg-stone-200 py-10">
        <div className="flex justify-center">
          <Navbar />
        </div>
        <div className="relative flex justify-center py-20">
          <img src={starbucks} alt="Starbucks" data-aos="zoom-in" />
          {userData.user ? (
            <div className="absolute top-0 w-full h-full flex justify-center items-center ">
              <div className="bg-white bg-opacity-80  rounded-lg shadow-lg w-96 h-96 text-center josefin-sans-uniqueProfile">
                <h1 className="text-2xl font-bold mt-10 ">Welcome </h1>
                <hr />
                <div className=" mt-20 text-lg ">
                  <p className="mb-2 ">
                    <strong>Name:</strong>
                    <span> {userData.user?.name}</span>
                  </p>
                  <p className="mb-2">
                    <strong>Email:</strong>
                    <span> {userData.user?.email}</span>
                  </p>
                  <p className="mb-2">
                    <strong>Phone:</strong>
                    <span> {userData.user?.tel}</span>
                  </p>
                  <div className="flex justify-center py-8">
                    <div onClick={handleLogout} className="cursor-pointer">
                      <CircumIcon name="logout" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
