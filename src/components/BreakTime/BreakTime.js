import React from "react";

const BreakTime = (props) => {
  const breakTime = props.breakTime;
  return (
    <div>
      <div className="time-section">
        <h6 style={{ textAlign: "start" }}>Break Time</h6>
        <h6 className="text-muted" style={{ textAlign: "start" }}>
          {breakTime} seconds
        </h6>
      </div>
    </div>
  );
};

export default BreakTime;
