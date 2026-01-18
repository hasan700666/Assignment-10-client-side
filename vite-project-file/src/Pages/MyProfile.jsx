import React, { use, useState } from "react";
import img from "../assets/images/logo.png";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { ThemeContext } from "../Context/ThemeContext/ThemeContext";
import toast, { Toaster } from "react-hot-toast";

const MyProfile = () => {
  const [loader, setLoader] = useState(false);

  const {
    SingUser,
    setUser,
    SingInByGoogle,
    user,
    UpdateUser,
    UpdateNamePhotos,
  } = use(AuthContext);
  const { isDarkMode } = use(ThemeContext);
  const [Update, setUpdate] = useState(false);

  const hendleUpdateProfile = () => {
    setUpdate(!Update);
  };

  const hendleSubmite = (e) => {
    setLoader(true);
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;

    UpdateUser(name, photo)
      .then((result) => {
        UpdateNamePhotos(name, photo);
        setLoader(false);
        toast.success("Done");
      })
      .catch((error) => {});
  };

  return (
    <div
      className={`min-h-screen py-10 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div>
        <Toaster />
      </div>
      <div className="max-w-6xl mx-auto px-4">
        {Update ? (
          <div>
            {loader ? (
              <div className="h-[100vh] flex justify-center items-center">
                <span className="loading loading-infinity size-20"></span>
              </div>
            ) : (
              <>
                <div className="hero min-h-screen">
                  <div className="hero-content flex-col lg:flex-row-reverse">
                    <div
                      className={`card w-full shrink-0 shadow-2xl ${isDarkMode ? "bg-[#1a1a1a]" : "bg-[#ffeded]"}`}
                    >
                      <div
                        className={`card-body ${isDarkMode ? "bg-[#1a1a1a]" : "bg-[#ffeded]"} rounded-4xl pb-15`}
                      >
                        <h1
                          className={`text-5xl font-bold m-10 ${isDarkMode ? "text-white" : "text-black"}`}
                        >
                          Update now!
                        </h1>
                        <form onSubmit={hendleSubmite}>
                          <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input
                              type="name"
                              className="input w-full"
                              placeholder="Enter your Name"
                              name="name"
                            />
                            <label className="label">Photo</label>
                            <input
                              type="text"
                              className="input w-full"
                              placeholder="Enter your photo-URL here"
                              name="photo"
                            />

                            <button className="button_css mt-5">Done</button>
                          </fieldset>
                        </form>
                        <button
                          className="button_css"
                          onClick={hendleUpdateProfile}
                        >
                          Go to My Profile page
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ) : (
          <>
            {/* Header Banner */}

            <div className="text-center text-6xl">
              <span className="text-[#bf1e2e]">My</span>
              <span className="text-[#ee1c25]"> Profile</span>
            </div>

            {/* Main Profile Card */}
            <div className="min-h-screen flex items-center justify-center p-6">
              <div
                className={`max-w-5xl w-full rounded-3xl shadow-2xl p-8 grid md:grid-cols-2 gap-8 ${isDarkMode ? "bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]" : "bg-gradient-to-br from-white to-[#ffeded]"}`}
              >
                {/* Left Side - Profile Photo & Basic Info */}
                <div className="flex flex-col items-center text-center justify-center">
                  {/* Profile Photo with Animation */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#bf1e2e] to-[#ee1c25] rounded-3xl blur-lg opacity-50 animate-pulse"></div>
                    <div className="relative w-72 h-72 rounded-3xl overflow-hidden border-4 border-[#bf1e2e] shadow-2xl">
                      <img
                        src={user?.photoURL}
                        alt="profile"
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* User Info */}
                  <div>
                    <h2
                      className={`text-3xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}
                    >
                      {user?.displayName}
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-2xl">✨</span>
                      <p className="text-[#ee1c25] text-sm font-medium">
                        Verified User
                      </p>
                      <span className="text-2xl">✨</span>
                    </div>
                    <p
                      className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {user?.email}
                    </p>
                  </div>
                </div>

                {/* Right Side - Bio & Details */}
                <div className="">
                  <h3
                    className={`text-2xl font-bold mb-6 pb-3 ${isDarkMode ? "border-gray-600 text-white" : "border-gray-300 text-gray-900"} border-b-2`}
                  >
                    📋 Profile Details
                  </h3>

                  {/* Profile Cards */}
                  <div className="space-y-4">
                    {/* Name Card */}
                    <div
                      className={`p-4 rounded-xl ${
                        isDarkMode ? "bg-gray-700" : "bg-white"
                      } border-l-4 border-[#bf1e2e] shadow-md hover:shadow-lg transition`}
                    >
                      <p
                        className={`text-xs font-semibold uppercase ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                      >
                        👤 Name
                      </p>
                      <p
                        className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}
                      >
                        {user?.displayName}
                      </p>
                    </div>

                    {/* Email Card */}
                    <div
                      className={`p-4 rounded-xl ${
                        isDarkMode ? "bg-gray-700" : "bg-white"
                      } border-l-4 border-[#ee1c25] shadow-md hover:shadow-lg transition`}
                    >
                      <p
                        className={`text-xs font-semibold uppercase ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                      >
                        📧 Email
                      </p>
                      <p
                        className={`text-lg font-semibold break-all ${isDarkMode ? "text-white" : "text-gray-900"}`}
                      >
                        {user?.email}
                      </p>
                    </div>

                    {/* Gender Card */}
                    <div
                      className={`p-4 rounded-xl ${
                        isDarkMode ? "bg-gray-700" : "bg-white"
                      } border-l-4 border-pink-500 shadow-md hover:shadow-lg transition`}
                    >
                      <p
                        className={`text-xs font-semibold uppercase ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                      >
                        👥 Gender
                      </p>
                      <p
                        className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}
                      >
                        Not specified
                      </p>
                    </div>

                    {/* Phone Card */}
                    <div
                      className={`p-4 rounded-xl ${
                        isDarkMode ? "bg-gray-700" : "bg-white"
                      } border-l-4 border-orange-500 shadow-md hover:shadow-lg transition`}
                    >
                      <p
                        className={`text-xs font-semibold uppercase ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                      >
                        📱 Phone
                      </p>
                      <p
                        className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}
                      >
                        Not provided
                      </p>
                    </div>

                    {/* Location Card */}
                    <div
                      className={`p-4 rounded-xl ${
                        isDarkMode ? "bg-gray-700" : "bg-white"
                      } border-l-4 border-green-500 shadow-md hover:shadow-lg transition`}
                    >
                      <p
                        className={`text-xs font-semibold uppercase ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                      >
                        📍 Location
                      </p>
                      <p
                        className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}
                      >
                        Moulvibazar, Bangladesh
                      </p>
                    </div>
                  </div>

                  {/* Update Button */}
                  <div className="mt-8 flex justify-center">
                    <button
                      onClick={hendleUpdateProfile}
                      className="px-8 py-3 bg-gradient-to-r from-[#bf1e2e] to-[#ee1c25] text-white font-bold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      ✏️ Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
