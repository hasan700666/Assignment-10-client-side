import React from "react";
import img from "../assets/images/logo.png";
import { NavLink } from "react-router";

const Navbar = () => {
  const li = (
    <>
      <NavLink to="/" className="mx-5 card_css ">Home</NavLink>
      <NavLink to="/AddReview" className="mx-5 card_css ">Add Reviews</NavLink>
      <NavLink to="/MyReviews" className="mx-5 card_css ">My Reviews</NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {}
            </ul>
          </div>
          <NavLink className="card_css text-xl flex items-center justify-center mx-5">
            <img src={img} alt="" className="w-10" />
            <div>
              <samp className="text-[#bf1e2e]">Food</samp>
              <span className="text-[#ee1c25]"> Lover</span>
            </div>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal" id="NavLink_css">{li}</ul>
        </div>
        <div className="navbar-end">
          <button className="button_css mx-3">Sing up</button>
          <button className="button_css mx-3">Log in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
