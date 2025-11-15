import React, { use } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { NavLink } from "react-router";

const Card = ({ data }) => {
  const { user } = use(AuthContext);

  //console.log(data);
  //console.log(user);

  const hendleFavorites = () => {
    if (!user) {
      return toast.error("Please Log in");
    }

    const dock = {
      foodId: data._id,
      foodName: data.foodName,
      foodImage: data.foodImage,
      restaurantName: data.restaurantName,
      location: data.location,
      date: data.date,
      price: data.price,
      reviewText: data.reviewText,
      starRating: data.starRating,
      userName: data.userName,
    };

    console.log(dock);

    fetch(`https://foodloverserver.vercel.app/favoriteCollection`, {
      //id = 11
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify(dock),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        toast.success("Done");
      })
      .catch((e) => {
        //console.log(e);
      });
  };

  const hendleAbout = () => {};

  return (
    <div>
      <div>
        <Toaster></Toaster>
      </div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={data.foodImage} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{data.foodName}</h2>
          <p>{data.reviewText}</p>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={hendleFavorites}>
              Add to Favorites
            </button>
            <NavLink to={`/foodDetails/${data._id}`}>
              <button className="btn btn-primary">See All</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
