import React, { useContext, useEffect, useState } from "react";
import { Plus } from "lucide-react";
import CreateProject from "../../one-off/create_Project";
import "./Group.css";
// import axios from "axios";
import View from "../../view/View.jsx";
// import { ViewContext } from "../../../context/ViewContext.jsx";
import { ViewChatScreen } from "../../../context/Showing_chat.context.jsx";
import api from "../../../config/axios.js";
const Group = ({ activeTab }) => {
  const [createBtn, setcreateBtn] = useState(false);
  const [Projects, setProjects] = useState([]);
  // const { setViewScreen } = useContext(ViewContext);
  const { ViewChat, setViewChat ,setViewScreen} = useContext(ViewChatScreen);
  // console.log(Projects);
  useEffect(() => {
    api.post("/project/all").then((res) => {
      console.log(res.data.Projects);
      setProjects(res.data.Projects || []);
    });
  }, []); // ✅ Correct place
  return (
    <div id="group_container">
      {/* Header */}
      <div id="group_header">
        <h1 id="group_title">{activeTab}</h1>
        <Plus
          id="group_plus"
          onClick={() => setcreateBtn(!createBtn)}
          color="#FFD700"
          size={30}
        />
      </div>

      {/* Search / New Chat Input */}
      <input
        id="group_search"
        placeholder="Search or Start New Chat"
        type="text"
      />

      {/* Chat Container */}
      <div id="group_chat_container">
        {Projects && Projects.length > 0 ? (
          Projects.map((project, index) => (
            <View
              onClick={() => {
                setViewScreen(project);
                setViewChat(true);
              }}
              key={index}
              data={project}
            />
          ))
        ) : (
          <p style={{ color: "white", textAlign: "center" }}>
            No projects found.
          </p>
        )}
      </div>

      <div id="group_create_project">
        {createBtn && (
          <CreateProject
            displayValue={createBtn}
            setdisplayValue={setcreateBtn}
            setProjects={setProjects}
          />
        )}
      </div>
    </div>
  );
};

export default Group;
