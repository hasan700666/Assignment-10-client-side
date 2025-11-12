import React from "react";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";

const MyFavoritesCard = ({ data }) => {
  const navigate = useNavigate();

  //console.log(data);
  

  console.log(data.userEmail);
  //console.log("heoool");

  const hendleDelete = () => {
    //console.log("hasan");

    fetch(`http://localhost:3000/favoriteCollection/${data._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((d) => {
        //console.log(d);
        toast.success("Done");
        navigate(`/MyFavorites/${data.userEmail}`);
      })
      .catch((e) => {
        //console.log(e);
      });
  };

  return (
    <div>
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
