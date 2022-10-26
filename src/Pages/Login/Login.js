import React from "react";

import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import './Login.css'

const Login = () => {
  const { googleLogin, githubLogin , userSingUp} = useContext(AuthContext);

  //google sign in
  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => console.error(error));
  };
  // github login
  const handleGithub = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => console.error(error));
  };
  
  const handleUserLogin =(event) =>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    userSingUp(email, password )
    .then(result => {
        const  user = result.user
        console.log(user)
        form.reset()
    })
    .then(error => console.error(error))
  }
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100  login-card">
            <div className="card-body">
              <form onSubmit={handleUserLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                  required
                  name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                  name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn bg-indigo-500 border-0">Login</button>
                </div>
              </form>
              <div className="flex justify-around">
                <button
                  onClick={handleGoogle}
                  className="text-4xl text-indigo-500  hover:text-orange-600"
                >
                  {" "}
                  <FaGoogle />{" "}
                </button>
                <button
                  onClick={handleGithub}
                  className="text-4xl text-indigo-500 hover:text-orange-600"
                >
                  {" "}
                  <FaGithub />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
