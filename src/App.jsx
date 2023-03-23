import "./App.css";
import { useRef, useState } from "react";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import Modal from "./components/modal";
import TweetBtn from "./components/tweetBtn";

function App() {
  const [submit, setSubmit] = useState("");
  const [putModalOn, setPutModalOn] = useState(false);
  const [putPostData, setPutPostData] = useState([]);
  const headerNavRef = useRef(null);

  return (
    <div className="App">
      <div ref={headerNavRef}>
        <Header />
      </div>
      <Content
        refProp={headerNavRef}
        submit={submit}
        setPutPostData={setPutPostData}
        setPutModalOn={setPutModalOn}
      />
      <Footer setSubmit={setSubmit} />
      {putModalOn && (
        <Modal
          putPostData={putPostData}
          styletype="show"
          setPutModalOn={setPutModalOn}
        />
      )}

      <TweetBtn />
    </div>
  );
}

export default App;
