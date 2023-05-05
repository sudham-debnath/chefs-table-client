/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user?.email);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

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

            
            {/* Logged User Info */}
            {user?.email? (
              <button
                className="btn btn-primary border-none"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <li className="btn btn-primary border-none">Login</li>
              </Link>
            )}

            {/* <p>{user?.displayName}</p> */}
            <img className=" rounded-full w-14 ml-5" src={user?.photoURL} alt="" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
