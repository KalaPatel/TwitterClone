import "./index.css";
import TrendList from "../trendList";
import { CiSettings } from "react-icons/ci";
import { useState } from "react";

const SideTrends = ({ setSubmit }) => {
  const [searchedText, setSearchedText] = useState("");

  const searchBarContent = (e) => {
    setSearchedText(e.target.value);
  };
  const searchSubmitButton = (e) => {
    if (e.key === "Enter") {
      setSubmit(searchedText);
    }
  };

  return (
    <div className="SideTrend">
      <div className="input_container">
        <input
          type="text"
          value={searchedText}
          placeholder="Search twitter"
          onChange={searchBarContent}
          onKeyDown={searchSubmitButton}
        />
      </div>
      <div className="TrendContainer .TrendContainer_mobileMenu">
        <div className="trendCaption">
          <h2>Trends for you</h2>
          <CiSettings className="trends_icons" />
        </div>
        <TrendList styleType="" />
        <p className="link"> Show More</p>
      </div>
    </div>
  );
};

export default SideTrends;
