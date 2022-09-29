import React from "react";
import "./Break.css";

const test = (value) => {
  console.log("cliked", value, typeof value);
};

const Break = (props) => {
  const { value, getValue } = props;
  return (
    <div className="break mx-2 rounded">
      <button
        onClick={() => getValue(10)}
        className="break-button rounded-circle px-2 py-1"
      >
        10s
      </button>
      <button
        onClick={() => getValue(20)}
        className="break-button rounded-circle px-2 py-1"
      >
        20s
      </button>
      <button
        onClick={() => getValue(30)}
        className="break-button rounded-circle px-2 py-1"
      >
        30s
      </button>
      <button
        onClick={() => getValue(40)}
        className="break-button rounded-circle px-2 py-1"
      >
        40s
      </button>
      <button
        onClick={() => getValue(50)}
        className="break-button rounded-circle px-2 py-1"
      >
        50s
      </button>
    </div>
  );
};

export default Break;
