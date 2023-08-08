import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assests/person/2.jpg"
              alt=""
              className="postProfileImage"
            />
            <span className="postUserName">Nila Alam</span>
            <span>
              <small className="postDate">5 Mins ago</small>
            </span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter"></div>
        <div className="postBottom"></div>
      </div>
    </div>
  );
};

export default Post;
