import React from "react";
import img from "../assets/images/error barger.png";
import { NavLink } from "react-router";

const Error = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-center items-center bg-[#ffeded] p-10 my-10 rounded-3xl">
        <div className="text-9xl text-[#bf1e2e]">4</div>
        <div>
          <img src={img} alt="" />
        </div>
        <div className="text-9xl text-[#ee1c25]">4</div>
      </div>
      <div>
        <NavLink to="/">
          <button className="button_css text-center my-10">
            Go Back To Home Page
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
