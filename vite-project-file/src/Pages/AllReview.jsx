import React, { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { useLoaderData } from "react-router";
import Card from "../Components/Card";

const AllReview = () => {
  const lodeData = useLoaderData();

  const [data, setData] = useState(lodeData);

  //console.log(data);

  const { loader } = use(AuthContext);

  if (loader) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <span className="loading loading-infinity size-20"></span>
      </div>
    );
  }

  const hendleSearch = (e) => {
    const search = e.target.value;

    //console.log(search);

    if (search) {
      fetch(
        `https://foodloverserver.vercel.app/searchPublicFoodCollection?search=${search}` //--> id = 17
      ) //--> id = 17
        .then((res) => res.json())
        .then((data) => {
          //console.log(data);
          setData(data);
        })
        .catch((e) => {
          //console.log(e);
        });
    } else {
      setData(lodeData);
    }
  };

  console.log(data);
  

  return (
    <div>
      <div className="text-center m-10 text-6xl pt-10">
        <span className="text-[#bf1e2e]">Our All Food</span>
        <span className="text-[#ee1c25]"> Reviews</span>
      </div>
      <div className="flex justify-center items-center">
        <form className="">
          <label className="input border-2 border-[#bf1e2e]">
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
      <div>
        {data.length ? (
          <div className="grid grid-cols-4 gap-5 my-10">
            {data.map((data) => (
              <Card data={data}></Card>
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

export default AllReview;
