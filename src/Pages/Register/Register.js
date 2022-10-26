import React, { useState } from "react";
import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Register = () => {
    const [error, setError] = useState('')


  const { createUser } = useContext(AuthContext);


  const handleRegister = (event) =>{
    event.preventDefault()
    const form = event.target
    const fullName = form.name.value
    const email = form.email.value
    const password = form.password.value
    const confirmPass = form.confirmPassword.value
    const photoURL = form.PhotoURL.value
    console.log( photoURL, confirmPass, password,  fullName , email)
    if(password !== confirmPass){
        return setError("Please type same password  boot password field !!")
    }
    createUser(email, password )
    .then(result => {
        const  user = result.user
        console.log(user)
        form.reset()
    })
    .then(error => console.error(error))
    
  }
  return (
    <div>
      <div className=" ">
        <div className=" ">
          <div className=" shadow-2xl bg-base-100  md:w-6/12 mx-auto mt-7 login-card">

            <div className="card-body">
                { error  && <p className="text-orange-600"> {error}</p>}
              <form onSubmit={handleRegister}>
            
              <div className="form-control">
                  <label className="label">
                    <span className="label-text">FullName</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter Full Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="Type Email"
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
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    name="confirmPassword"
                    type="password"
                    placeholder="confirm-password"
                    className="input input-bordered"
                  />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input
                    name="PhotoURL"
                    type="text"
                    placeholder="Enter PhotoURL"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type='submit' className="btn bg-indigo-500 border-0">Register</button>
                </div>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
