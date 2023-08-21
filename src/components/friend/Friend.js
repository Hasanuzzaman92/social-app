import React from "react";
import "./Friend.css";

const Friend = ({ user }) => {
  return (
    <li className="sidebarFriend">
      <img src={user.img} alt={user.name} className="sidebarFriendImg" />
      <span className="sidebarFriendName">{user.name}</span>
    </li>
  );
};

export default Friend;
