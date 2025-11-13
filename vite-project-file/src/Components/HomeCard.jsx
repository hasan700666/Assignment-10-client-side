import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext/AuthContext";

const HomeCard = ({ data }) => {
  const { user } = use(AuthContext);

  //console.log(data);
  //console.log(data.foodId);

  return (
    <div className="flex justify-center items-center"> 
      {/* <div>
        
      </div> */}
      <div className="card_des_css ">
        <h2>CARD</h2>
      </div>
    </div>
  );
};

export default HomeCard;
