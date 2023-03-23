import "./index.css";
import { CiUser } from "react-icons/ci";
const TrendItems = ({ trends }) => {
  const {
    id,
    location,
    main_topic,
    second_topic,
    userName,
    nTweets,
    nPeopleTweeting,
  } = trends;
  return (
    <div className="trendTopics" id={id}>
      {location ? <p>Trending {location}</p> : null}
      {main_topic ? <h4>#{main_topic}</h4> : null}
      {second_topic ? <p>Trending with: # {second_topic}</p> : null}
      {userName ? (
        <span>
          <CiUser /> {userName} is Tweeting about this
        </span>
      ) : null}
      {nTweets ? <p>{nTweets}K Tweets</p> : null}
      {nPeopleTweeting ? (
        <p>{nPeopleTweeting} people are Tweeting about this</p>
      ) : null}
    </div>
  );
};

export default TrendItems;
