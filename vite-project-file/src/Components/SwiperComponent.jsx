import React from "react";

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

const SwiperComponent = () => {
  return (
    <div className="p-20 bg-[#ffeded]">
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
        className="mySwiper h-150 w-full"
      >
        <SwiperSlide className="bg-white rounded-3xl ">
          <div className="mt-10">
            <div className="w-full py-16 px-6">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* LEFT TEXT SECTION */}
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Your Taste, <br />
                    Your Reviews{" "}
                    <span className="text-[#ee1c25]">Start Today!</span>
                  </h1>

                  <p className="text-gray-500">
                    connect platform. Create, deploy, and manage
                  </p>

                  <button className="button_css">Get Started</button>
                </div>

                {/* RIGHT IMAGE SECTION */}
                <div className="relative flex justify-center">
                  {/* green slanted background */}
                  <div>
                    <div className="relative flex justify-center items-center w-full h-[350px]">
                      {/* Slanted Background */}
                      <div
                        className="
                            absolute
                            w-[60%]
                            h-[300%]
                          bg-[#ffeded]
                            rotate-[-25deg]
                            rounded-3xl
                        "
                      ></div>

                      {/* Food Image */}
                      <img
                        src={img10}
                        alt=""
                        className="relative z-10 md:w-96 p-10 drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-3xl">
          <div className="flex justify-between items-center mt-30">
            <div className="ml-30">
              <div className="text-6xl">
                Add Your Favorite <br /> Dishes
              </div>
              <div className="text-5xl text-[#de1e2e] my-2">&</div>
              <div className="text-4xl">Share Your Experience</div>
              <div>
              <NavLink to="/AddReview">
                <button className="button_css my-10">Add Review</button>
              </NavLink>
            </div>
            </div>
            <div className="mr-30">
              <div className="flex justify-center items-center gap-4 relative">
                {/* Left Image */}
                <div className="w-48 h-72 rounded-[40px] overflow-hidden shadow-xl ">
                  <img
                    src={img1}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Center Image */}
                <div className="w-56 h-80 rounded-[50px] overflow-hidden shadow-2xl relative z-10 border-[6px] border-white">
                  <img
                    src={img2}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right Image */}
                <div className="w-48 h-72 rounded-[40px] overflow-hidden shadow-xl">
                  <img
                    src={img3}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Slider Dots */}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
