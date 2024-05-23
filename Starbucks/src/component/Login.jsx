import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import starbucks from "../assets/starbucks.png";
import { loginSuccess } from "../Store/Slice/Auth";
import PropTypes from "prop-types";
import { login } from "../Store/Slice/UserSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login({ closeModal, onLoginSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !password) {
      toast.error("Please fill out all fields.");
      return;
    }
    

    const formData = {
      name: name,
      email: email,
      password: password,
      loggedIn: true,
      tel: phone,
    };



    dispatch(loginSuccess());
    dispatch(login(formData));
    onLoginSuccess();
    closeModal();
  };

  
    
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white shadow-md rounded px-32 pt-6 py-8" ref={modalRef}>
      <div className="flex justify-center py-4">
        <img className="w-20" src={starbucks} alt="Starbucks Logo" />
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="mt-2">
          <input
            className="rounded-md text-center"
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <input
            className="rounded-md text-center"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <input
            className="rounded-md text-center"
            type="tel"
            placeholder="Contact No."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <input
            className="rounded-md text-center"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-6">
          <button type="submit">Submit</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

Login.propTypes = {
  closeModal: PropTypes.func.isRequired,
  onLoginSuccess: PropTypes.func.isRequired,
};

export default Login;
