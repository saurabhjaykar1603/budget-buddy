import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getLoggedInUserFromLocalStorage = JSON.parse(
      localStorage.getItem("user") || "{}"
    );
    setUser(getLoggedInUserFromLocalStorage);
  }, []);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-slate-200 p-6  z-50">
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
              Show Transactionsd
            </Link>
            {user.userName ? null : (
              <>
                <Link to="/signup" className="text-dark hover:text-red-700">
                  Signup
                </Link>
                <Link to="/login" className="text-dark hover:text-red-700">
                  Login
                </Link>
              </>
            )}

            <span className="text-dark cursor-pointer">
              Hello {user?.userName || "User "} ! "👋"
            </span>
            {user?.userName ? (
              <span
                className="pointer login-links fw-bold fs-5 ms-2 cursor-pointer"
                onClick={() => {
                  localStorage.removeItem("user");
                  window.location.href = "/login";
                }}
              >
                <button className="Btn-logout">
                  <div className="sign">
                    <svg viewBox="0 0 512 512">
                      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                    </svg>
                  </div>

                  <div className="text">Logout</div>
                </button>
              </span>
            ) : null}
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
        <ul className="list-none p-0 m-0 ">
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
          {user.userName ? null : (
              <>
                <Link to="/signup" className="text-dark block py-2 hover:text-red-700">
                  Signup
                </Link>
                <Link to="/login" className="text-dark block py-2 hover:text-red-700">
                  Login
                </Link>
              </>
            )}
          <p className="block py-2 text-dark  hover:text-red-700 cursor-pointer ">
            <span className="text-dark cursor-pointer mt-10">
              Hello {user?.userName || "User "} ! "👋"
            </span>
            {user?.userName ? (
              <span
                className="pointer login-links fw-bold fs-5 ms-2 cursor-pointer"
                onClick={() => {
                  localStorage.removeItem("user");
                  window.location.href = "/login";
                }}
              >
                <button className="Btn-logout">
                  <div className="sign">
                    <svg viewBox="0 0 512 512">
                      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                    </svg>
                  </div>

                  <div className="text">Logout</div>
                </button>
              </span>
            ) : null}
          </p>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
