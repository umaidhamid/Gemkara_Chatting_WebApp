import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import Sidebar from "../../components/Home/SideBar/Sidebar.jsx";
import Chat from "../../components/Home/chat/Chat.jsx";
import Group from "../../components/Home/group/Group.jsx";
import { ThemeContext } from "../../context/themeContext.jsx";
import { Sun, Moon } from "lucide-react";
import api from "../../config/axios.js";
import { AuthContext } from "../../context/authContext.jsx";
import Chat_screen from "../../components/Chat_showing_screen/Showing_screen.jsx";
// import { ViewProvider } from "../../context/ViewContext.jsx";
import { ScreenViewProvider } from "../../context/Showing_chat.context.jsx";
const Home = () => {
  const [activeTab, setactiveTab] = useState("chat");
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { setAuth } = useContext(AuthContext);

  function handleLogout(e) {
    api.get("/user/logout").then((res) => {
      setAuth(false);
    });
  }

  return (
    <div id="main_home" className={`main_home ${theme}`}>
      {/* Top Bar */}
      <div
        id="top_bar"
        className="flex justify-between items-center px-4 py-2 top-bar bg-white/10 backdrop-blur-md text-white shadow-md rounded-md"
      >
        <h1 className="text-xl font-bold text-blue-900">GemKara</h1>{" "}
        <div className="headerBtn flex gap-5 hover:rotate(20)">
          {" "}
          <button onClick={toggleTheme}>
            {theme === "light" ? <Moon size={30} /> : <Sun />}
            {/* Switch to {theme === "light" ? "Dark" : "Light"} Mode */}
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-1 text-red-900 font-bold hover:text-black rounded-md transition"
          >
            X
          </button>
        </div>
      </div>

      {/* Main Content */}
      {/* <ViewProvider> */}
      <ScreenViewProvider>
        <div id="content_wrapper" className="flex">
          <div id="sidebar_section">
            <Sidebar activeTab={activeTab} setactiveTab={setactiveTab} />
          </div>

          {activeTab === "chat" && (
            <div id="chat_section">
              <Chat activeTab={activeTab} />
              <Chat_screen />
            </div>
          )}

          {activeTab === "group" && (
            <div id="group_section">
              <Group activeTab={activeTab} />
              <Chat_screen />
            </div>
          )}
        </div>
      </ScreenViewProvider>
      {/* </ViewProvider> */}
    </div>
  );
};

export default Home;
