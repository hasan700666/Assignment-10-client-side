import React, { use, useState } from "react";
import img from "../assets/images/logo.png";
import { NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext/AuthContext";

const Navbar = () => {
  const { user, SingOut, MonitoringUser } = use(AuthContext);
  const [btn, setbtn] = useState(false);

  const li = (
    <>
      <NavLink to="/" className="mx-5 card_css ">
        Home
      </NavLink>
      <NavLink to="/AllFoods" className="mx-5 card_css ">
        All Foods
      </NavLink>
      <NavLink to="/MyProfile" className="mx-5 card_css ">
        My Profile
      </NavLink>
      <NavLink to="/AddReview" className="mx-5 card_css ">
        Add Reviews
      </NavLink>
      <NavLink to="/MyReviews" className="mx-5 card_css ">
        My Reviews
      </NavLink>
    </>
  );

  const hendleSingOut = () => {
    SingOut()
      .then(() => {
        // Sign-out successful.
        MonitoringUser();
        console.log("sing out");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };

  const btn_click = () => {
    setbtn(!btn);
  };



  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm bg_css">
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
          <ul className="menu menu-horizontal" id="NavLink_css">
            {li}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="flex items-center justify-center">
                <div className="dropdown dropdown-end">
                  <button className="profile_css mx-5" onClick={btn_click}>
                    <img
                      src={user?.photoURL}
                      alt=""
                      className=""
                      tabIndex={0}
                      role="button"
                    />
                  </button>
                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                  >
                    <NavLink to="/MyProfile">
                      <li className="card_css my-1">My Profile</li>
                    </NavLink>
                    <NavLink to="/AddReview">
                      <li className="card_css my-1">Add Review</li>
                    </NavLink>
                    <NavLink to="/MyReviews">
                      <li className="card_css my-1">My Reviews</li>
                    </NavLink>
                    <li className="card_css my-1 hover:bg-[#bf1e2e] hover:text-white" onClick={hendleSingOut}>
                      Sing out
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              <NavLink to="/SingUp">
                <button className="button_css mx-3">Sing up</button>
              </NavLink>
              <NavLink to="/LogIn">
                <button className="button_css mx-3">Log in</button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
