import React, { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext();
const UserContext = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [catid, setCatid] = useState("a");

  //creating user
  const handleCreatingUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const withGoogle = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //updateProfile
  const handleUpdateProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  //handle login
  const handleLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //handleLogout
  const logOut = () => {
    setLoading(true);
    localStorage.removeItem("jwtToken");
    return signOut(auth);
  };

  //objerb
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authcontext = {
    catid,
    setCatid,
    user,
    logOut,
    handleLogin,
    handleCreatingUser,
    handleUpdateProfile,
    withGoogle,
    loading,
  };
  return (
    <AuthContext.Provider value={authcontext}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
