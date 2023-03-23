import "./index.css";
import { useEffect, useState } from "react";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
const PostCard = ({ postData, setPutPostData, setPutModalOn }) => {
  const [userData, setUserData] = useState([]);
  const { body, userId } = postData;

  const updatePostFun = () => {
    setPutPostData(postData);
    setPutModalOn(true);
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/user/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div className="PostCard">
      <div className="img_container">
        <img
          className="profile_pic"
          src={userData.image}
          alt="Profile picture"
        />
      </div>
      <div className="post_content">
        <div className="user_info">
          <div>
            <span className="user_name">{userData.username}</span>
            <span className="user_email">{userData.email}</span>
          </div>
          <IoIosArrowDown className="post_icons" />
        </div>
        <p>{body}</p>
        <div className="icons_container">
          <div>
            <FaRegComment className="post_icons comment" />
            <span>5</span>
          </div>
          <div>
            <AiOutlineRetweet className="post_icons retweet" />
            <span>5</span>
          </div>
          <div>
            <FaRegHeart className="post_icons heart" />
            <span>5</span>
          </div>

          <div>
            <BiUpload className="post_icons upload" onClick={updatePostFun} />
            <span>5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
