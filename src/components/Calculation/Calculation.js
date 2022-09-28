import React from "react";
import Break from "../Break/Break";
import "./Calculation.css";
const Calculation = (props) => {
  const { totalTime } = props;

  const objects = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
    { id: 4, value: 40 },
    { id: 5, value: 50 },
  ];

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

      {objects.map((object) => (
        <Break value={object.value} key={object.id}></Break>
      ))}
      {/* <div className="break">
        <button>10</button>
        <button>20</button>
        <button>30</button>
        <button>40</button>
      </div> */}
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
