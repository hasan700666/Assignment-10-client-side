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
      fetch(`http://localhost:3000/searchPublicFoodCollection?search=${search}`)
        .then((res) => res.json())
        .then((data) => {
          //console.log(data);
          setData(data)
        })
        .catch((e) => {
          //console.log(e);
        });
    }else{
      setData(lodeData)
    }
  };

  return (
    <div>
      <div>
        <form>
          <label className="input">
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
        {data.map((data) => (
          <Card data={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllReview;
