import React, { useContext } from "react";
// import { ViewContext } from "../../context/ViewContext.jsx";
import { ViewChatScreen } from "../../context/Showing_chat.context.jsx";
import "./Showing_screen.css";
const Showing_screen = () => {
  // const { viewScreen } = useContext(ViewContext);
  const { ViewChat, setViewChat, viewScreen, setViewScreen } =
    useContext(ViewChatScreen);
  // ✅ If viewScreen is null, show a placeholder
  if (!viewScreen) {
    return (
      <div id="line" className=" flex-1 w-full h-full flex items-center justify-center  ">
       Start Chat
      </div>
    );
  }
  console.log(ViewChat);
  return (
    <div id="WholeScreen_chat" className="WholeScreen_chat flex-1 ">
      <div id="Heading_section">
        <h2 id="Name">{viewScreen.name}</h2>
        <button id="Close"
          className="bg-red-900"
          onClick={(e) => {
            setViewScreen(false);
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
