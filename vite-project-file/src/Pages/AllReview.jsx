import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { useLoaderData } from "react-router";
import Card from "../Components/Card";

const AllReview = () => {
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
      {data.map((data) => (
        <Card data={data}></Card>
      ))}
    </div>
  );
};

export default AllReview;
