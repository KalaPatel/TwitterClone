import { RiHome7Fill } from "react-icons/ri";
import { CiCircleMore } from "react-icons/ci";
import { HiOutlineHashtag } from "react-icons/hi";
import { FiBell, FiBookmark } from "react-icons//fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { RiFileList2Line } from "react-icons/ri";
import "./index.css";

const SideMenu = ({ styleType }) => {
  return (
    <div className={styleType}>
      <ul className="list_container">
        <li className="list_Item icons">
          <RiHome7Fill />
          <span>Home</span>
        </li>
        <li className="list_Item icons">
          <HiOutlineHashtag className="icons" />

          <span>Explore</span>
        </li>
        <li className="list_Item icons">
          <FiBell />
          <span>Notification</span>
        </li>
        <li className="list_Item icons">
          <HiOutlineEnvelope />
          <span>Message</span>
        </li>
        <li className="list_Item icons">
          <FiBookmark />
          <span>Bookmark</span>
        </li>
        <li className="list_Item icons">
          <RiFileList2Line />
          <span>Lists</span>
        </li>
        <li className="list_Item icons">
          <div className="profile_img_container_sideMenu">
            <img
              className="profile_pic_sideMenu"
              src="https://images.unsplash.com/photo-1583147610149-78ac5cb5a303?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="profile pic"
            />
            <span>Profile</span>
          </div>
        </li>
        <li className="list_Item icons">
          <CiCircleMore />
          <span>More</span>
        </li>
      </ul>
    </div>
  );
};
export default SideMenu;
