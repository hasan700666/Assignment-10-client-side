import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/firebaseConfig";
import { AuthContext } from "./AuthContext";


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const CreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SingUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SingOut = () => {
    return signOut(auth);
  };

  const SingInByGoogle = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const MonitoringUser = () => {
    onAuthStateChanged(auth, (User) => {
      if (User) {
        //the user is sing in
        setUser(User);
        console.log(User);
      } else {
        //the user is sing out
        setUser(null);
      }
    });
  };

  const authData = {
    CreateUser,
    user,
    SingUser,
    MonitoringUser,
    SingOut,
    SingInByGoogle,
  };

  return (
    <>
      <AuthContext value={authData}>{children}</AuthContext>
    </>
  );
};

export default AuthProvider;
