import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { useParams } from "react-router";

const FoodDetails = () => {
  const { id } = useParams();
  const [Data, setData] = useState("");
  const [showLoader, setShowLoader] = useState(true);

  const { loader, user } = use(AuthContext);

  //console.log(user.accessToken);

  useEffect(() => {
    fetch(`https://foodloverserver.vercel.app/publicFoodCollection/${id}`, {
      //--> id = 16
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data)
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

  if (showLoader) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <span className="loading loading-infinity size-20"></span>
      </div>
    );
  }
  return (
    <div>
      {Data.foodName}
      <div>
        <img src={Data.foodImage} alt="" />
      </div>
    </div>
  );
};

export default FoodDetails;
