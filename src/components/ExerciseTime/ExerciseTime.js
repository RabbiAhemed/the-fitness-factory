import React from "react";

const ExerciseTime = (props) => {
  const totalTime = props.totalTime;
  return (
    <div>
      <div className="time-section">
        <h6 style={{ textAlign: "start" }}>Exercise Time </h6>
        <h6 className="text-muted" style={{ textAlign: "start" }}>
          {totalTime}
        </h6>
      </div>
    </div>
  );
};

export default ExerciseTime;
