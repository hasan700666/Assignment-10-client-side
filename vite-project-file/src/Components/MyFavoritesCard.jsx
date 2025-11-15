import React, { use } from "react";
import { NavLink, useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { FaStar } from "react-icons/fa";

const MyFavoritesCard = ({ data, setData }) => {
  const navigate = useNavigate();

  const { user } = use(AuthContext);

  // console.log(data);

  //console.log(data.userEmail);
  //console.log("heoool");

  const hendleDelete = () => {
    fetch(`https://foodloverserver.vercel.app/favoriteCollection/${data._id}`, {
      //--> id = 13
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((d) => {
        //console.log(d);
        fetch(
          `https://foodloverserver.vercel.app/favoriteCollection?email=${user.email}`,
          {
            //--> id = 12
            headers: {
              authorization: `Bearer ${user.accessToken}`,
            },
          }
        )
          .then((res) => res.json())
          .then((feachData) => {
            //console.log(feachData);
            setData(feachData);
          });
        toast.success("Done");
        //navigate(`/MyFavorites/${data.userEmail}`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div>
        <Toaster></Toaster>
      </div>
      <div className="flex justify-center items-center">
        <div className="card_des_css w-[400px] h-[620px]">
          <div className="flex items-center flex-col ">
            <figure className="m-5 ">
              <img
                src={data.foodImage}
                alt="img"
                className="rounded-xl w-[350px] h-[220px] border-8 border-[#ffeded] object-cover"
              />
            </figure>
            <div className="bg-[#ffeded] mx-10 rounded-xl w-[350px] mb-5 border-8 border-[#ffeded]">
              <h2 className="text-center text-3xl text-[#ee1c25] m-3">
                {data.foodName}
              </h2>
              <div className=" mx-3 rounded-2xl">
                <p className="p-1 py-2 rounded-2xl bg-white">
                  <div className="text-center py-2">
                    <samp className="text-[#bf1e2e]">Restaurant</samp>
                    <samp className="text-[#ee1c25]"> Name</samp>
                  </div>
                  <div className="text-center">{data.restaurantName}</div>
                  <div className="text-center text-xs">{data.location}</div>
                </p>
                <div className="my-2 bg-white rounded-2xl py-2">
                  <p className="p-1 text-center text-2xl text-[#bf1e2e]">
                    {data.userName}
                  </p>
                  <div className="bg-[#bf1e2e] rounded-2xl mx-30 ">
                    <p className="p-1 text-center text-white flex justify-center items-center">
                      <FaStar /> {data.starRating}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <NavLink to={`/foodDetails/${data._id}`}>
                  <button className="button_css mr-2">Details</button>
                </NavLink>
                <button onClick={hendleDelete} className="button_css ml-2">
                  Unfavorite{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MyFavoritesCard;
