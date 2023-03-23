import { useState } from "react";
import "./index.css";

const Modal = ({ putPostData, styletype, setPutModalOn }) => {
  console.log(putPostData);

  const [titlePost, setTitlePost] = useState("");
  const [bodyPost, setBodyPost] = useState("");
  const putFormSubmit = (e) => {
    e.preventDefault();
    fetch("https://dummyjson.com/posts/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: putPostData.id,
        title: titlePost,
        body: bodyPost,
        userId: putPostData.userId,
        tags: putPostData.tags,
        reactions: putPostData.reactions,
      }),
    }).then(setPutModalOn(false));
  };

  const cancelFormFunction = () => {
    setPutModalOn(false);
  };
  return (
    <div className={`Modal ${styletype}`}>
      <div className="overlay"></div>
      <div className="formContainer">
        <form onSubmit={putFormSubmit}>
          <input
            type="text"
            value={titlePost}
            placeholder="Title"
            onChange={(e) => setTitlePost(e.target.value)}
          />
          <textarea
            value={bodyPost}
            cols="25"
            rows="10"
            placeholder="Body"
            onChange={(e) => setBodyPost(e.target.value)}
          ></textarea>
          <input className="submitBtn" type="submit" value="Update Post" />
          <input
            className="cancelBtn"
            type="submit"
            value="Cancel"
            onClick={cancelFormFunction}
          />
        </form>
      </div>
    </div>
  );
};

export default Modal;
