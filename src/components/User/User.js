import React from "react";
import "./User.css";

const User = () => {
  return (
    <div>
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
          <div className="fw-bold">75kg</div>
          <div>Weight</div>
        </div>

        <div className="height-info">
          <div className="fw-bold">5.10 ft</div>
          <div>Height</div>
        </div>
        <div className="age-info">
          <div className="fw-bold">24yrs</div>
          <div>Age</div>
        </div>
      </div>
    </div>
  );
};

export default User;
