import React from "react";
import "./View.css";

const View = ({ data, onClick }) => {
  if (!data) return null;
  //  console.log(data.name);
  {
    console.log();
  }
  return (
    <div id="view_card" onClick={onClick}>
      <div id="view_photo">Photo</div>
      <div id="view_info">
        <h1 id="view_name">{data.name || "Unnamed "}</h1>
        <p id="view_email">
          {" "}
          Contributers :{data.users?.length || "No Member"}
        </p>
      </div>
    </div>
  );
};

export default View;
