import React from "react";
import "./ProfileFriend.css";

const ProfileFriend = ({ user }) => {
  return (
    <div className="rightbarFollowing">
      <img className="rightbarFollowingImage" src={user.img} alt="" />
      <span className="rightbarFollowingName">{user.name}</span>
    </div>
  );
};

export default ProfileFriend;
