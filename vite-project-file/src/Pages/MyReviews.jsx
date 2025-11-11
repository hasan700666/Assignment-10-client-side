import React from "react";
import { useLoaderData } from "react-router";
import MyReviewTable from "../Components/MyReviewTable";

const MyReviews = () => {
  const data = useLoaderData();

  console.log(data);

  return (
    <div className="">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        {data.map((data)=><MyReviewTable data={data}></MyReviewTable>)}
      </table>
    </div>
  );
};

export default MyReviews;
