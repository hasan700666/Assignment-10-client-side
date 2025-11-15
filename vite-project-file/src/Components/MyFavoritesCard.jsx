import React, { use } from "react";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext/AuthContext";

const MyFavoritesCard = ({ data, setData }) => {
  const navigate = useNavigate();

  const { user } = use(AuthContext);

  // console.log(data);

  //console.log(data.userEmail);
  //console.log("heoool");

  const hendleDelete = () => {
    //console.log("hasan");

    fetch(`http://localhost:3000/favoriteCollection/${data._id}`, {  //--> id = 13 
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.accessToken}`
      },
    })
      .then((res) => res.json())
      .then((d) => {
        //console.log(d);
        fetch(`http://localhost:3000/favoriteCollection?email=${user.email}`, {  //--> id = 12
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        })
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
      <div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img src={data.foodImage} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{data.foodName}</h2>
            <p>{data.reviewText}</p>
            <div className="card-actions">
              <button className="btn btn-primary" onClick={hendleDelete}>
                Delete to Favorites
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFavoritesCard;
