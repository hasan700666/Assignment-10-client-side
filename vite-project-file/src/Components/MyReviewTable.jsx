import React, { use } from "react";
import Update from "../Pages/Update";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext/AuthContext";

const MyReviewTable = ({ data, setData }) => {
  const navigate = useNavigate();

  console.log(data.foodId);

  const { user } = use(AuthContext);

  const hendleUpdate = () => {
    navigate(`/Update/${data._id}`);
  };

  const hendleDelete = () => {
    fetch(`http://localhost:3000/privateFoodCollection/${data._id}`, {
      //--> id = 9
      //--> id = 9
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((d) => {
        //console.log(data);
        fetch(`http://localhost:3000/publicFoodCollection/${data.foodId}`, {
          //--> id = 10
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }) //--> id = 10
          .then((res) => res.json())
          .then((d) => {
            console.log(d);
            fetch(`http://localhost:3000/favoriteCollection?foodId=${data.foodId}`,{
              method: "DELETE",
              headers:{
                "Content-Type": "application/json",
              }
            })
              .then((res) => res.json())
              .then((d) => {
                console.log(d);
                fetch(
                  `http://localhost:3000/privateFoodCollection?email=${user.email}`, //--> id = 5
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
                    //fetch("http://localhost:3000/publicFoodCollection/")
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
