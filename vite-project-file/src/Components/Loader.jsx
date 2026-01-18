import React, { use } from "react";
import { ThemeContext } from "../Context/ThemeContext/ThemeContext";

const Loader = () => {
  const { isDarkMode } = use(ThemeContext);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${isDarkMode ? "bg-black" : "bg-white"}`}
    >
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* DaisyUI Loading Spinner */}
        <span
          className={`loading loading-infinity size-20 ${isDarkMode ? "text-white" : "text-black"}`}
        ></span>
      </div>
    </div>
  );
};

export default Loader;
