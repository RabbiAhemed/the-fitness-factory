import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import Calculation from "../Calculation/Calculation";

import "./Home.css";

const Home = () => {
  const [activities, setActivities] = useState([]);
  const [time, setTime] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  const addToList = (seconds) => {
    const newTime = time + seconds;
    setTime(newTime);
  };
  return (
    <div className="home-container container">
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
