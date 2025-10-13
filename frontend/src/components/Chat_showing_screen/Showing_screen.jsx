import React, { useContext } from "react";
// import { ViewContext } from "../../context/ViewContext.jsx";
import { ViewChatScreen } from "../../context/Showing_chat.context.jsx";
const Showing_screen = () => {
  // const { viewScreen } = useContext(ViewContext);
  const { ViewChat, setViewChat, viewScreen } = useContext(ViewChatScreen);
  // ✅ If viewScreen is null, show a placeholder
  if (!viewScreen) {
    return <div id="WholeScreen_chat">Select a project to view details</div>;
  }
  console.log(ViewChat);
  return (
    <div>
      <div>
        <h2>{viewScreen.name}</h2>
        <button
          onClick={(e) => {
            setViewChat(!ViewChat);
          }}
        >
          X
        </button>
      </div>
    </div>

    // ViewChat && (

    // <div id="WholeScreen_chat">
    //
    //   <p>ID: {viewScreen._id}</p>

    //   <h3>Users:</h3>
    //   {viewScreen.users && viewScreen.users.length > 0 ? (
    //     <ul>
    //       {viewScreen.users.map((user, index) => (
    //         <li key={index}>{user}</li>
    //       ))}
    //     </ul>
    //   ) : (
    //     <p>No users found.</p>
    //   )}
    // </div>
    // )
  );
};

export default Showing_screen;
