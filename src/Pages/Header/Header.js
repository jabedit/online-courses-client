import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = (e) => {
    e.preventDefault();
    logOut();
  };
  return (
    <nav>
      <div className="navbar navbar-bg-color text-blue-500 mb-7">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
            >
              <li>
                <Link to="/">
                  <HiOutlineAcademicCap />
                  Courses
                </Link>
              </li>
              <li>
                <Link>FAQ</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <div>
                <LeftSideBar />
              </div>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
            <img
              style={{ height: "3rem", width: "5rem" }}
              src={logo}
              alt="img"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">
                <HiOutlineAcademicCap />
                Courses
              </Link>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <Link
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <img
                  style={{ height: "40px", width: "40px", borderRadius: "50%" }}
                  src={user.photoURL}
                  alt="img"
                />
              </Link>
              <Link
                onClick={handleLogOut}
                className=" bg-indigo-500 px-3 py-2 rounded-lg text-white font-semibold  mr-3 "
              >
                LogOut
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-indigo-500 px-3 py-2 rounded-lg text-white font-semibold mr-3 "
              >
                Login in
              </Link>
              <Link
                to="/register"
                className="bg-indigo-500 px-3 py-2 rounded-lg text-white font-semibold  "
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
