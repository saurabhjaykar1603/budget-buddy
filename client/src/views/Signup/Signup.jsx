import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import showToast from "crunchy-toast";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [bank, setBank] = useState("other");

  async function signupUser() {
    if (!name) {
      showToast("name is required", "alert", 4000);
      return;
    }
    if (!email) {
      showToast("email is required", "alert", 4000);
      return;
    }
    if (!password) {
      showToast("password is required", "alert", 4000);
      return;
    }
    if (!mobile) {
      showToast("mobile number is required", "alert", 4000);
      return;
    }
    if (!city) {
      showToast("city is required", "alert", 4000);
      return;
    }
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/signups`,
      {
        userName: name,
        email: email,
        password: password,
        mobileNumber: mobile,
        city: city,
        bankName: bank,
      }
    );
    console.log(response.data);
    if (response.data.success) {
      showToast(response.data.message, "success", 3000);
      window.location.href = "/login";
    } else {
      showToast(response.data.message, "alert", 3000);

      setName("");
      setEmail("");
      setMobile("");
      setPassword("");
      setCity("");
      setBank("");
    }
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="form-box mx-auto mt-6 rounded-md">
        <form className="form">
          <span className="title">Sign up</span>
          <span className="subtitle">
            Create a free account with your email.
          </span>
          <div className="form-container">
            <input
              type="text"
              className="input mt-0 shadow"
              placeholder="enter your username"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="email"
              className="input mt-1 shadow"
              placeholder="enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="number"
              className="input mt-1 shadow"
              placeholder="enter mobile number"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
            <input
              type="text"
              className="input mt-1 shadow"
              placeholder="enter your city"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />

            <input
              type="password"
              className="input mt-1"
              placeholder="set a password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="relative inline-block text-left mt-0">
            <select
              className="block appearance-none w-full bg-red-100 border border-gray-300 text-red-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={bank}
              onChange={(e) => {
                setBank(e.target.value);
              }}
            >
              <option disabled>Select Your Bank</option>
              <option value="kotak">Kotak Mahindra Bank</option>
              <option value="maharashtra-bank">Maharashtra Bank</option>
              <option value="sbi">State Bank Of India</option>
              <option value="hdfc">HDFC Bank</option>
              <option value="axis">Axis Bank of India</option>
              <option value="badoda"> Bank Of Badoda</option>
              <option value="other">State Bank Of India</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 12.76l-1.41 1.41L6 10.58l-1.41 1.42L10 15 18 7l-1.41-1.41L10 12.76z" />
              </svg>
            </div>
          </div>

          <button
            className="rounded-sm bg-red-600 hover:bg-red-500 text-xl"
            type="button"
            onClick={signupUser}
          >
            Sign up
          </button>
        </form>
        <div className="form-section">
          <p>
            Have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
