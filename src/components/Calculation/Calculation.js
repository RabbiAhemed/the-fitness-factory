import React, { useState } from "react";
import Break from "../Break/Break";
import "./Calculation.css";

const Calculation = (props) => {
  const { totalTime } = props;

  // const objects = [
  //   { id: 1, value: 10 },
  //   { id: 2, value: 20 },
  //   { id: 3, value: 30 },
  //   { id: 4, value: 40 },
  //   { id: 5, value: 50 },
  // ];

  // const[break,setBreak]=useState(0);
  const getValue = (data) => {
    console.log(data);
  };

  return (
    <div className="calculation">
      <div className="user">
        <img
          src="https://i.ibb.co/c25GsfB/removed-bg.png"
          alt="abc"
          className="user-image"
        />
        <div className="user-info">
          <p className="fw-bold">Rabbi Ahemed</p>
          <small className="text-muted">Dhaka,Bangladesh</small>
        </div>
      </div>
      <div className="height-weight-age">
        <div className="weight-info">
          <div>75kg</div>
          <div>Weight</div>
        </div>

        <div className="height-info">
          <div>5.10 ft</div>
          <div>Height</div>
        </div>
        <div className="age-info">
          <div>24yrs</div>
          <div>Age</div>
        </div>
      </div>
      <br />
      <h4 style={{ textAlign: "start" }}>Add a break</h4>

      {/* {objects.map((object) => (
        <Break value={object.value} key={object.id}></Break>
      ))} */}
      {/* break section */}
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
      <br />
      <br />
      <div className="exercise-detail">
        <h5 style={{ textAlign: "start" }}>Exercise Detail</h5>
        <br />

        <div className="time-section">
          <h6 style={{ textAlign: "start" }}>Exercise Time </h6>
          <h6 className="text-muted" style={{ textAlign: "start" }}>
            {totalTime}
          </h6>
        </div>

        <div className="time-section">
          <h6 style={{ textAlign: "start" }}>Break Time</h6>
          <h6 className="text-muted" style={{ textAlign: "start" }}>
            0
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Calculation;
