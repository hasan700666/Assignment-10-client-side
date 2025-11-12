import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import MyReviewTable from "../Components/MyReviewTable";
import { AuthContext } from "../Context/AuthContext/AuthContext";

const MyReviews = () => {
  const { email } = useParams();
  const [data, setData] = useState([]);
  const { user } = use(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/privateFoodCollection?email=${email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        setData(d);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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
        {data.map((data) => (
          <MyReviewTable data={data}></MyReviewTable>
        ))}
      </table>
    </div>
  );
};

export default MyReviews;
