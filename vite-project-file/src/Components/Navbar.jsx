import React, { use, useState } from "react";
import img from "../assets/images/logo.png";
import { NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { ThemeContext } from "../Context/ThemeContext/ThemeContext";

const Navbar = () => {
  const { user, SingOut, setUser } = use(AuthContext);
  const { isDarkMode, toggleTheme } = use(ThemeContext);
  const [btn, setbtn] = useState(false);

  const li = (
    <>
      <NavLink to="/" className="mx-5 card_css ">
        Home
      </NavLink>
      <NavLink to="/AllReview" className="mx-5 card_css ">
        All Review
      </NavLink>
      <NavLink to="/About" className="mx-5 card_css ">
        About
      </NavLink>
      <NavLink to="/Contact" className="mx-5 card_css ">
        Contact
      </NavLink>
      {user ? (
        <>
          <NavLink to="/Dashboard" className="mx-5 card_css ">
            Dashboard
          </NavLink>
          <NavLink to="/MyProfile" className="mx-5 card_css ">
            My Profile
          </NavLink>
          <NavLink to="/AddReview" className="mx-5 card_css ">
            Add Reviews
          </NavLink>
          <NavLink to={`/MyReviews/${user?.email}`} className="mx-5 card_css ">
            My Reviews
          </NavLink>
          <NavLink
            to={`/MyFavorites/${user?.email}`}
            className="mx-5 card_css "
          >
            My Favorites
          </NavLink>
        </>
      ) : null}
    </>
  );

  const li2 = (
    <>
      <NavLink to="/" className="my-2">
        Home
      </NavLink>
      <NavLink to="/Dashboard" className="my-2">
        Dashboard
      </NavLink>
      <NavLink to="/AllReview" className="my-2">
        All Review
      </NavLink>
      <NavLink to="/About" className="my-2">
        About
      </NavLink>
      <NavLink to="/Contact" className="my-2">
        Contact
      </NavLink>
      <NavLink to="/MyProfile" className="my-2">
        My Profile
      </NavLink>
      <NavLink to="/AddReview" className="my-2">
        Add Reviews
      </NavLink>
      <NavLink to={`/MyReviews/${user?.email}`} className="my-2">
        My Reviews
      </NavLink>
      <NavLink to={`/MyFavorites/${user?.email}`} className="my-2">
        My Favorites
      </NavLink>
    </>
  );

  const hendleSingOut = () => {
    SingOut()
      .then((res) => {
        // Sign-out successful.
        setUser(res);
        //console.log("sing out");
      })
      .catch(() => {
        // An error happened.
        //console.log(error.message);
      });
  };

  const btn_click = () => {
    setbtn(!btn);
  };

  //console.log(user);
  //console.log(user?.photoURL);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="">
        <div className="navbar bg-base-100 shadow-sm bg_css">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                {li2}
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
                  <button
                    onClick={toggleTheme}
                    className="btn btn-ghost btn-circle mx-2"
                    title={isDarkMode ? "Light mode" : "Dark mode"}
                  >
                    {isDarkMode ? (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.293 2.293a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 4.293a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm2.828 4.293l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 111.414-1.414zM10 14a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.293 2.293l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 111.414-1.414zM3.707 5.707a1 1 0 010 1.414l-.707.707A1 1 0 11.586 5.293l.707-.707a1 1 0 011.414 0zM5 10a5 5 0 1110 0 5 5 0 01-10 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                      </svg>
                    )}
                  </button>
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
                      <NavLink to="/Dashboard">
                        <li className="card_css my-1">Dashboard</li>
                      </NavLink>
                      <NavLink to="/MyProfile">
                        <li className="card_css my-1">My Profile</li>
                      </NavLink>
                      <NavLink to="/AddReview">
                        <li className="card_css my-1">Add Review</li>
                      </NavLink>
                      <NavLink to="/MyReviews">
                        <li className="card_css my-1">My Reviews</li>
                      </NavLink>
                      <NavLink to={`/MyFavorites/${user?.email}`}>
                        <li className="card_css my-1">My Favorites</li>
                      </NavLink>
                      <li
                        className="card_css my-1 hover:bg-[#bf1e2e] hover:text-white"
                        onClick={hendleSingOut}
                      >
                        Sing out
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={toggleTheme}
                  className="btn btn-ghost btn-circle mx-2"
                  title={isDarkMode ? "Light mode" : "Dark mode"}
                >
                  {isDarkMode ? (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.293 2.293a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 4.293a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm2.828 4.293l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 111.414-1.414zM10 14a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.293 2.293l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 111.414-1.414zM3.707 5.707a1 1 0 010 1.414l-.707.707A1 1 0 11.586 5.293l.707-.707a1 1 0 011.414 0zM5 10a5 5 0 1110 0 5 5 0 01-10 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                  )}
                </button>
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
    </div>
  );
};

export default Navbar;
