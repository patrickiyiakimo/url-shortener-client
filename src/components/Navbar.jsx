import React from "react";
import { Link as RouterLink } from "react-router-dom";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 font-abc shadow-xl fixed z-50 top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52  p-2 shadow"
          >
            <li className="">
              <a>Features</a>
            </li>
            <li className="">
              <a>Pricing</a>
            </li>
            <li className="">
              <a>Resources</a>
            </li>
            <div className="navbar-end">
              <RouterLink to="login">
                <button className="btn w-40 rounded-md">Log In</button>
              </RouterLink>
              <RouterLink to="signup">
                <button className="btn mt-3 px-6 w-40 rounded-md text-white  hover:text-gray-600 bg-blue-300">
                  Sign Up
                </button>
              </RouterLink>
            </div>
          </ul>
        </div>
        <a className="ml-20 md:pl-5 text-3xl font-bold ">Weblify</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li className="">
            <a>Features</a>
          </li>
          <li className="">
            <a>Pricing</a>
          </li>
          <li className="">
            <a>Resources</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden md:block ml-40">
        <RouterLink to="login">
          <button className="btn rounded-full px-6">Log In</button>
        </RouterLink>
        <RouterLink to="signup">
          <button className="btn m-3 px-6 rounded-full text-white  hover:text-gray-600 bg-blue-300">
            Sign Up
          </button>
        </RouterLink>
      </div>
    </div>
  );
};

export default Navbar;
