import React, { use } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import img from "../assets/images/logo.png";
import { NavLink } from "react-router";
import { ThemeContext } from "../Context/ThemeContext/ThemeContext";

const Footer = () => {
  const { isDarkMode } = use(ThemeContext);
  return (
    <div
      className={`bg_css ${isDarkMode ? "text-white" : "text-black"} py-10 px-6`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h2 className="font-bold text-lg">
            <img src={img} alt="" className="w-10" />
          </h2>
          <p>FOOD LOVER COMMUNICATE</p>
        </div>

        <div>
          <p>
            <a href="https://github.com/hasan700666">WEB DEVELOPER</a>
          </p>
          <p>
            <NavLink to="/AddReview">ADD REVIEW</NavLink>
          </p>
          <p>
            <NavLink to="/About">ABOUT US</NavLink>
          </p>
          <p>
            <NavLink to="/Contact">CONTACT</NavLink>
          </p>
        </div>

        <div>
          <p>
            <a href="https://github.com/hasan700666/Assignment-10-client-side">
              REPOSITORY LINK - CLIENT
            </a>
          </p>
          <p>
            <a href="https://github.com/hasan700666/Assignment-10-server-side">
              REPOSITORY LINK - SERVER
            </a>
          </p>
        </div>

        <div>
          <p>QUICK LINKS</p>
          <p>
            <NavLink to="/">HOME</NavLink>
          </p>
          <p>
            <NavLink to="/AllReview">ALL REVIEWS</NavLink>
          </p>
          <p>
            <NavLink to="/Dashboard">DASHBOARD</NavLink>
          </p>
        </div>
      </div>

      <div
        className={`border-t ${isDarkMode ? "border-gray-700" : "border-gray-300"} my-8`}
      ></div>

      <div className="flex justify-center space-x-4 text-lg">
        <a href="https://www.facebook.com/hasanal.muttaki">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/hasanalmuttaki700666/">
          <FaInstagram />
        </a>
        <a href="https://x.com/AllMuttaki">
          <FaXTwitter />
        </a>
        <a href="https://www.discordapp.com/users/767687804367929346">
          <FaDiscord />
        </a>
        <a href="https://www.linkedin.com/in/mohammodhasanalmuttaki/">
          <FaLinkedin />
        </a>
      </div>

      <p className="text-center text-xs mt-4">
        © Copyright. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
