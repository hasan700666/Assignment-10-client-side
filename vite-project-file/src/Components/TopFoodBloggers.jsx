import React from "react";

const TopFoodBloggers = ({ data }) => {
  //console.log(data);

  return (
    <div className="m-10 flex justify-center items-center flex-col bg-[#ffeded] rounded-3xl p-10">
      <div className="">
        <img src={data.img} alt="img" className="rounded-full" />
      </div>
      <div className="text-center text-[#ee1c25] text-2xl mt-2">
        {data.name}
      </div>
      <div className="text-center text-[#bf1e2e] text-xs">
        {data.experience}
      </div>
      <div className="text-center mt-5">" {data.comment} "</div>
    </div>
  );
};

export default TopFoodBloggers;
