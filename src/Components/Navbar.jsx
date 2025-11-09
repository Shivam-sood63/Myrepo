import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-black text-white flex items-center justify-between px-9 py-5">
      <h1 className="font-bold text-2xl underline">MyPortfolio</h1>
      <a className="md:hidden text-2xl absolute top-5 right-8">
        <i className="fa-solid fa-bars"></i>
      </a>

      <nav>
        <ul className="hidden md:flex gap-6 font-semibold">
          <NavLink to="/">
            <li className="hover:text-blue-500 cursor-pointer duration-300">
              About
            </li>
          </NavLink>
          <NavLink to="/Skills">
            <li className="hover:text-blue-500 cursor-pointer duration-300">
              Skills
            </li>
          </NavLink>

          <NavLink to="/Projects">
            <li className="hover:text-blue-500 cursor-pointer duration-300">
              Projects
            </li>
          </NavLink>
          <NavLink to="/Contact">
            <li className="hover:text-blue-500 cursor-pointer duration-300">
              Contact
            </li>
          </NavLink>
        </ul>
      </nav>
      <button className="hidden md:flex font-semibold border px-4 py-2 rounded-md border-blue-500 text-white hover:bg-blue-700 text-sm hover:bg-linear-65 from-purple-700 to-blue-700">
        {" "}
        <a
          href="https://drive.google.com/file/d/19g_BU0ZzBu4Nfabbc-jm6alcvSwoEH8K/view?usp=drivesdk"
          download
        >
          Download Resume
        </a>
      </button>
    </div>
  );
};

export default Navbar;
