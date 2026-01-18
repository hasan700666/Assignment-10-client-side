import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import MyFavoritesCard from "../Components/MyFavoritesCard";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { ThemeContext } from "../Context/ThemeContext/ThemeContext";

const MyFavorites = () => {
  const { user } = use(AuthContext);
  const { isDarkMode } = use(ThemeContext);

  const [Data, setData] = useState([]);

  const [loader,setLoader] = useState(true)

  const { email } = useParams();


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
        //console.log(feachData);
        setData(feachData);
        setLoader(false)
      })
      .catch((e) => {
        //console.log(e);
      });
  }, []);

  if (loader) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <span className="loading loading-infinity size-20"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center m-10 text-6xl pt-10">
        <span className="text-[#bf1e2e]">My Favorites </span>
        <span className="text-[#ee1c25]"> Collection</span>
      </div>
      <div>
        {Data.length ? (
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5 mb-10">
            {Data?.map((data) => (
              <MyFavoritesCard data={data} setData={setData} setLoader={setLoader}></MyFavoritesCard>
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
