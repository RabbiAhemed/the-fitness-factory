import React from "react";
import "./Activity.css";

const Activity = (props) => {
  const activity = props.activity;

  return (
    <div className="card">
      <img src={activity.image} className="product-image" alt="" />
      <div className="card-body">
        <h5 className="card-title">{activity.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button>Add to list</button>
      </div>
    </div>
  );
};

export default Activity;
