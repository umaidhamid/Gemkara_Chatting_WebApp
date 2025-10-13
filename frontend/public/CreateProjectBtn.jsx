import React, { useContext, useState } from "react";
import Create_Project from "../src/components/one-off/create_Project.jsx";
import { UserContext } from "../src/context/user.contex.jsx";

const CreateProjectBtn = () => {
  const { user } = useContext(UserContext);
  const [displayValue, setdisplayValue] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        style={{ display: displayValue ? "none" : "flex" }}
        onClick={() => setdisplayValue(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
      >
        ➕ Create Project
      </button>

      {displayValue && (
        <div className="mt-6 ">
          <Create_Project
            setdisplayValue={setdisplayValue}
            displayValue={displayValue}
          />
        </div>
      )}
    </div>
  );
};

export default CreateProjectBtn;
