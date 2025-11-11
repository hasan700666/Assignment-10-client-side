import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Firebase/firebaseConfig";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

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

  const UpdateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const UpdateNamePhotos = (name, photo) => {
    return setUser({ ...user, displayName: name, photoURL: photo });
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        //the user is sing in
        setUser(currentUser);
        setLoader(false)
        //console.log(currentUser);
      } else {
        //the user is sing out
        setUser(null);
      }
    });

    return () => {
      unsubcribe();
    };
  }, []);

  const authData = {
    CreateUser,
    user,
    SingUser,
    SingOut,
    SingInByGoogle,
    UpdateUser,
    setUser,
    UpdateNamePhotos,
    loader
  };

  return (
    <>
      <AuthContext value={authData}>{children}</AuthContext>
    </>
  );
};

export default AuthProvider;
