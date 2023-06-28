import React from "react";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

  const navOptions = (
    <>
      <li>
        <Link className="font-semibold" to='/'>Home</Link>
      </li>
      <li>
        <Link className="font-semibold" to='/instructors'>About</Link>
      </li>
      <li>
        <Link className="font-semibold" to='/classes'>Skills</Link>
      </li>
      <li>
        <Link className="font-semibold" to='/classes'>Projects</Link>
      </li>
      <li>
        <Link className="font-semibold" to='/classes'>Contact</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black lg:text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">RIMON RON</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline btn-primary" href="https://drive.google.com/uc?id=1WEuRNXpFmOjjsQfMcUdUlXtl5jbkQWmv&export=download"download>Resume</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
