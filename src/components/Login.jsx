import React, { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { FaGoogle } from "react-icons/fa";
import imgLogin from "../assets/Tablet login-amico.png";
export default function Login() {
  const { signInUser, setUser, signInWithGoogle, setLoading } =
    useContext(authContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const data = { email, password };

    signInUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Login successful");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        toast.error(error.code);
      });
    form.reset();
  };
  // const handleSignInWithGoogle = () => {
  //   signInWithGoogle()
  //     .then((result) => {
  //       setUser(result.user);
  //       toast.success("Login successful");
  //       navigate(location?.state ? location?.state : "/");
  //     })
  //     .catch((error) => toast.error(error.code))
  //     .finally(() => setLoading(false));
  // };
  return (
    <div className="flex justify-center items-center gap-20 px-20 mt-16 py-12 bg-[url('https://i.ibb.co.com/MsBQY5f/cool-background.png')] bg-no-repeat bg-cover">
      <Helmet>
        <title>Crowdcube | Login</title>
      </Helmet>
      <div className="card bg-base-100 w-full flex-1 shrink-0 shadow-2xl">
        <div className="text-center btn bg-gradient-to-r from-primary to-secondary text-white">
          <button
            onClick={() => signInWithGoogle(navigate)}
            className="flex gap-3"
          >
            <FaGoogle></FaGoogle> Sign In With Google
          </button>
        </div>
        <form onSubmit={handleLogin} className="card-body">
          <h2 className="font-bold text-center text-2xl">LOGIN HERE</h2>
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
            <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
              Login
            </button>
          </div>
          <p className="text-center">
            Don't have an account? Please{" "}
            <Link className="text-red-500 font-bold" to="/register">
              Register
            </Link>
          </p>
        </form>
        <div></div>
      </div>
      {/* <div className="flex-1"></div> */}
      <div className="flex-1 hidden lg:flex">
        <img src={imgLogin} className="w-full" alt="" />
      </div>
    </div>
  );
}
