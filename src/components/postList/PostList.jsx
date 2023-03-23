import "./index.css";
import PostCard from "../postCard";
import { useEffect, useState, useRef } from "react";

const PostList = ({ refProp, submit, setPutPostData, setPutModalOn }) => {
  const [postData, setPostData] = useState([]);

  const filterPostBySearch = () =>
    postData.filter((text) => text.body.includes(submit));

  const postWindowRef = useRef(null);
  const navSectionRef = useRef(null);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(({ posts }) => setPostData(posts));
  }, []);
  const scrollEventFun = () => {
    {
      postWindowRef.current.scrollTop >= 333
        ? (navSectionRef.current.className = "show") &&
          (refProp.current.className = "posts_container_headerHide ")
        : (navSectionRef.current.className = "navSection") &&
          (refProp.current.className = "");
    }
  };

  return (
    <div
      className="posts_container"
      ref={postWindowRef}
      onScroll={scrollEventFun}
    >
      <div className="navSection" ref={navSectionRef}>
        <div className="allSection">
          <p>All</p>
        </div>
        <div className="mentionSection">
          <p>Mentions</p>
        </div>
      </div>
      {filterPostBySearch().map((post) => (
        <PostCard
          postData={post}
          key={post.id}
          setPutPostData={setPutPostData}
          setPutModalOn={setPutModalOn}
        />
      ))}
    </div>
  );
};
export default PostList;
