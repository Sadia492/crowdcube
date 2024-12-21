import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { toast } from "react-toastify";
import axios from "axios";

export const authContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = (navigate) => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        toast.success("Login Successful");
        navigate("/");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const updateUser = (profileData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profileData);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser?.email) {
        const { data } = await axios.post(
          `${import.meta.env.VITE_URL}/jwt`,
          { email: currentUser?.email },
          { withCredentials: true }
        );
        console.log(data);
        setLoading(false);
      } else {
        const { data } = await axios.get(`${import.meta.env.VITE_URL}/logout`, {
          withCredentials: true,
        });
        console.log(data);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
    updateUser,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
}
