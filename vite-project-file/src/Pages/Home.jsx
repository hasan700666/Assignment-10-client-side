import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { useLoaderData } from "react-router";
import HomeCard from "../Components/HomeCard";
import SwiperComponent from "../Components/SwiperComponent";
import TopFoodBloggers from "../Components/topFoodBloggers";

const Home = () => {
  const data = useLoaderData();

  const [fachData, setData] = useState([]);

  const { loader } = use(AuthContext);

  useEffect(() => {
    const fachData = async () => {
      const fachData = await fetch("http://localhost:3000/topFoodBloggers");
      const res = await fachData.json();
      console.log(res);

      setData(res);
    };
    fachData();
  }, []);

  console.log(fachData);

  if (loader) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <span className="loading loading-infinity size-20"></span>
      </div>
    );
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
            <div className="grid grid-cols-3 gap-5">
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
        <div className="flex justify-center items-center mx-30">
          {fachData.map((data) => (
            <TopFoodBloggers data={data}></TopFoodBloggers>
          ))}
        </div>
        <div className="bg-[#ffeded]"></div>
      </div>
      <div className="mx-30">
        <div className="text-center m-10 text-6xl pt-10">
          <span className="text-[#bf1e2e]">About </span>
          <span className="text-[#ee1c25]"> Us</span>
        </div>
        <div className="text-2xl text-center bg-[#ffeded] p-10 rounded-3xl">
          <span>Local Food Lovers Network</span> is a community-driven platform
          designed for people who love exploring and sharing great food. Whether
          it’s a hidden street-food stall, a cozy restaurant, or a homemade
          dish, this platform connects food enthusiasts who want to discover
          local flavors and share honest experiences. Our mission is to bring
          together people through food — helping users post reviews with photos,
          explore dishes shared by others, and celebrate the diversity of local
          eateries. Every review, photo, and shared moment helps build a
          community where food lovers can inspire each other. This platform
          isn’t just about ratings — it’s about stories, experiences, and the
          joy of discovering something new right around the corner.
        </div>
      </div>
    </div>
  );
};

export default Home;
