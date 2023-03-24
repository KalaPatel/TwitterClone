import "./index.css";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineGifBox } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { HiOutlineSparkles } from "react-icons/hi";
import PostList from "../postList";

const Content = ({ refProp, submit, setPutPostData, setPutModalOn }) => {
  // console.log(submit);
  return (
    <div className="Content">
      <div className="larger_screen_content">
        <div className="larger_screen_content_header">
          <h2>Home</h2>
          <HiOutlineSparkles className="icons" />
        </div>
        <div className="larger_screen_content_input">
          <div className="profile_img_container_input">
            <img
              className="profile_pic_input"
              src="https://images.unsplash.com/photo-1583147610149-78ac5cb5a303?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="profile pic"
            />
            <input type="text" placeholder="What's happening?" />
            <IoImageOutline className="icons" />
            <MdOutlineGifBox className="icons" />
            <VscGraph className="icons" />
          </div>
        </div>
      </div>
      <PostList
        refProp={refProp}
        submit={submit}
        setPutPostData={setPutPostData}
        setPutModalOn={setPutModalOn}
      />
    </div>
  );
};

export default Content;
