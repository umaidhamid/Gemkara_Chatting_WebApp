import React from "react";

import AppRoute from "./Routes/AppRoute.jsx";
// import { UserProvider } from "./context/user.contex.jsx";
import { ThemeProvider } from "./context/themeContext.jsx";
import { AuthProvider } from "./context/authContext.jsx";
const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppRoute />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
