import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaRss,
  FaGooglePlusG,
  FaEllipsisH,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        <div>
          <h2 className="font-bold text-lg">LOGO</h2>
          <p>SOLOGAN COMPANY</p>
        </div>

        <div>
          <p>WEEBLY THEMES</p>
          <p>PRE-SALE FAQS</p>
          <p>SUBMIT A TICKET</p>
        </div>

        <div>
          <p>EXPLORE</p>
          <p>DISCOVER MORE</p>
        </div>

        <div>
          <p>ABOUT US</p>
          <p>CONTACT US</p>
          <p>AFFILIATES</p>
          <p>RESOURCES</p>
        </div>
      </div>

      <div className="border-t border-gray-700 my-8"></div>

      <div className="flex justify-center space-x-4 text-lg">
        <FaFacebookF />
        <FaTwitter />
        <FaRss />
        <FaGooglePlusG />
        <FaEllipsisH />
      </div>

      <p className="text-center text-xs mt-4">
        ©Copyright. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
