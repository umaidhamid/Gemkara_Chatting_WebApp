import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../../context/themeContext.jsx"; // adjust path
import {
  MessageCircle,
  Phone,
  Video,
  Circle,
  Star,
  Trash2,
  Settings,
  Users,
} from "lucide-react";
import "./Side-bar.css";
const Sidebar = ({ activeTab, setactiveTab }) => {
  const { theme } = useContext(ThemeContext); // get current theme
  return (
    <div id="sidebar" className={`sidebar ${theme}`}>
      {/* ===== Top Section ===== */}
      <div id="sidebar_top" className="sidebar-top">
        <button
          id="chat_btn"
          className={`sidebar-btn ${activeTab === "chat" ? "active" : ""}`}
          onClick={() => setactiveTab("chat")}
        >
          <MessageCircle size={22} />
        </button>
        <button
          id="phone_btn"
          className={`sidebar-btn ${activeTab === "phone" ? "active" : ""}`}
          onClick={() => setactiveTab("phone")}
        >
          <Phone size={22} />
        </button>
        <button
          id="video_btn"
          className={`sidebar-btn ${activeTab === "video" ? "active" : ""}`}
          onClick={() => setactiveTab("video")}
        >
          <Video size={22} />
        </button>
        <button
          id="group_btn"
          className={`sidebar-btn ${activeTab === "group" ? "active" : ""}`}
          onClick={() => setactiveTab("group")}
        >
          <Users size={22} />
        </button>
      </div>

      {/* ===== Middle Divider ===== */}
      <div id="sidebar_divider" className="sidebar-divider"></div>

      {/* ===== Bottom Section ===== */}
      <div id="sidebar_bottom" className="sidebar-bottom">
        <button className="sidebar-btn">
          <Star size={22} />
        </button>
        <button className="sidebar-btn">
          <Trash2 size={22} />
        </button>
        <button className="sidebar-btn">
          <Settings size={22} />
        </button>
        <button className="sidebar-btn">
          <Circle size={22} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
