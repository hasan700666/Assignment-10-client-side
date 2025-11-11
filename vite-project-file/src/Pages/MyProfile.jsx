import React, { use, useState } from "react";
import img from "../assets/images/logo.png";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const MyProfile = () => {
  const {
    SingUser,
    setUser,
    SingInByGoogle,
    user,
    UpdateUser,
    UpdateNamePhotos,
  } = use(AuthContext);
  const [Update, setUpdate] = useState(false);

  const notify = () => toast("Here is your toast.");

  const hendleUpdateProfile = () => {
    setUpdate(!Update);
  };

  const hendleSubmite = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;

    UpdateUser(name, photo)
      .then((result) => {
        // Profile updated!
        //console.log(result);
        UpdateNamePhotos(name, photo);
        notify();
      })
      .catch((error) => {
        // An error occurred
        // ...
        //console.log(error.message);
      });
  };

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <div>
        {Update ? (
          <>
            <div>
              <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="card w-full shrink-0 shadow-2xl bg-[#f8f8ec]">
                    <div className="card-body bg-[#f8f8ec] rounded-4xl pb-15">
                      <h1 className="text-5xl font-bold m-10">Update now!</h1>
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

                          <button className="btn btn-neutral mt-4">Done</button>
                        </fieldset>
                      </form>
                      <button
                        className="btn bg-[#176b39] hover:bg-[#4ec06e] hover:text-[#f8f8ec] text-[#f8f8ec] text-center my-5"
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
                  <div className="max-w-5xl w-full  rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-8 bg-[#f8f8ec]">
                    {/* Left Side - Profile Info */}
                    <div className="flex flex-col items-center text-center justify-center">
                      <div className="w-70 rounded-4xl overflow-hidden border-10 border-[#176b39] mb-4">
                        <img
                          src={user?.photoURL}
                          alt="non"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h2 className="text-2xl font-semibold">
                        {user?.displayName}
                      </h2>
                      <p className="text-[#4ec06e] text-sm font-medium">
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
                        {/* Left Column */}
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

                        {/* Right Column */}
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
                          className="btn bg-[#176b39] hover:bg-[#4ec06e] hover:text-[#f8f8ec] text-[#f8f8ec] text-center m-auto px-10 md:mt-20 mt-5"
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
      <div>
        <img src={img} alt="" className="xl:w-70 lg:w-50 hidden" />
      </div>
    </div>
  );
};

export default MyProfile;

{
  /**
   */
}
