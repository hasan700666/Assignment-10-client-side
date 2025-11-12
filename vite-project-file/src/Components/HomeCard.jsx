import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext/AuthContext";

const HomeCard = ({ data }) => {
  const { user } = use(AuthContext);

  console.log(data);
  console.log(data.foodId);

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
              <NavLink to={`/foodDetails/${data._id}`}>
                <button className="btn btn-primary">Details</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
