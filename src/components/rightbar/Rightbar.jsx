import React from "react";
import { Users } from "../../dummyData";

import ProfileFriend from "../profileFriend/ProfileFriend";
import "./Rightbar.css";

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birdthdayContainer">
          <img className="birthdayImg" src="assests/gift.png" alt="" />
          <span className="birthdayText">
            <b>Tuhin Chowdhury</b> and <b>3 others</b> friend have a birthday
            today
          </span>
        </div>
        <img src="/assests/ad.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <li key={user.id} className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src={user.img} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUserName">{user.name}</span>
            </li>
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Bangladesh</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relation:</span>
            <span className="rightbarInfoValue">Singel</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {Users.map((user) => (
            <ProfileFriend key={user.id} user={user} />
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
