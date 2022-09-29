import React from "react";
import "./Activity.css";

const Activity = (props) => {
  const { activity, addToList } = props;
  const { name, image, description, age, seconds } = activity;

  return (
    <div className="card rounded-top">
      <img src={image} className="product-image p-2 rounded" alt="" />
      <div className="card-body">
        <h5 className="card-title text-black fw-bold">{name}</h5>
        <p className="card-text text-black description">{description}</p>
        <p className="text-black">For Age: {age}</p>
        <p className="text-black">Time Requires: {seconds}</p>
        <button
          className="btn btn-info text-white fw-bold"
          onClick={() => addToList(seconds)}
        >
          Add to list
        </button>
      </div>
    </div>
  );
};

export default Activity;
