import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import MyReviewTable from "../Components/MyReviewTable";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { ThemeContext } from "../Context/ThemeContext/ThemeContext";

const MyReviews = () => {
  const { email } = useParams();
  const [data, setData] = useState([]);
  const { user } = use(AuthContext);
  const { isDarkMode } = use(ThemeContext);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(
      `https://foodloverserver.vercel.app/privateFoodCollection?email=${email}`,
      {
        //--> id = 5
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      },
    )
      .then((res) => res.json())
      .then((d) => {
        //console.log(d);
        setData(d);
        setLoader(false);
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
        <span className="text-[#bf1e2e]">My </span>
        <span className="text-[#ee1c25]"> Review</span>
      </div>
      {data.length ? (
        <div className="">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Food Name</th>
                  <th>Restaurant Name</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Date</th>
                  <th className="w-80">Update Or Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <MyReviewTable
                    data={item}
                    index={index}
                    setData={setData}
                    setLoader={setLoader}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="text-center min-h-screen flex justify-center items-center text-4xl">
          Nothing!
        </div>
      )}
    </div>
  );
};

export default MyReviews;
