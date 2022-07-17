import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    icon: "sun",
    text: "Lets hit the beach!",
  },
  winter: {
    icon: "snowflake",
    text: "Burr, its cold!",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, icon } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`massive ${icon} icon icon-left`} />
      <h1>{text}</h1>
      <i className={`massive ${icon} icon icon-right`} />
    </div>
  );
};

export default SeasonDisplay;
