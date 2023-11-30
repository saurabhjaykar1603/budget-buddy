import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
