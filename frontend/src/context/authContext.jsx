import React, { createContext, useState } from "react";
import { useEffect } from "react";
import api from "../config/axios";
// Create the context
export const AuthContext = createContext();
// Create the provider component
export const AuthProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(null);

  useEffect(() => {
    api
      .get("/user/me")
      .then((res) => {
        setAuth(true);
      })
      .catch(() => {
        setAuth(false);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
