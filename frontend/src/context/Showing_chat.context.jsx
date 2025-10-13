import React, { createContext, useState } from "react";

// 1️⃣ Create context
export const ViewChatScreen = createContext();

// 2️⃣ Create provider
export const ScreenViewProvider = ({ children }) => {
  const [viewChat, setViewChat] = useState(null); // default null, not string "false"
  const [viewScreen, setViewScreen] = useState(null);
  return (
    <ViewChatScreen.Provider
      value={{ viewChat, setViewChat, viewScreen, setViewScreen }}
    >
      {children}
    </ViewChatScreen.Provider>
  );
};
