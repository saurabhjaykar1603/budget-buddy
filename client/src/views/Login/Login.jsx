import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link, json } from "react-router-dom";
import showToast from "crunchy-toast";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const getloggedInUser = JSON.parse(localStorage.getItem("user" || "{}"));
    if (getloggedInUser) {
      alert("You have already logged in");
      window.location.href = "/show_translations";
    }
  }, []);

  const loginUser = async () => {
    if (!email) {
      showToast("email is required", "alert", 4000);
      return;
    }
    if (!password) {
      showToast("password is required", "alert", 4000);
      return;
    }
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/logins`,
      {
        email,
        password,
      }
    );
    console.log(response?.data?.data);

    if (response?.data?.success) {
      showToast(response.data.message, "success", 4000);
      localStorage.setItem("user", JSON.stringify(response?.data?.data));
      window.location.href = "/add_translations";
    } else {
      showToast(response.data.message, "warning", 4000);
    }
  };
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="form-box mx-auto mt-20 rounded-md">
        <form className="form">
          <span className="title">Login</span>
          <span className="subtitle">Login with you Email and Password</span>
          <div className="form-container mt-0">
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
              type="password"
              className="input mt-1"
              placeholder="set a password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button
            className="rounded-sm bg-red-600 hover:bg-red-500 text-xl"
            type="button"
            onClick={loginUser}
          >
            Login
          </button>
        </form>
        <div className="form-section">
          <p>
            You Dont Have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
