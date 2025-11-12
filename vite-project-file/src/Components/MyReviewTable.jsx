import React from "react";
import Update from "../Pages/Update";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";

const MyReviewTable = ({ data }) => {
  const navigate = useNavigate();

  //console.log(data);

  const hendleUpdate = () => {
    navigate(`/Update/${data._id}`);
  };

  const hendleDelete = () => {
    fetch(`http://localhost:3000/foodCollection/${data._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        toast.success("Done");
        navigate(`/MyReviews/${data.userEmail}`);
      })
      .catch((e) => {
        //console.log(e);
      });
  };

  return (
    <div>
      <tr>
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
        </td>
        <td>{data.date}</td>
        <th>
          <button className="btn btn-ghost btn-xs" onClick={hendleUpdate}>
            update
          </button>
          <button className="btn btn-ghost btn-xs" onClick={hendleDelete}>
            delete
          </button>
        </th>
      </tr>
    </div>
  );
};

export default MyReviewTable;
