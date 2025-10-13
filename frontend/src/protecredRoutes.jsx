import { Outlet, Navigate } from "react-router-dom";
import React from "react";
import { AuthContext } from "./context/authContext.jsx";
import { useContext } from "react";

function ProtectedRoutes() {
  const { isAuth } = useContext(AuthContext);

  if (isAuth == null)
    return (
      <div
        className="spinner"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            padding: "10px",
            border: "7px solid blue",
            borderTop: "7px solid transparent",
            animation: "spin 0.7s linear infinite",
            borderRadius: "50%",
            height: "150px",
            width: "150px",
          }}
        ></div>
      </div>
    );

  return isAuth ? <Outlet /> : <Navigate to={"/login"} replace />;
}

export default ProtectedRoutes;
