import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import Calculation from "../Calculation/Calculation";

import "./Home.css";

const Home = () => {
  const [activities, setActivities] = useState([]);
  const [time, setTime] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  const addToList = (seconds) => {
    const newArray = [...time, seconds];
    setTime(newArray);
  };
  return (
    <div className="home-container">
      <div className="activities">
        {activities.map((activity) => (
          <Activity
            activity={activity}
            key={activity.id}
            addToList={addToList}
          ></Activity>
        ))}
      </div>
      <div>
        <Calculation totalTime={time}></Calculation>
      </div>
    </div>
  );
};

export default Home;
