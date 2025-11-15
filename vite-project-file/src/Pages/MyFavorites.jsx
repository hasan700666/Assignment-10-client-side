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
      <div className="text-center m-10 text-6xl pt-10">
        <span className="text-[#bf1e2e]">My Favorites </span>
        <span className="text-[#ee1c25]"> Collection</span>
      </div>
      <div>
        {Data.length ? (
          <div className="grid grid-cols-4 gap-5 mb-10">
            {Data?.map((data) => (
              <MyFavoritesCard data={data} setData={setData}></MyFavoritesCard>
            ))}
          </div>
        ) : (
          <div className="text-center min-h-screen flex justify-center items-center text-4xl">
            Nothing!
          </div>
        )}
      </div>
    </div>
  );
};

export default MyFavorites;
