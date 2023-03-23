import SideTrends from "../sideTrend";
import { RiHome7Fill } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import { FiBell } from "react-icons//fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import "./index.css";
const Footer = ({ setSubmit }) => {
  return (
    <div className="Footer">
      <div className="footer_mobile">
        <RiHome7Fill className="icons" />
        <GoSearch className="icons" />
        <FiBell className="icons" />
        <HiOutlineEnvelope className="icons" />
      </div>
      <div className="larger-screen-footer">
        <SideTrends setSubmit={setSubmit} />
      </div>
    </div>
  );
};

export default Footer;
