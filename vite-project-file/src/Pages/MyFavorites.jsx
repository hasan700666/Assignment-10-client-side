import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import MyFavoritesCard from "../Components/MyFavoritesCard";
import { AuthContext } from "../Context/AuthContext/AuthContext";

const MyFavorites = () => {
  const { user } = use(AuthContext);

  const [Data, setData] = useState([]);

  const { email } = useParams();

  //console.log(user);
  //console.log(email);

  useEffect(() => {
    fetch(
      `https://foodloverserver.vercel.app/favoriteCollection?email=${email}`,
      {
        //id = 12
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((feachData) => {
        console.log(feachData);
        setData(feachData);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  //console.log(Data);

  return (
    <div>
      {Data?.map((data) => (
        <MyFavoritesCard data={data} setData={setData}></MyFavoritesCard>
      ))}
    </div>
  );
};

export default MyFavorites;
