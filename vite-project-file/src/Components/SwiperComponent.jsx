import React, { use } from "react";

import img1 from "../assets/images/mas.jpg";
import img2 from "../assets/images/kzbcnbuduzkbk9hjjiwz.webp";
import img3 from "../assets/images/Panta_Ilish.jpg";
import img10 from "../assets/images/img-removebg-preview.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { NavLink } from "react-router";
import { ThemeContext } from "../Context/ThemeContext/ThemeContext";

const SwiperComponent = () => {
  const { isDarkMode } = use(ThemeContext);
  return (
    <div className={`p-20 ${isDarkMode ? "bg-[#1a1a1a]" : "bg-[#ffeded]"}`}>
      <Swiper
        //onSlideChange={() => console.log("slide change")}
        //onSwiper={(swiper) => console.log(swiper)}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper sm:h-150 h-100 w-full Swiper_css"
      >
        <SwiperSlide
          className={`${isDarkMode ? "bg-[#2d2d2d]" : "bg-white"} rounded-3xl `}
        >
          <div className="m-10">
            <div className="w-full lg:py-16 md:py-9 py-0 px-6">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div className="sm:space-y-6 space-y-2 text_css">
                  <h1
                    className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    Your Taste, <br />
                    Your Reviews{" "}
                    <span className="text-[#ee1c25] text_css_3">
                      Start Today!
                    </span>
                  </h1>

                  <p
                    className={`sm:text-2xl text-xs text_css_2 ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}
                  >
                    connect platform. Create, deploy, and manage
                  </p>

                  <button className="button_css">Get Started</button>
                </div>
                <div className="relative flex justify-center">
                  <div>
                    <div className="relative flex justify-center items-center w-full sm:h-[350px] h-0">
                      <div
                        className={`
                            absolute
                            md:w-[40%]
                            w-[30%]
                            h-[300%]
                          ${isDarkMode ? "bg-[#3d3d3d]" : "bg-[#ffeded]"}
                            rotate-[-25deg]
                            rounded-3xl
                            md:block
                            hidden
                        `}
                      ></div>
                      <img
                        src={img10}
                        alt=""
                        className="relative z-10 lg:w-200 md:w-150 sm:w-70 w-50 lg:p-10 p-0 md:bottom-0 sm:bottom-35 md:left-0 left-20 drop-shadow-2xl img_swiper"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`${isDarkMode ? "bg-[#2d2d2d]" : "bg-white"} rounded-3xl flex justify-center`}
        >
          <div className="flex md:justify-between md:items-center md:h-full h-100 md:flex-row flex-col md:m-0 m-10 md:text-left text-center">
            <div className="lg:ml-30 md:ml-20 ml-0">
              <div
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${isDarkMode ? "text-white" : "text-black"}`}
              >
                Add Your Favorite <br /> Dishes
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#de1e2e] my-2">
                &
              </div>
              <div
                className={`text-xs sm:text-xl md:text-2xl lg:text-3xl ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                Share Your Experience
              </div>
              <div>
                <NavLink to="/AddReview">
                  <button className="button_css sm:my-10 my-2">
                    Add Review
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="lg:ml-30 md:mr-20 mr-0 md:w-[30vw] w-full">
              <div className="flex lg:justify-center lg:items-center gap-4 relative">
                <div className="w-48 h-72 rounded-[40px] overflow-hidden shadow-xl lg:block hidden">
                  <img
                    src={img1}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-56 h-80 rounded-[50px] overflow-hidden shadow-2xl relative z-10 border-[6px] border-white md:block hidden">
                  <img
                    src={img2}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-48 h-72 rounded-[40px] overflow-hidden shadow-xl lg:block hidden">
                  <img
                    src={img3}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center items-center w-full md:h-100 h-30 md:hidden img_swiper_2">
                  <img
                    src={img2}
                    alt=""
                    className="md:hidden block sm:h-60 h-30 w-full mx-10 rounded-3xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
