import BookmarksIcon from "@mui/icons-material/Bookmarks";
import ChatIcon from "@mui/icons-material/Chat";
import EventIcon from "@mui/icons-material/Event";
import GroupsIcon from "@mui/icons-material/Groups";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

import React from "react";

import "./Sidebar.css";

const Sidebar = () => {
  const friends = [
    { img: "/assests/persons/1.jpg", name: "Nila Alam" },
    { img: "/assests/persons/2.jpg", name: "Sayed Mursalin" },
    { img: "/assests/persons/3.jpg", name: "Hrithesh Varma" },
    { img: "/assests/persons/4.jpg", name: "Angelina Jelli" },
    { img: "/assests/persons/5.jpg", name: "Miss Ketty" },
    { img: "/assests/persons/6.jpg", name: "Suruj Jaman" },
    { img: "/assests/persons/7.jpg", name: "Adam White" },
    { img: "/assests/persons/8.jpg", name: "John Doe" },
  ];
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <GroupsIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BookmarksIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <QuestionMarkIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More...</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {friends.map((fr, index) => (
            <li key={index} className="sidebarFriend">
              <img src={fr.img} alt={fr.name} className="sidebarFriendImg" />
              <span className="sidebarFriendName">{fr.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
