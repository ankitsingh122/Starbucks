import React, { useState } from "react";
import starbucks from '../assets/starbucks.png'


import PropTypes from "prop-types";

function Login({  closeModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    closeModal();
  };

  return (
    <div className="bg-white shadow-md rounded px-32 pt-6 py-8 ">
      
      <div className="flex justify-center py-4">

        <img className="w-20 " src={starbucks} alt="" />
        
      </div>
            <hr />
      <form onSubmit={(e) => handleSubmit(e)}>
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
    </div>
  );
}

Login.propTypes = {
  player: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Login;
