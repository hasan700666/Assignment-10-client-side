import React from "react";
import img1 from "../assets/images/mas.jpg";
import img2 from "../assets/images/kzbcnbuduzkbk9hjjiwz.webp";
import img3 from "../assets/images/Panta_Ilish.jpg";

const About = () => {
  return (
    <div>
        <div className="relative h-[250px] flex items-center justify-center">
          <div className="absolute left-1/2 -translate-x-full w-[300px] h-[200px] transition-all">
            <div className="w-full h-full rounded-4xl overflow-hidden">
              <img src={img3} alt="" />
            </div>
          </div>
          <div className="absolute w-[300px] h-[203px] z-30 shadow-2xl transition-all duration-300">
            <div className="w-full h-full rounded-4xl overflow-hidden border-4 border-[#ffeded] ">
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="absolute left-1/2 translate-x-0 w-[300px] h-[200px] transition-all">
            <div className="w-full h-full rounded-4xl overflow-hidden">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
