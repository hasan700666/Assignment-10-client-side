import React, { use } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext/AuthContext";

const Card = ({ data }) => {
  const { user } = use(AuthContext);

  //console.log(data);
  //console.log(user);

  const hendleFavorites = () => {
    const dock = {
      foodId: data._id,
      userEmail: user.email,
      foodName: data.foodName,
      foodImage: data.foodImage,
      restaurantName: data.restaurantName,
      location: data.location,
    };

    console.log(dock);

    fetch(`http://localhost:3000/favoriteCollection`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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

  return (
    <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
