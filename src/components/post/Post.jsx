import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useState } from "react";
import { Users } from "../../dummyData";
import "./Post.css";

const Post = ({ post }) => {
  const { photo, like, comment, date, desc, userId } = post;

  const [liked, setLiked] = useState(like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikes = () => {
    setLiked(isLiked ? liked - 1 : liked + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((user) => user.id === userId)[0].img}
              alt=""
              className="postProfileImage"
            />
            <span className="postUserName">
              {/* {Users.filter((user) => user.id === userId)[0].name} */}
              {Users.filter((user) => user.id === userId)[0].name}
            </span>
            <span>
              <small className="postDate">{date}</small>
            </span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc}</span>
          <img className="postImage" src={photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="/assests/like.jpg"
              alt=""
              className="likeIcon"
              onClick={handleLikes}
            />
            <img
              src="/assests/heart.png"
              alt=""
              className="likeIcon"
              onClick={handleLikes}
            />
            <span className="postLikeCounter">{liked} peoples like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
