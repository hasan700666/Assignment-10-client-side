import React, { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { ThemeContext } from "../Context/ThemeContext/ThemeContext";
import { useLoaderData } from "react-router";
import Card from "../Components/Card";
import Loader from "../Components/Loader";

const AllReview = () => {
  const lodeData = useLoaderData();

  const [loader2, setLoader2] = useState(false);

  const [data, setData] = useState(lodeData);

  //console.log(data);

  const { loader } = use(AuthContext);
  const { isDarkMode } = use(ThemeContext);

  if (loader && !lodeData && loader2) {
    return <Loader />;
  }

  const hendleSearch = (e) => {
    setLoader2(true);
    const search = e.target.value;

    if (search) {
      fetch(
        `https://foodloverserver.vercel.app/searchPublicFoodCollection?search=${search}`, //--> id = 17
      ) //--> id = 17
        .then((res) => res.json())
        .then((data) => {
          //console.log(data);
          setData(data);
          setLoader2(false);
        })
        .catch((e) => {
          //console.log(e);
        });
    } else {
      setData(lodeData);
      setLoader2(false);
    }
  };

  return (
    <div>
      <div className="text-center mx-10 mb-10 text-6xl pt-10">
        <span className="text-[#bf1e2e]">Our All Food</span>
        <span className="text-[#ee1c25]"> Reviews</span>
      </div>
      <div className="flex justify-center items-center">
        <form className="">
          <label
            className={`input border-2 border-[#bf1e2e] ${isDarkMode ? "bg-[#2d2d2d] text-white" : "bg-white"}`}
          >
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search"
              name="search"
              onChange={hendleSearch}
            />
          </label>
        </form>
      </div>
      {loader2 ? (
        <div className="h-[100vh] flex justify-center items-center">
          <span className="loading loading-infinity size-20"></span>
        </div>
      ) : (
        <div>
          {data.length ? (
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5 my-10">
              {data.map((data) => (
                <Card data={data} setLoader2={setLoader2}></Card>
              ))}
            </div>
          ) : (
            <div className="text-center min-h-screen flex justify-center items-center text-4xl">
              Nothing!
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AllReview;
