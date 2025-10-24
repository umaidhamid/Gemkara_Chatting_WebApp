import React, { useState, useEffect } from "react";
import "./Chat.css";
import OneUser from "../../One_User/OneUser";
import axios from "../../../config/axios.js";

export const ShowFriends = () => {
  const [nonFriends, setNonFriends] = useState([]); // filtered users
  const [currentUser, setCurrentUser] = useState(null); // current user
  const [loading, setLoading] = useState(true);

  // Fetch current user
  useEffect(() => {
    axios
      .get("/user/me")
      .then((res) => {
        setCurrentUser(res.data.user);
        console.log("Current user:", res.data.user);
      })
      .catch((err) => console.error("Error fetching current user:", err));
  }, []); // only on mount

  // Fetch all users and filter non-friends
  useEffect(() => {
    if (!currentUser) return; // wait until currentUser is loaded

    axios
      .get("/users/allUsers")
      .then((res) => {
        const allUsers = res.data.data || [];
        const filtered = allUsers.filter(
          (user) =>
            user._id !== currentUser.id &&
            !currentUser.Friends?.includes(user._id)
        );
        setNonFriends(filtered);
      })
      .catch((err) => console.error("Error fetching users:", err))
      .finally(() => setLoading(false));
  }, [currentUser]); // run only when currentUser is loaded

  return (
    <div className="ShowFriendRoot flex-col gap-6 flex overflow-y-auto p-4">
      {loading ? (
        <p>Loading users...</p>
      ) : nonFriends.length === 0 ? (
        <p>No new friends available</p>
      ) : (
        nonFriends.map((user) => <OneUser key={user._id} data={user} />)
      )}
      <OneUser  />
      <OneUser  />
      <OneUser  />
    </div>
  );
};
