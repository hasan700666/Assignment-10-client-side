import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { useLoaderData } from "react-router";
import HomeCard from "../Components/HomeCard";

const Home = () => {
  const data = useLoaderData();

  //.log(data);

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
      {data.map((data) => <HomeCard data={data}></HomeCard>)}
    </div>
  );
};

export default Home;
