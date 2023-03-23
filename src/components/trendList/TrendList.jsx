import "./index.css";
import { trendMock } from "../../mocks/trendsMocks";
import TrendItems from "../trendItems/";
const TrendList = ({ styleType }) => {
  return (
    <div className={styleType}>
      {trendMock.map((trend) => (
        <TrendItems key={trend.id} trends={trend} />
      ))}
    </div>
  );
};

export default TrendList;
