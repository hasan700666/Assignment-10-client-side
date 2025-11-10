import React, { use, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { NavLink } from "react-router";
import img from "../assets/images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Context/AuthContext/AuthContext";

const Register = () => {
  const { CreateUser,MonitoringUser } = use(AuthContext);

  const [sow, setSow] = useState(false);

  const notify = () => toast("Here is your toast.");

  const hendleSow = () => {
    setSow(!sow);
  };

  const hendleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const Photo_URL = e.target.photo.value;

    CreateUser(email, password)
      .then((userCredential) => {
        // Signed up
        console.log(userCredential);
        MonitoringUser()
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
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
                    Register now!
                  </h1>
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input w-full rounded_css"
                    placeholder="Name"
                    name="name"
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input w-full rounded_css"
                    placeholder="Email"
                    name="email"
                  />
                  <label className="label">Photo-URL</label>
                  <input
                    type=""
                    className="input w-full rounded_css"
                    placeholder="Photo-URL"
                    name="photo"
                  />
                  <label className="label">Password</label>

                  <div className="flex justify-between">
                    <input
                      type={sow ? "text" : "password"}
                      className="input w-full rounded_css"
                      placeholder="Password"
                      name="password"
                    />
                    <button
                      className="button_css rounded_css"
                      type="button"
                      onClick={hendleSow}
                    >
                      {sow ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <button className="btn btn-neutral mt-4 button_css">
                    Register
                  </button>
                </fieldset>
              </form>
              <button className="btn btn-neutral google_btn">
                <FcGoogle />
                Login with Google
              </button>
              <div className="flex justify-center items-center flex-col mt-5">
                Already have an account?{" "}
                <NavLink to="/LogIn">
                  <div className="button_css text-[] font-bold mt-3">
                    Log in
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Register;

{
  /**
    <div>
      <div className="flex justify-center items-center">
        <div>
          <Toaster />
        </div>
        <div>
          <div>
            <img src={img} alt="" className="lg:w-70 md:w-50 hidden" />
          </div>
        </div>
        <div className="m-10">
          <div className="flex-col lg:flex-row-reverse">
            <div className="card w-full shrink-0 shadow-2xl bg-[#f8f8ec]">
              <div className="card-body bg-[#f8f8ec] rounded-4xl pb-15">
                <form onSubmit={hendleSubmit}>
                  {" "}
                  <fieldset className="fieldset">
                    <h1 className="text-5xl font-bold m-10 text-center">
                      Register now!
                    </h1>
                    <label className="label">Name</label>
                    <input
                      type="text"
                      className="input w-full"
                      placeholder="Name"
                      name="name"
                    />
                    <label className="label">Email</label>
                    <input
                      type="email"
                      className="input w-full"
                      placeholder="Email"
                      name="email"
                    />
                    <label className="label">Photo-URL</label>
                    <input
                      type=""
                      className="input w-full"
                      placeholder="Photo-URL"
                      name="photo"
                    />
                    <label className="label">Password</label>

                    <div className="flex justify-between">
                      <input
                        type={sow ? "text" : "password"}
                        className="input w-full"
                        placeholder="Password"
                        name="password"
                      />
                      <button className="btn" type="button" onClick={hendleSow}>
                        {sow ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    <button className="btn btn-neutral mt-4">Register</button>
                  </fieldset>
                </form>
                <button
                  className="btn bg-white text-black border-[#e5e5e5]"
                  // onClick={hendleGoogleProvider}
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
                <div>
                  Already have an account?{" "}
                  <NavLink to="/LogIn">
                    <samp className="text-blue-500 font-bold underline">
                      Log in
                    </samp>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={img} alt="" className="lg:w-70 md:w-50 hidden" />
      </div>
    </div> */
}
