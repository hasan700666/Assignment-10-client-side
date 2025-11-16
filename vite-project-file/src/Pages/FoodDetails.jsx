import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { useParams } from "react-router";

const FoodDetails = () => {
  const { id } = useParams();
  const [Data, setData] = useState("");
  const [showLoader, setShowLoader] = useState(true);

  const { loader, user } = use(AuthContext);

  console.log(user.accessToken);

  useEffect(() => {
    fetch(`https://foodloverserver.vercel.app/publicFoodCollection/${id}`, {
      //--> id = 16
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setShowLoader(false);
      })
      .catch((e) => console.log(e));
  }, []);

  if (loader) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <span className="loading loading-infinity size-20"></span>
      </div>
    );
  }

  const formatDate = (isoString) => {
    const d = new Date(isoString);

    return d.toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  if (showLoader) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <span className="loading loading-infinity size-20"></span>
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-center items-center">
        <div>
          <div className="min-h-screen flex items-center justify-center p-6 ">
            <div className="w-[80vw] rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-8 bg-[#ffeded]">
              <div className="flex flex-col items-center text-center justify-center">
                <div className="2xl:w-150 xl:w-100 lg:w-80 rounded-4xl overflow-hidden border-10 border-[#df1e2e] mb-4">
                  <img
                    src={Data.foodImage}
                    alt="non"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-semibold">{Data.foodName}</h2>
                <p className="text-[#ee1c25] text-sm font-medium">
                  {Data.restaurantName}, {Data.location}
                </p>
              </div>
              <div className="">
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                  Reviewer Name & other details
                </h3>
                <div className="space-y-5 md:text-left text-center">
                  <div className="md:text-left text-center">
                    <p className="text-gray-400">Reviewer Name</p>
                    <p>{Data.userName}</p>
                  </div>
                  <div className="md:text-left text-center">
                    <p className="text-gray-400">Rating</p>
                    <p>{Data.starRating}</p>
                  </div>
                  <div className="md:block flex justify-center items-center">
                    <div className="md:text-left text-center xl:w-100 lg:w-80 w-60 h-50">
                    <p className="text-gray-400">Comment</p>
                    <p className="md:text-left text-center break-words">
                      {Data.reviewText}
                    </p>
                  </div>
                  </div>
                  <div className="md:text-left text-center">
                    <p className="text-gray-400">Date</p>
                    <p>{formatDate(Data.date)}</p>
                  </div>
                  <div className="md:text-left text-center">
                    <p className="text-gray-400">Restaurant Name</p>
                    <p>{Data.restaurantName}</p>
                  </div>
                  <div className="md:text-left text-center">
                    <p className="text-gray-400">Location</p>
                    <p>{Data.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
