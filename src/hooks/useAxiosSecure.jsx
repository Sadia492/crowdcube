import axios from "axios";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_URL,
  withCredentials: true,
});

import React, { useContext, useEffect } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function useAxiosSecure() {
  const { signOutUser } = useContext(authContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          signOutUser().then(() => {
            navigate("/login");
          });
        }
      }
    );
  }, [signOutUser, navigate]);
  return axiosSecure;
}
