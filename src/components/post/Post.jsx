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
              src="/assests/persons/4.jpg"
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
        <div className="postCenter">
          <span className="postText">Hey it's my first post :)</span>
          <img className="postImage" src="/assests/post/post3.jpg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assests/like.jpg" alt="" className="likeIcon" />
            <img src="/assests/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">32 peoples like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
