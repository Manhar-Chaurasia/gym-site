import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <>
      <div className="navbar-section container mx-auto  px-6 md:px-20">
        <ul className="py-5 flex items-center space-x-5 md:space-x-10 text-sm md:text-md">
          <img src={logo} className="w-6 md:w-10 mr-10 md:mr-16" alt="logo" />
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allexercises">Exercises</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
