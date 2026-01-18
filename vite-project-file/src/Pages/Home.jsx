import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { ThemeContext } from "../Context/ThemeContext/ThemeContext";
import { useLoaderData } from "react-router";
import HomeCard from "../Components/HomeCard";
import SwiperComponent from "../Components/SwiperComponent";
import TopFoodBloggers from "../Components/topFoodBloggers";
import About from "../Components/About";
import Loader from "../Components/Loader";

const Home = () => {
  const data = useLoaderData();

  const [loader2, setLoader] = useState(true);

  const [fachData, setData] = useState([]);

  const { loader } = use(AuthContext);
  const { isDarkMode } = use(ThemeContext);

  useEffect(() => {
    const fachData = async () => {
      const fachData = await fetch(
        "https://foodloverserver.vercel.app/topFoodBloggers",
      );
      const res = await fachData.json();
      setLoader(false);
      setData(res);
    };
    fachData();
  }, []);

  //console.log(fachData);

  if (loader && loader2) {
    return <Loader />;
  }

  return (
    <div className="my-20">
      <div>
        <SwiperComponent></SwiperComponent>
      </div>
      <div>
        <div className="text-center m-10 text-6xl pt-10">
          <span className="text-[#bf1e2e]">Featured</span>
          <span className="text-[#ee1c25]"> Reviews</span>
        </div>
        <div>
          {data.length ? (
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5">
              {data.map((data) => (
                <HomeCard data={data}></HomeCard>
              ))}
            </div>
          ) : (
            <div className="text-center min-h-screen flex justify-center items-center text-4xl">
              Nothing!
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="text-center m-10 text-6xl pt-10">
          <span className="text-[#bf1e2e]">Featured Food </span>
          <span className="text-[#ee1c25]"> Bloggers</span>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5 lg:mx-30 md:mx-20 sm:mx-10">
          {fachData.map((data) => (
            <TopFoodBloggers data={data}></TopFoodBloggers>
          ))}
        </div>
        <div className="bg-[#ffeded]"></div>
      </div>
      <div className="sm:mx-30 mx-5">
        <div className="text-center m-10 text-6xl pt-10">
          <span className="text-[#bf1e2e]">About </span>
          <span className="text-[#ee1c25]"> Us</span>
        </div>
        <div
          className={`flex items-center ${isDarkMode ? "bg-[#1a1a1a]" : "bg-[#ffeded]"} lg:p-10 p-5 rounded-3xl justify-center flex-col`}
        >
          <div>
            <About></About>
          </div>
          <div
            className={`lg:text-2xl md:text-xl sm:text-lg text-xs text-center p-5 ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}
          >
            <span>Local Food Lovers Network</span> is a community-driven
            platform designed for people who love exploring and sharing great
            food. Whether it’s a hidden street-food stall, a cozy restaurant, or
            a homemade dish, this platform connects food enthusiasts who want to
            discover local flavors and share honest experiences. Our mission is
            to bring together people through food — helping users post reviews
            with photos, explore dishes shared by others, and celebrate the
            diversity of local eateries. Every review, photo, and shared moment
            helps build a community where food lovers can inspire each other.
            This platform isn’t just about ratings — it’s about stories,
            experiences, and the joy of discovering something new right around
            the corner.
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
