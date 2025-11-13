import React, { use, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router";
import img from "../assets/images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const Register = () => {
  const {
    CreateUser,
    setUser,
    SingInByGoogle,
    UpdateUser,
    user,
    UpdateNamePhotos,
  } = use(AuthContext);

  const [sow, setSow] = useState(false);
  const [sowConferm, setSowConferm] = useState(false);

  const navigate = useNavigate();

  const hendleSow = () => {
    setSow(!sow);
  };

  const hendleSowConferm = () => {
    setSowConferm(!sowConferm);
  };

  const hendleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const Photo_URL = e.target.photo.value;
    const password = e.target.password.value;
    const ConfirmPassword = e.target.confirm_password.value;

    //console.log("i am in");

    if (
      name == false ||
      email == false ||
      Photo_URL == false ||
      password == false
    ) {
      return toast.error("All fields are required");
    }

    if (password !== ConfirmPassword) {
      return toast.error("Password and Confirm Password do not match");
    }

    const ChackUpperCase = /[A-Z]/;
    const ChackLowerCase = /[a-z]/;
    const ChackEigthChracter = /^.{6,}$/;

    //up --> true lw --> true 8 --> false   //up --> true lw -->false 8 -->true //up -->true 8,lw-->false
    //lw --> true up -->false 8 --> true ////lw -->true up -->true 8 -->false //lw--> 8,up-->false
    //8 --> true lw,up-->false

    if (!ChackUpperCase.test(password)) {
      toast.error("Password Must Have a Upper case");
      if (!ChackLowerCase.test(password)) {
        toast.error("Password Must Have a Lower case");
        if (!ChackEigthChracter.test(password)) {
          toast.error("Password Must Have a 6 character");
          return;
        } else {
          return;
        }
      } else {
        if (!ChackEigthChracter.test(password)) {
          toast.error("Password Must Have a 6 character");
          return;
        } else {
          return;
        }
      }
    } else {
      if (!ChackLowerCase.test(password)) {
        toast.error("Password Must Have a Lower case");
        if (!ChackEigthChracter.test(password)) {
          toast.error("Password Must Have a 6 character");
          return;
        } else {
          return;
        }
      }
      if (!ChackEigthChracter.test(password)) {
        toast.error("Password Must Have a 6 character");
        return;
      }
    }

    //  else if (!ChackEigthChracter.test(password)) {
    //   toast.error("Password Must Have a 6 character");
    //   return;
    // }

    CreateUser(email, password)
      .then((userCredential) => {
        // Signed up
        //console.log(userCredential);
        UpdateUser(name, Photo_URL)
          .then((res) => {
            // Profile updated!
            UpdateNamePhotos(name, Photo_URL);
            navigate("/");
          })
          .catch((error) => {
            // An error occurred
            //console.log(error);
            navigate("/");
          });
        navigate("/");
      })
      .catch((error) => {
        //console.log(errorMessage);
        toast.error("Error");
      });
  };

  const hendleGoogleSingIn = () => {
    SingInByGoogle(provider)
      .then((result) => {
        //console.log(result);
        navigate("/");
      })
      .catch((error) => {
        //console.log(error.message);
        toast.error("Error on google sing in");
      });
  };

  return (
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
                      Register now!
                    </h1>
                    <label className="label">Name</label>
                    <input
                      type="text"
                      className="input w-full rounded_css"
                      placeholder="Enter Your Name"
                      name="name"
                    />
                    <label className="label">Email</label>
                    <input
                      type="email"
                      className="input w-full rounded_css"
                      placeholder="Enter Your Email"
                      name="email"
                    />
                    <label className="label">Photo-URL</label>
                    <input
                      type=""
                      className="input w-full rounded_css"
                      placeholder="Enter Your Photo-URL"
                      name="photo"
                    />
                    <label className="label">Password</label>

                    <div className="flex justify-between">
                      <input
                        type={sow ? "text" : "password"}
                        className="input w-full rounded_css"
                        placeholder="Enter Your Password"
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
                    <label className="label">Confirm Password</label>

                    <div className="flex justify-between">
                      <input
                        type={sowConferm ? "text" : "password"}
                        className="input w-full rounded_css"
                        placeholder="Enter Your Confirm Password"
                        name="confirm_password"
                      />
                      <button
                        className="button_css rounded_css"
                        type="button"
                        onClick={hendleSowConferm}
                      >
                        {sowConferm ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    <button className="btn btn-neutral mt-4 button_css">
                      Register
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
    </div>
  );
};

export default Register;
