import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../screens/Login/Login.jsx";
import Register from "../screens/Register/Register.jsx";
import Home from "../screens/home/home.jsx";
import ProtectedRoutes from "../protecredRoutes.jsx";
const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login  />} />

        <Route element={<ProtectedRoutes />}>
         <Route path="/home" element={<Home />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="*" element={<div>Not Found 404</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
