import React, { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { NavLink } from "react-router";
import img from "../assets/images/logo.png";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { SingUser,MonitoringUser } = use(AuthContext);
  const [sow, setSow] = useState(false);

  const notify = () => toast("Here is your toast.");

  const hendleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email,password);
    

    SingUser(email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        MonitoringUser()
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const hendleSow = () => {
    setSow(!sow);
  };

  return (
    <div className="flex justify-center items-center">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="m-10">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="card w-full shrink-0 shadow-2xl bg_css">
            <div className="card-body bg_css rounded_css pb-15">
              <form onSubmit={hendleSubmit}>
                {" "}
                <fieldset className="fieldset">
                  <h1 className="text-5xl font-bold m-10 text-center">
                    Login now!
                  </h1>
                  <label className="label ">Email</label>
                  <input
                    type="email"
                    className="input w-full rounded_css"
                    placeholder="Email"
                    name="email"
                  />

                  <label className="label">Password</label>
                  <div className="flex items-center">
                    <input
                      type={sow ? "text" : "password"}
                      className="input rounded_css"
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
                  <div>
                    <a
                      className="link link-hover"
                      // onClick={hendleForgotPassword}
                      type="button"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button className="btn btn-neutral mt-4 button_css">
                    Login
                  </button>
                </fieldset>
              </form>
              <button className="btn btn-neutral google_btn">
                <FcGoogle />
                Login with Google
              </button>
              <div className="flex justify-center items-center flex-col mt-5">
                Don't have an account?{" "}
                <NavLink to="/SingUp">
                  <div className="button_css text-[] font-bold mt-3">
                    Sing up
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

export default Login;

{
  /* <div>
  <div className="flex justify-center items-center gap-0">
    <div>
      <Toaster />
    </div>
    <div>
      <img src={img} alt="" className="lg:w-70 md:w-50 hidden" />
    </div>
    <div className="m-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card w-full shrink-0 shadow-2xl bg-[#f8f8ec]">
          <div className="card-body bg-[#f8f8ec] rounded-4xl pb-15">
            <form onSubmit={hendleSubmit}>
              {" "}
              <fieldset className="fieldset">
                <h1 className="text-5xl font-bold m-10 text-center">
                  Login now!
                </h1>
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                  name="email"
                />

                <label className="label">Password</label>
                <div className="flex items-center">
                  <input
                    type={sow ? "text" : "password"}
                    className="input"
                    placeholder="Password"
                    name="password"
                  />
                  <button className="btn" type="button" onClick={hendleSow}>
                    {sow ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div>
                  <a
                    className="link link-hover"
                    // onClick={hendleForgotPassword}
                    type="button"
                  >
                    Forgot password?
                  </a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
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
              Don't have an account?{" "}
              <NavLink to="/SingUp">
                <samp className="text-blue-500 font-bold underline">
                  Sing up
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
</div>; */
}
