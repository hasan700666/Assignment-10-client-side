import React, { use } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { data, NavLink, useNavigate } from "react-router";
import img from "../assets/images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { GoogleAuthProvider } from "firebase/auth";

const AddReview = () => {
  const { user } = use(AuthContext);

  console.log(user);

  const hendleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo_url.value;
    const restaurant_name = e.target.restaurant_name.value;
    const location = e.target.location.value;
    const bio = e.target.bio.value;
    const ster = e.target.rating_10.value;

    if (
      name == false ||
      photo == false ||
      restaurant_name == false ||
      location == false ||
      bio == false ||
      ster == false
    ) {
      return toast.error("All fields are required");
    }

    const dock = {
      foodName: e.target.name.value,
      foodImage: e.target.photo_url.value,
      restaurantName: e.target.restaurant_name.value,
      location: e.target.location.value,
      reviewText: e.target.bio.value,
      starRating: e.target.rating_10.value,
      userEmail: user.email,
      userName: user.displayName,
      date: new Date(),
    };

    console.log(dock);

    fetch("http://localhost:3000/foodCollection", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dock),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div>
        <div>
          <Toaster />
        </div>
        <div className="flex justify-center items-center">
          <div>
            <img src={img} alt="" />
          </div>
          <div className="m-10">
            <div className="flex-col lg:flex-row-reverse ">
              <div className="card w-full shrink-0 shadow-2xl bg_css">
                <div className="card-body bg_css rounded_css pb-15">
                  <form onSubmit={hendleSubmit}>
                    {" "}
                    <fieldset className="fieldset">
                      <h1 className="text-5xl font-bold m-10 text-center">
                        Add Foods Now!
                      </h1>
                      <label className="label">Food Name</label>
                      <input
                        type="text"
                        className="input w-full rounded_css"
                        placeholder="Enter Your Food Name"
                        name="name"
                      />
                      <label className="label">Food Photo</label>
                      <input
                        type="file"
                        className="file-input rounded-2xl w-full"
                        name="photo"
                      />
                      <input
                        type="text"
                        className="input w-full rounded_css"
                        placeholder="Enter Your Restaurant Name"
                        name="photo_url"
                      />
                      <label className="label">Restaurant Name</label>
                      <input
                        type="text"
                        className="input w-full rounded_css"
                        placeholder="Enter Your Restaurant Name"
                        name="restaurant_name"
                      />
                      <label className="label">Location</label>
                      <input
                        type="text"
                        className="input w-full rounded_css"
                        placeholder="Enter The Location Of Restaurant"
                        name="location"
                      />
                      <label className="label">Review Text</label>
                      <textarea
                        className="textarea w-full h-32"
                        placeholder="Enter Your Review"
                        name="bio"
                      ></textarea>
                      <label className="label">Star Rating</label>
                      <div>
                        <div className="input rating rating-lg w-full">
                          <input
                            type="radio"
                            name="rating_10"
                            className="rating-hidden"
                            aria-label="clear"
                          />
                          <input
                            type="radio"
                            name="rating_10"
                            className="mask mask-star-2"
                            aria-label="1 star"
                            value="1"
                          />
                          <input
                            type="radio"
                            name="rating_10"
                            className="mask mask-star-2"
                            aria-label="2 star"
                            value="2"
                          />
                          <input
                            type="radio"
                            name="rating_10"
                            className="mask mask-star-2"
                            aria-label="3 star"
                            value="3"
                          />
                          <input
                            type="radio"
                            name="rating_10"
                            className="mask mask-star-2"
                            aria-label="4 star"
                            value="4"
                          />
                          <input
                            type="radio"
                            name="rating_10"
                            className="mask mask-star-2"
                            aria-label="5 star"
                            value="5"
                          />
                        </div>
                      </div>
                      <button className="btn btn-neutral mt-4 button_css">
                        Add Now
                      </button>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
