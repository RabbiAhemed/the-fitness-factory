import React from "react";
import "./Activity.css";

const Activity = (props) => {
  const { activity, addToList } = props;
  const { name, image, description, age, seconds } = activity;

  return (
    <div className="card">
      <img src={image} className="product-image" alt="" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p>For Age: {age}</p>
        <p>Time Requires: {seconds}</p>
        <button className="btn-info" onClick={() => addToList(seconds)}>
          Add to list
        </button>
      </div>
    </div>
  );
};

export default Activity;
