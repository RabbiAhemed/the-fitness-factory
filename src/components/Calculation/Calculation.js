import React, { useState } from "react";
import Break from "../Break/Break";
import BreakTime from "../BreakTime/BreakTime";
import ExerciseTime from "../ExerciseTime/ExerciseTime";
import User from "../User/User";
import "./Calculation.css";

const Calculation = (props) => {
  const { totalTime } = props;

  const [breakTime, setBreakTime] = useState(0);
  const getValue = (data) => {
    console.log(data);
    setBreakTime(data);
  };

  return (
    <div className="calculation">
      <User></User>
      <br />
      <h4 style={{ textAlign: "start" }}>Add a break</h4>

      {/* break section */}
      <Break getValue={getValue}></Break>
      <br />
      <br />
      <div className="exercise-detail">
        <h5 style={{ textAlign: "start" }}>Exercise Detail</h5>
        <br />
        <ExerciseTime totalTime={totalTime}></ExerciseTime>
        <BreakTime breakTime={breakTime}></BreakTime>
      </div>
    </div>
  );
};

export default Calculation;
