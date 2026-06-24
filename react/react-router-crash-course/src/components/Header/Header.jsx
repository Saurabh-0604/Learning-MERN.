import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="bg-white">
        <div className="max-w-screen-xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                alt="logo"
                className="h-12"
              />
            </Link>

            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
    ${isActive ? "text-orange-700 font-bold" : "text-gray-700"}
    hover:text-orange-700 hover:font-bold`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
    ${isActive ? "text-orange-700 font-bold" : "text-gray-700"}
    hover:text-orange-700 hover:font-bold`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
    ${isActive ? "text-orange-700 font-bold" : "text-gray-700"}
    hover:text-orange-700 hover:font-bold`
              }
            >
              Contact Us
            </NavLink>

            <NavLink
              to="/github"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
    ${isActive ? "text-orange-700 font-bold" : "text-gray-700"}
    hover:text-orange-700 hover:font-bold`
              }
            >
              Github
            </NavLink>

            <div className="flex items-center gap-6">
              <Link to="/contact">Log in</Link>

              <button className="bg-orange-600 text-white px-6 py-2 rounded-lg">
                Get started
              </button>
            </div>
          </div>
        </div>

        <hr />
      </header>
    </div>
  );
}

export default Header;
