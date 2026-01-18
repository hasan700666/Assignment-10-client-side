import React, { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { ThemeContext } from "../Context/ThemeContext/ThemeContext";
import toast, { Toaster } from "react-hot-toast";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router";
//import img from "../assets/images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const Login = () => {
  const { SingUser, SingInByGoogle } = use(AuthContext);
  const { isDarkMode } = use(ThemeContext);
  const [sow, setSow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const location = useLocation();

  //console.log(location);

  const hendleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email == false || password == false) {
      return toast.error("All fields are required");
    }

    SingUser(email, password)
      .then(() => {
        navigate(location.state || "/");
      })
      .catch(() => {
        toast.error("Error");
      });
  };

  const hendleSow = () => {
    setSow(!sow);
  };

  const hendleGoogleSingIn = () => {
    SingInByGoogle(provider)
      .then(() => {
        //console.log(result);
        navigate(location.state || "/");
      })
      .catch(() => {
        //console.log(error.message);
        toast.error("Error");
      });
  };

  // Demo credentials auto-fill
  const handleDemoLogin = () => {
    setEmail("user@example.com");
    setPassword("ExampleUser1234567");
    toast.success("Demo credentials loaded! Click Login to continue.");
  };

  return (
    <div className="flex justify-center items-center">
      <div>
        <Toaster />
      </div>
      <div className="m-10">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div
            className={`card w-full shrink-0 shadow-2xl bg_css ${isDarkMode ? "bg-[#2d2d2d]" : ""}`}
          >
            <div
              className={`card-body bg_css rounded_css pb-15 ${isDarkMode ? "bg-[#2d2d2d]" : ""}`}
            >
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <label className="label">Password</label>
                  <div className="flex items-center">
                    <input
                      type={sow ? "text" : "password"}
                      className="input rounded_css"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                  <button
                    type="button"
                    onClick={handleDemoLogin}
                    className="btn btn-outline mt-3 w-full border-[#bf1e2e] text-[#bf1e2e] hover:bg-[#bf1e2e] hover:border-[#bf1e2e] hover:text-white"
                  >
                    🔑 Use Demo Credentials
                  </button>
                  </div>
                  <button className="btn btn-neutral mt-4 button_css">
                    Login
                  </button>
                </fieldset>
              </form>
              <button
                className="btn btn-neutral google_btn"
                onClick={hendleGoogleSingIn}
              >
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
    </div>
  );
};

export default Login;
