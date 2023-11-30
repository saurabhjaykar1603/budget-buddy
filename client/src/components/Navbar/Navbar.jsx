import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-slate-200 p-6">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-dark text-xl font-bold hover:text-red-600">
            <Link to="/" className="">
              Bugdet Buddy
            </Link>
          </div>

          {/* Navbar Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-dark  hover:text-red-700">
              Home
            </Link>
            <Link to="/about" className="text-dark  hover:text-red-700">
              About
            </Link>
            <Link
              to="/add_translations"
              className="text-dark  hover:text-red-700"
            >
              Add Transactions
            </Link>
            <Link
              to="/show_translations"
              className="text-dark  hover:text-red-700"
            >
              Show Transactions
            </Link>
            <Link to="/signup" className="text-dark  hover:text-red-700">
              Signup{" "}
            </Link>
            <Link to="/login" className="text-dark  hover:text-red-700">
              Login{" "}
            </Link>
            <Link className="text-dark">User 👋 </Link>
          </div>

          {/* Mobile Navbar Toggle */}
          <div className="md:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className="text-dark  hover:text-red-700"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar (hidden by default) */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "" : "hidden"
        } bg-slate-200 p-5 text-dark`}
      >
        <ul className="list-none p-0 m-0">
          <Link to="/" className="block py-2 text-dark  hover:text-red-700">
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 text-dark  hover:text-red-700"
          >
            About
          </Link>
          <Link
            to="/add_translations"
            className="block py-2 text-dark  hover:text-red-700"
          >
            Add Transactions
          </Link>
          <Link
            to="/show_translations"
            className="block py-2 text-dark  hover:text-red-700"
          >
            Show Transactions
          </Link>
          <Link
            to="/signup"
            className="block py-2 text-dark  hover:text-red-700"
          >
            Signup{" "}
          </Link>
          <Link
            to="/login"
            className="block py-2 text-dark  hover:text-red-700"
          >
            Login{" "}
          </Link>
          <Link className="block py-2 text-dark  hover:text-red-700">
            User 👋{" "}
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
