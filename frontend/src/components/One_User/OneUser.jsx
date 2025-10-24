import React from "react";
// import "../view/View.css";
import "../One_User/One_User.css";
const OneUser = ({ data }) => {
    const [AddFriend, setAddFriend] = useState(false)
  if (!data) return <div>No user found</div>;
  return (
    <div id="view_friend">
      <div id="view_photo">Photo</div>
      <div id="view_info">
        <h1 id="view_name">{data.Username || "Unnamed "}</h1>
        <p id="view_email">{data.Email || "No Email"}</p>
      </div>
     <button  > add friend</button>
    </div>
  );
};

export default OneUser;
