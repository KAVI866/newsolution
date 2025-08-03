import React, { useContext, useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
  const [sidemenu, setSideMenu] = useState(false);
  return (
    <div>
      {/* Main navbar */}
      <div className=" text-center font-medium ">
        <div className=" flex justify-between items-center py-4 px-4 gap-6">
          <Link to="/" >
            <img src={assets.logo} className="w-30 sm:w-40" alt="" />
          </Link>
          <ul className="hidden sm:flex justify-between  w-1/2 font-medium text-lg">
            <NavLink to="/">
              <p className=" text-gray-700 hover:text-blue-600 ">Home</p>            </NavLink>
            <NavLink to="/about">
              <p className=" text-gray-700 hover:text-blue-600 ">About</p>            </NavLink>
            <NavLink to="/service">
              <p className=" text-gray-700 hover:text-blue-600 ">Service</p>
            </NavLink>
            <NavLink to="/contact">
              <p className=" text-gray-700 hover:text-blue-600 ">Contact</p>
            </NavLink>
          </ul>
          <div className="flex gap-2">
            <img
              src={assets.menu_icon}
              className=" w-5 h-5 cursor-pointer sm:hidden"
              onClick={() => setSideMenu(true)}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Side navbar */}
      <div
        className={` absolute top-0 left-0 right-0 overflow-hidden p-4 transition-all z-10 ${
          sidemenu ? "w-full h-[100vh]  bg-white" : "w-0 h-0"
        } sm:hidden`}
      >
        <div
          className="flex  gap-4 cursor-pointer"
          onClick={() => setSideMenu(false)}
        >
          <img src={assets.dropdown_icon} className="rotate-180 w-4" alt="" />
          <p className="font-medium text-black">Back</p>
        </div>
        <div className="flex flex-col gap-6 py-4">
          <NavLink
            onClick={() => setSideMenu(false)}
            className="text-black"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setSideMenu(false)}
            className="text-black"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setSideMenu(false)}
            className="text-black"
            to="/service"
          >
            Service
          </NavLink>
          <NavLink
            onClick={() => setSideMenu(false)}
            className="text-black"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};
