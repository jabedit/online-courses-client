import React from "react";
import { Link } from "react-router-dom";

import logo from '../../images/logo.png'
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import { HiOutlineAcademicCap } from "react-icons/hi";

const Header = () => {
  return (
    <nav>
      <div className="navbar navbar-bg-color text-blue-500">
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
                <Link>Item 1</Link>
              </li>
              <li tabIndex={0}>
                <Link className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                
              </li>
              <li>
              <Link>Item 1</Link>
              </li>
              <div>
              <LeftSideBar />
              </div>
            </ul>
            
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
            <img style={{height: "3rem", width: "5rem"}} src={logo} alt="img" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
            <Link to='/'><HiOutlineAcademicCap />Courses</Link>
            </li>
            <li>
              <Link>
              FAQ
                
              </Link>
              
            </li>
            <li>
            <Link>Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/login' className="btn bg-indigo-500 border-0 mr-3 ">Login in</Link>
          <Link to='/register' className="btn  bg-indigo-500 border-0 ">Register</Link>

        </div>
      </div>
    </nav>
  );
};

export default Header;
