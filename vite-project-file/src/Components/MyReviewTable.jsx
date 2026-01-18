import React, { use, useEffect } from "react";
import Update from "../Pages/Update";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { ThemeContext } from "../Context/ThemeContext/ThemeContext";
import { FaStar } from "react-icons/fa6";

const MyReviewTable = ({ data, setData, index, setLoader }) => {
  const navigate = useNavigate();

  const { user } = use(AuthContext);
  const { isDarkMode } = use(ThemeContext);

  const hendleUpdate = () => {
    navigate(`/Update/${data._id}`);
  };

  const hendleDelete = () => {
    setLoader(true);
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
            //console.log(d);
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
                //console.log(d);
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
                    setLoader(false);
                    setData(d);
                  });
              })
              .catch((e) => {
                //console.log(e)
              });
          })
          .catch((e) => {
            //console.log(e)
          });
      })
      .catch((e) => {});
  };

  const formatDate = (isoString) => {
    const d = new Date(isoString);

    return d.toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
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
      <th>{formatDate(data.date)}</th>
      <th>
        <button onClick={hendleUpdate} className="button_css sm:mr-2 mr-0 my-1">
          Update
        </button>
        <button className="button_css sm:ml-2 ml-0 my-1" onClick={() => document.getElementById("my_modal_1").showModal()}>Delete</button>
      </th>
      <div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Are you Shore You Want To Delete this?
            </p>
            <div className="modal-action">
              <form method="dialog">
                <button className="button_css mr-2" onClick={hendleDelete}>Delete</button>
                <button className="button_css ml-2">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </tr>
  );
};

export default MyReviewTable;
