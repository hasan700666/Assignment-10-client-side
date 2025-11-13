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
    <div>
      <div className="text-center m-10">Featured Reviews</div>
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
