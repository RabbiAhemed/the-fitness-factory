import React from "react";
import "./Break.css";

const Break = (props) => {
  const { getTime } = props;
  return (
    <div className="break mx-2 rounded">
      <button
        onClick={() => getTime(10)}
        className="break-button rounded-circle"
      >
        10s
      </button>
      <button
        onClick={() => getTime(20)}
        className="break-button rounded-circle"
      >
        20s
      </button>
      <button
        onClick={() => getTime(30)}
        className="break-button rounded-circle"
      >
        30s
      </button>
      <button
        onClick={() => getTime(40)}
        className="break-button rounded-circle"
      >
        40s
      </button>
      <button
        onClick={() => getTime(50)}
        className="break-button rounded-circle"
      >
        50s
      </button>
    </div>
  );
};

export default Break;
