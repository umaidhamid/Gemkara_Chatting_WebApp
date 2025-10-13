import React, { useEffect, useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { UserContext } from "../../context/user.contex.jsx";
import "./Register.css";
import api from "../../config/axios.js";
import "./Register.css";
const Register = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Username, setUsername] = useState("");
  const navigate = useNavigate();
  const [successMsg, setSuccessMsg] = useState("");
  // const {setUser}=useContext(UserContext);
  function handleSubmit(event) {
    event.preventDefault();

    api
      .post("/user/register", { Email, Password, Username })
      .then((response) => {
        setSuccessMsg("Account created successfully!");
        setTimeout(() => {
          setUser(response.data.user);
          navigate("/Home");
        }, 2000); // wait 2s before redirect
      })
      .catch((error) => {
        console.log("Incoming request body:", Email, Password, Username);
        console.error("There was an error!", error);
      });
  }

  // ✅ The return should be OUTSIDE handleSubmit
  return (
    <div className="main-div flex">
      {successMsg && (
        <div className="success-message absolute top-10 left-1/2 transform -translate-x-1/2 bg-blue-900 rounded-lg text-white px-6 py-3 shadow-lg transition-all duration-500">
          {successMsg}
        </div>
      )}

      <div className="container">
        {/* Heading */}
        <div className="heading">
          <h1 className="text-3xl font-extrabold text-gray-800">
            Welcome to Gem Kara!
          </h1>
          <p className="text-gray-500 mt-2">
            Sign up to connect and chat with ease
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="inputField">
            <label htmlFor="Username">Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="Username"
              name="Username"
              required
            />
          </div>

          {/* Email */}
          <div className="inputField">
            <label htmlFor="Email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
            <button className="button" type="submit">Register</button>
          </div>
        </form>

        {/* Login Link */}
        <div className="BackLoginLink">
          Already have an account? <Link to="/Login">Login</Link>
        </div>
      </div>

      {/* Quotes */}
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

export default Register;
