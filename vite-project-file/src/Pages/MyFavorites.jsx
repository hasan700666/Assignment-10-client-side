import React from "react";
import { useLoaderData } from "react-router";
import MyFavoritesCard from "../Components/MyFavoritesCard";

const MyFavorites = () => {
  const data = useLoaderData();

  //console.log(data);

  return (
    <div>
      {data.map((data) => (
        <MyFavoritesCard data={data}></MyFavoritesCard>
      ))}
    </div>
  );
};

export default MyFavorites;
