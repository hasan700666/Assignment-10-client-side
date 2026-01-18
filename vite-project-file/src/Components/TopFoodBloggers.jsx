import React, { use } from "react";
import { ThemeContext } from "../Context/ThemeContext/ThemeContext";

const TopFoodBloggers = ({ data }) => {
  const { isDarkMode } = use(ThemeContext);

  return (
    <div
      className={`lg:m-10 m-5 flex justify-center items-center flex-col ${isDarkMode ? "bg-[#1a1a1a]" : "bg-[#ffeded]"} rounded-3xl p-10`}
    >
      <div className="">
        <img src={data.img} alt="img" className="rounded-full" />
      </div>
      <div
        className={`text-center text-[#ee1c25] text-2xl mt-2 ${isDarkMode ? "text-[#ff6b6b]" : "text-[#ee1c25]"}`}
      >
        {data.name}
      </div>
      <div
        className={`text-center text-[#bf1e2e] text-xs ${isDarkMode ? "text-[#ff8787]" : "text-[#bf1e2e]"}`}
      >
        {data.experience}
      </div>
      <div
        className={`text-center mt-5 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
      >
        \" {data.comment} \"
      </div>
    </div>
  );
};

export default TopFoodBloggers;
