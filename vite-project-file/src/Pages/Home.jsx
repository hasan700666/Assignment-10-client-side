import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import Card from "../Components/Card";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();

  console.log(data);

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
      {data.map((data)=><Card data={data}></Card>)}
    </div>
  );
};

export default Home;
