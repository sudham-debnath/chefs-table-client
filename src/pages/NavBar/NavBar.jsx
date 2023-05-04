/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="px-14 py-5 bg-slate-100">
        <div className="navbar flex">
          <div className="navbar-start">
            <Link to="/" className="text-3xl font-bold">
              Chef's Table
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? " text-blue-600 font-bold " : ""
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? " text-blue-600 font-bold " : ""
                  }
                >
                  Login
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? " text-blue-600 font-bold " : ""
                  }
                >
                  Register
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/chefs"
                  className={({ isActive }) =>
                    isActive ? " text-blue-600 font-bold " : ""
                  }
                >
                  Chefs
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive ? " text-blue-600 font-bold " : ""
                  }
                >
                  Blogs
                </NavLink>
              </li>
              
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn btn-primary border-none">More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
