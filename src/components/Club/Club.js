import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import "./Club.css";

const Club = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  return (
    <div className="activities">
      {activities.map((activity) => (
        <Activity activity={activity} key={activity.id}></Activity>
      ))}
    </div>
  );
};

export default Club;
