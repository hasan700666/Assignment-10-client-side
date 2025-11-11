import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  //console.log(location);

  const { user, loader } = use(AuthContext);

  //console.log(loader);

  if (loader) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <span className="loading loading-infinity size-20"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return (
    <div>
      <Navigate state={location.pathname} to="/login"></Navigate>
    </div>
  );
};

export default ProtectedRoute;
