import React from "react";
import { Users } from "../../dummyData";

import "./Rightbar.css";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
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
      </div>
    </div>
  );
};

export default Rightbar;
