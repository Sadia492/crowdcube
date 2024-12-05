import React, { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const { signInUser, setUser, signInWithGoogle } = useContext(authContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const data = { email, password };
    console.log(data);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        toast.error(error.code);
        console.log(error);
      });
  };
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        console.log("sign In with google successful");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="text-center btn btn-outline">
          <button onClick={handleSignInWithGoogle}>Sign In With Google</button>
        </div>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <label className="input input-bordered flex  justify-between items-center gap-2">
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="password"
                className=""
                required
              />

              <button onClick={() => setShow(!show)} type="button" className="">
                {show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </button>
            </label>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="text-center">
            Don't have an account? Please{" "}
            <Link className="text-red-500 font-bold" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
