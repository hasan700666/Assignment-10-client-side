import React, { use } from "react";
import img1 from "../assets/images/mas.jpg";
import img2 from "../assets/images/kzbcnbuduzkbk9hjjiwz.webp";
import img3 from "../assets/images/Panta_Ilish.jpg";
import { ThemeContext } from "../Context/ThemeContext/ThemeContext";

const About = () => {
  const { isDarkMode } = use(ThemeContext);
  return (
    <div className="">
      <div className="relative lg:h-[300px] md:h-[200px] sm:h-[100px] h-[50px] flex items-center justify-center">
        <div className="absolute left-1/2 -translate-x-full lg:w-[300px] sm:w-[200px] w-[100px] lg:h-[200px] md:h-[120px] sm:h-[100px] h-[50px] transition-all">
          <div className="w-full h-full rounded-4xl overflow-hidden">
            <img src={img3} alt="" />
          </div>
        </div>
        <div className="absolute lg:w-[300px] md:w-[200px] sm:w-[200px] w-[100px] lg:h-[200px] md:h-[120px] sm:h-[100px] h-[50px] z-30 shadow-2xl transition-all duration-300">
          <div
            className={`w-full h-full rounded-4xl overflow-hidden border-4 ${isDarkMode ? "border-[#404040]" : "border-[#ffeded]"} `}
          >
            <img src={img2} alt="" />
          </div>
        </div>
        <div className="absolute left-1/2 translate-x-0 lg:w-[300px] sm:w-[200px] w-[100px] md:w-[200px] md:h-[120px] lg:h-[200px] sm:h-[100px] h-[50px] transition-all">
          <div className="w-full h-full rounded-4xl overflow-hidden">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
