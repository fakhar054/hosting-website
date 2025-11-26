import React, { useState } from "react";
import { FaServer } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full bg-white fixed z-50 shadow">
      <div className="flex items-center justify-between px-6 sm:px-12 md:px-14 py-8">
        {/* logo */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-2">
            <FaServer className="text-primary text-2xl" />
            <span className="text-2xl font-bold text-dark">ElitHosting</span>
          </div>
          {/* menu-items */}
          <div className="hidden md:flex items-center text-dark font-semibold ml-6 space-x-6">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to={"/hosting"}
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Hosting
            </NavLink>
            <NavLink
              to={"/domain"}
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Domain
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              About{" "}
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Contact
            </NavLink>
          </div>
        </div>
        {/* auth-button */}
        <div className="hidden md:flex items-center space-x-6 ">
          <Link
            to={"/auth"}
            className="text-dark font-semibold cursor-pointer rounded"
          >
            Login
          </Link>
          <Link
            to={"/auth"}
            className="px-6 py-2.5 bg-primary text-white font-semibold rounded cursor-pointer"
          >
            Sign up
          </Link>
        </div>
        {/* mobile-version */}
        <div className="md:hidden z-20">
          {showMenu ? (
            <FaXmark
              className="text-dark text-2xl cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
          ) : (
            <FaBars
              className="text-dark text-2xl cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
          )}
        </div>
      </div>
      {showMenu && (
        <div
          className="md:hidden flex flex-col items-center justify-center
        space-y-6 font-semibold text-white fixed w-64 h-screen bg-primary top-0 right-0"
        >
          <NavLink to={"/"} onClick={() => setShowMenu(!showMenu)}>
            Home
          </NavLink>
          <NavLink to={"/hosting"} onClick={() => setShowMenu(!showMenu)}>
            Hosting
          </NavLink>
          <NavLink to={"/domain"} onClick={() => setShowMenu(!showMenu)}>
            Domain
          </NavLink>
          <NavLink to={"/about"} onClick={() => setShowMenu(!showMenu)}>
            About{" "}
          </NavLink>
          <NavLink to={"/contact"} onClick={() => setShowMenu(!showMenu)}>
            Contact
          </NavLink>
        </div>
      )}
    </div>
  );
}
