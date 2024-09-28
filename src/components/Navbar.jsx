import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
  // theme toggle function
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

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
              <a href="#advanced">Features</a>
            </li>
            <li className="">
              <a href="#faq">FAQ</a>
            </li>
            <li className="mb-5">
              <a href="#footer">Footer</a>
            </li>
            <div className="navbar-end">
              <RouterLink to="login">
                <button className="btn bg-slate-400 text-gray-700 hover:bg-slate-400 hover:text-gray-900 w-40 rounded-md">
                  Log In
                </button>
              </RouterLink>
              <RouterLink to="signup">
                <button className="btn mt-10 px-6 w-40 rounded-md text-white  hover:text-gray-600 bg-blue-300">
                  Sign Up
                </button>
              </RouterLink>
              <li>
                <input
                  type="checkbox"
                  className="toggle toggle-info ml-7 mt-10 mb-5 lg:hidden"
                  onChange={handleToggle}
                  checked={theme === "dark"}
                />
              </li>
            </div>
          </ul>
        </div>
        <Link to="/" className="ml-20 md:pl-5 text-3xl flex  font-bold">
          <button className="pointer-events-none w-10 pr-2">
            <img src="/images/logoipsum-249.svg " className="w-10 mr-2" alt="logo" />
          </button>
          Weblify
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li className="">
            <a href="#advanced">Features</a>
          </li>
          <li className="">
            <a href="#faq">FAQ</a>
          </li>
          <li className="">
            <a href="#footer">Footer</a>
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
      <li>
        <input
          type="checkbox"
          className="toggle toggle-info ml-10 mr-10 hidden lg:flex"
          onChange={handleToggle}
          checked={theme === "dark"}
        />
      </li>
    </div>
  );
};

export default Navbar;
