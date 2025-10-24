import React, { useEffect, useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import api from "../../config/axios.js";
import { AuthContext } from "../../context/authContext.jsx";

const Login = ({ setLogin }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const [successMsg, setSuccessMsg] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    api
      .post("/user/login", { Email, Password })
      .then((response) => {
        setSuccessMsg("Login successfully!");

        setAuth(true);
        setTimeout(() => {
          navigate("/Home");
        }, 2000); // wait 2s before redirect
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setSuccessMsg(error.response.data.message || "Login failed!");
      });
  }

  return (
    <div className="main-div">
      {successMsg && (
        <div className="success-message absolute top-10 left-1/2 transform -translate-x-1/2 bg-blue-900 rounded-lg text-white px-6 py-3 shadow-lg transition-all duration-500">
          {successMsg}
        </div>
      )}
      <div className="container">
        {/* Heading */}
        <div className="heading">
          <h1 className="text-3xl font-extrabold text-gray-800">
            Welcome Back to <br /> Gem Kara!
          </h1>
          <p className="text-gray-500 mt-2 ">
            Login to your account and start chatting
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="inputField">
            <label htmlFor="Email">Email </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              id="Email"
              name="Email"
              required
            />
          </div>

          {/* Password */}
          <div className="inputField">
            <label htmlFor="Password">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              id="Password"
              name="Password"
              required
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="checkboxField">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>

          {/* Submit Button */}
          <div className="inputField">
            <button className="button" type="submit">
              Login
            </button>
          </div>
        </form>

        {/* Register Link */}
        <div className="registerLink">
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>

      <h1 className="quote1">
        Unlock your inner voice <br />
        start the conversation.
      </h1>
      <h1 className="quote2">
        Connect with clarity, <br />
        communicate with purpose.
      </h1>
      <h1 className="quote3">
        Let your ideas shine <br /> across boundaries.
      </h1>
      <h1 className="quote4">
        Inspiration begins when <br /> you take the first step.
      </h1>
    </div>
  );
};

export default Login;
