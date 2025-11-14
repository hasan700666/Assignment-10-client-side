import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { useLoaderData } from "react-router";
import HomeCard from "../Components/HomeCard";

const Home = () => {
  const data = useLoaderData();

  //console.log(data);

  const { loader } = use(AuthContext);

  if (loader) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <span className="loading loading-infinity size-20"></span>
      </div>
    );
  }
  return (
    <div className="my-20">
      <div className="text-center m-10 text-6xl"><span className="text-[#bf1e2e]">Featured</span><span className="text-[#ee1c25]"> Reviews</span></div>
      <div>
        <div className="grid grid-cols-3 gap-5">
          {data.map((data) => (
            <HomeCard data={data}></HomeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
