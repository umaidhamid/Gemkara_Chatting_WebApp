import React, { useContext } from "react";
import { Plus } from "lucide-react";
import View from "../../view/View";
import "./View-Chat.css";
// import { ViewContext } from "../../../context/ViewContext.jsx";

const Chat = ({ activeTab }) => {
  // const { setViewScreen } = useContext(ViewContext);
  return (
    <div id="chat_view" className="chat_view">
      {/* Header */}
      <div id="chat_header" className="chat_header">
        <h1 id="chat_title">{activeTab}</h1>
        <Plus id="chat_plus_icon" /> {/* Accent icon */}
      </div>

      {/* Search / New Chat Input */}
      <input
        id="chat_search"
        placeholder="Search or Start New Chat"
        type="text"
      />

      {/* Chat Container */}
      <div id="chat_container">
        <View />
        <View />
        <View />
        <View />
        <View />
        <View />
        <View />
      </div>
    </div>
  );
};

export default Chat;
