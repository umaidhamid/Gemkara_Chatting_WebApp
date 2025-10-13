import React, { useState } from "react";
import axios from "../../config/axios.js";
import "./create_project.css";

const CreateProject = ({ setdisplayValue, displayValue, setProjects }) => {
  const [ProjectName, setProjectName] = useState("");
  const [notify, setnotify] = useState("");

  const SubmitEvent = (e) => {
    e.preventDefault();

    if (!ProjectName.trim()) {
      setnotify("Project name cannot be empty!");
      return;
    }
    setProjects((prev) => [...prev, { name: ProjectName }]);

    axios
      .post("/project/create", { name: ProjectName })
      .then((response) => {
        console.log("Project created:", response.data);
        setnotify("Group created!");
        setTimeout(() => {
          setdisplayValue(false);
        }, 600);
        console.log(ProjectName);
        setProjectName("");
      })
      .catch((error) => {
        console.error("Error creating project:", error.response?.data || error);
        setnotify("Error creating project!");
      });
  };

  return (
    <div
      id="create_project_overlay"
      style={{ display: displayValue ? "flex" : "none" }}
    >
      <div id="create_project_container">
        <h1 id="create_project_heading">Create Project</h1>

        <form id="create_project_form" onSubmit={SubmitEvent}>
          <input
            id="create_project_input"
            value={ProjectName}
            onChange={(e) => setProjectName(e.target.value)}
            type="text"
            placeholder="Project Name"
            name="create-project"
          />

          <div id="create_project_buttons">
            <button
              id="cancel_btn"
              type="button"
              onClick={() => setdisplayValue(false)}
            >
              ❌ Cancel
            </button>
            <button id="create_btn" type="submit">
              Create
            </button>
          </div>

          {notify && <h1 id="create_project_notify">{notify}</h1>}
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
