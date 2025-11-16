import React, { use, useState } from "react";
import img from "../assets/images/logo.png";
import { AuthContext } from "../Context/AuthContext/AuthContext";
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
    <div>
      <div>
        <Toaster />
      </div>
      <div>
        {Update ? (
          <div>
            {loader ? (
              <div className="h-[100vh] flex justify-center items-center">
                <span className="loading loading-infinity size-20"></span>
              </div>
            ) : (
              <>
                <div>
                  <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                      <div className="card w-full shrink-0 shadow-2xl bg-[#ffeded]">
                        <div className="card-body bg-[#ffeded] rounded-4xl pb-15">
                          <h1 className="text-5xl font-bold m-10">
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
                </div>
              </>
            )}
          </div>
        ) : (
          <>
            <div className="flex justify-center items-center">
              <div>
                <Toaster />
              </div>
              <div>
                <img src={img} alt="" className="xl:w-70 lg:w-50 hidden" />
              </div>
              <div>
                <div className="min-h-screen  flex items-center justify-center p-6 ">
                  <div className="max-w-5xl w-full  rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-8 bg-[#ffeded]">
                    {/* Left Side - Profile Info */}
                    <div className="flex flex-col items-center text-center justify-center">
                      <div className="w-70 rounded-4xl overflow-hidden border-10 border-[#df1e2e] mb-4">
                        <img
                          src={user?.photoURL}
                          alt="non"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h2 className="text-2xl font-semibold">
                        {user?.displayName}
                      </h2>
                      <p className="text-[#ee1c25] text-sm font-medium">
                        {user?.email}
                      </p>
                    </div>

                    {/* Right Side - Bio & Details */}
                    <div className="">
                      <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                        Bio & other details
                      </h3>

                      {/* Split into two parts */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3 text-sm">
                          <div>
                            <p className="text-gray-400">My Name</p>
                            <p>{user?.displayName}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">My Email</p>
                            <p>{user?.email}</p>
                          </div>

                          <div>
                            <p className="text-gray-400">Gender</p>
                            <p>non</p>
                          </div>
                        </div>
                        <div className="space-y-3 text-sm">
                          <div>
                            <p className="text-gray-400">Phone Number</p>
                            <p>non</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Password</p>
                            <p>***************</p>
                          </div>
                          <div>
                            <p className="text-gray-400">My City or Region</p>
                            <p>Moulvibazar, BD</p>
                          </div>
                        </div>
                      </div>
                      <div className="md:block flex justify-center items-center">
                        <button
                          onClick={hendleUpdateProfile}
                          className="button_css mt-20"
                        >
                          Update
                        </button>
                      </div>
                    </div>
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
