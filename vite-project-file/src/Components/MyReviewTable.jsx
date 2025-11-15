import React, { use, useEffect } from "react";
import Update from "../Pages/Update";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { FaStar } from "react-icons/fa6";

const MyReviewTable = ({ data, setData, index }) => {
  const navigate = useNavigate();

  const { user } = use(AuthContext);

  const hendleUpdate = () => {
    navigate(`/Update/${data._id}`);
  };

  const hendleDelete = () => {
    fetch(
      `https://foodloverserver.vercel.app/privateFoodCollection/${data._id}`,
      {
        //--> id = 9
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((d) => {
        //console.log(data);
        fetch(
          `https://foodloverserver.vercel.app/publicFoodCollection/${data.foodId}`,
          {
            //--> id = 10
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${user.accessToken}`,
            },
          }
        )
          .then((res) => res.json())
          .then((d) => {
            console.log(d);
            fetch(
              `https://foodloverserver.vercel.app/favoriteCollection?foodId=${data.foodId}`,
              {
                //--> id = 15
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                  authorization: `Bearer ${user.accessToken}`,
                },
              }
            )
              .then((res) => res.json())
              .then((d) => {
                console.log(d);
                fetch(
                  `https://foodloverserver.vercel.app/privateFoodCollection?email=${user.email}`, //--> id = 5
                  {
                    headers: {
                      authorization: `Bearer ${user.accessToken}`,
                    },
                  }
                )
                  .then((res) => res.json())
                  .then((d) => {
                    //console.log(d);
                    setData(d);
                  });
              })
              .catch((e) => console.log(e));
          })
          .catch((e) => console.log(e));
        toast.success("Done");
        //navigate(`/MyReviews/${data.userEmail}`);
      })
      .catch((e) => {
        //console.log(e);
      });
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={data.foodImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{data.foodName}</div>
          </div>
        </div>
      </td>
      <td>
        {data.restaurantName}
        <br />
        <span className="badge badge-ghost badge-sm">{data.location}</span>
      </td>
      <td>{data.price}</td>
      <th>
        <button className="">
          <p className="p-1 text-center  flex justify-center items-center">
            <FaStar /> {data.starRating}
          </p>
        </button>
      </th>
      <th>
        <button onClick={hendleUpdate} className="button_css mr-2">
          Update
        </button>
        <button onClick={hendleDelete} className="button_css ml-2">
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MyReviewTable;
