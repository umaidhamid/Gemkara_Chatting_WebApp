import React, { useContext, useState } from "react";
import { Plus, Clock, Users } from "lucide-react";
import View from "../../view/View";
import { ShowFriends } from "./ShowFriends";
import "./Chat.css";

const Chat = ({ activeTab }) => {
  const [Showfriends, setShowfriends] = useState(false);
  function handleClick() {
    setShowfriends(!Showfriends);
  }
  return (
    <div id="chat_view" className="chat_view">
      {/* Header */}
      <div id="chat_header" className="chat_header">
        <h1 id="chat_title">{activeTab}</h1>
        <div className="flex gap-6">
          {" "}
          <Clock color="white" id="chat_plus_icon" />
          <Users color="white" id="chat_plus_icon" />
          <Plus id="chat_plus_icon" onClick={handleClick} />
        </div>
      </div>
      {Showfriends && <ShowFriends setShowfriends={setShowfriends} />}

      {/* Search / New Chat Input */}
      {!Showfriends && (
        <input
          id="chat_search"
          placeholder="Search or Start New Chat"
          type="text"
        />
      )}

      {/* Chat Container */}
      <div id="chat_container">
        <View />
        <View />
      </div>
    </div>
  );
};

export default Chat;
